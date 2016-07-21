var helper = {};

helper.now = Date.now || function () {
    return new Date().getTime();
};

helper.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : helper.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = helper.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};


define(['avalon', 'text!./mc.dialogtest.html', 'css!./mc.dialogtest.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:dialogtest", {
        //外部参数 
        size: "normal", //large, small
        padding: 15, 
        draggable: true,
        buttons: [], //footer显示的按钮列表 [label 按钮文字] [type 类型 [confirm][cancel]] 
        bgClose: false, //点击背景是否可以关闭模态窗口
        confirmFailClose: true,//确认失败时关闭  --EX.通常表单在内.确认失败不关闭弹窗
        //外部事件
        onShowed: null,
        onHided: null,
        //btn
        onCancel: _interface,
        onConfirm: _interface, 
        //外部接口
        setTitle: _interface,
        getTitle: _interface,
        show: _interface,
        hide: _interface,
        isShow :_interface,
        //内部属性
        title: "", //模态窗口title
        content: "",
        lindex: -1, //布局中的序号 
        showState: false, //是否显示,默认隐藏
        //内部事件
        btnClick: _interface,
        clickDialog: _interface,//点击自身box prevt
        //拖动使用的
        onMousedown: _interface,// 
        onMouseup: _interface,//
        //内部接口
        _trigger: _interface,
        getBtnType: _interface, //获取按奶类型
        hideByBg: _interface,//点背景隐藏
        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //======= 内部事件 START =======//
            /**
             * 按钮点击事件
             * @param {} ev 动作类型
             * @param {} btnVm 被点击的按钮的vm
             * @returns {} 
             */
            vm.btnClick = function (ev, btnVm) {
                //换成只有,2种CB的写法,需要扩展再换回来
                //var callback = btnVm.lindex !== -1 && vm.buttons[btnVm.lindex].callback; 
                //if (typeof callback == "function") {
                //    if (callback(ev, vm)) {
                //        vm.hide({}, true);
                //    }
                //}
                if (btnVm.type === 'confirm') {
                    //确认CB
                    vm.onConfirm().then(function () {
                        //正确
                        vm.hide();
                    }, function () {
                        //错误时是否关闭
                        confirmFailClose
                        ?  vm.hide()
                        : null 
                    });
                } else {
                    //取消CB
                    vm.onCancel();
                    vm.hide();
                    
                }
               

            }
            /**
             * 模态窗口点击时事件
             * @param {} ev 动作类型
             * @returns {} 
             */
            vm.clickDialog = function (ev) {
                //阻止冒泡(避免点击弹出框时 弹出框关闭)
                ev.cancelBubble = true;
            }
             


            //测试IE阴影拖动
            var isIE = navigator.appName === "Microsoft Internet Explorer";
            /**
            * 按住头
            * @param {} ev 动作类型
            * @returns {} 
            */
            //todo,组件迁移.
            vm.onMousedown = function (ev) {
                //todo,碰撞检测 
                if (!vm.draggable) return false;
                //容器,IE换容器
                var $pat = $(ev.target).parents('.mc-modal-dialog');
                //复制real offset,宽度,事件等
                if (isIE) {
                    $pat = $('<div id="vir-pat" ></div>')
                        .width($pat.width())
                        .height($pat.height())
                        .appendTo("body")
                        .offset($pat.offset()).mouseup(vm.onMouseup.bind($pat));
                    //他的mouseup无用了
                    $(ev.target).trigger('mouseup');
                } else {
                    //使用原来的拖动元素来bind
                    $(ev.target).mouseup(vm.onMouseup);
                }
                //初始坐标
                var oldX = ev.pageX, oldY = ev.pageY;
                //必须 throttle 卡成一匹马
                var dialogMove = function (event) {
                    var x = event.pageX, y = event.pageY;
                    var dx = x - oldX, dy = y - oldY;
                    //便宜
                    $pat.offset(function (n, target) {
                        var newPos = new Object();
                        newPos.left = target.left + dx
                        newPos.top = target.top + dy
                        return newPos;
                    });
                    //新记录old
                    oldX = x,
                    oldY = y;

                };
                if (isIE) {
                    $(document).bind('mousemove', helper.throttle(dialogMove, 90));
                } else {
                    $(document).bind('mousemove', helper.throttle(dialogMove, 30));
                }
                


                ev.cancelBubble = true;
            }

            /**
            * 松开头
            * @param {} ev 动作类型
            * @returns {} 
            */
            vm.onMouseup = function (ev) {
                //todo unbing target fn instead of all fn
                //bug..跟4399过障碍小游戏一样...移出窗口会找不到事件...
                if (!vm.draggable) return false;
                if (isIE) {
                    var $pat = this;
                    var $virPat = $('#vir-pat');
                    // real同步vir坐标 
                    $pat.offset($virPat.offset());  
                    //释放资源 
                    //删vir dom
                    $virPat.remove();
                } else {
                    //解绑原元素
                    $(ev.target).unbind('mouseup');
                }
                //解绑
                $(document).unbind('mousemove');
                ev.cancelBubble = true;
            }

           
                
                
             
            //======= 内部事件 END =======//

            //======= 内部接口 START =======//
            /**
             * 事件触发器
             * @param {} ev 动作类型
             * @param {} type 事件类型
             * @returns {} 
             */
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "showed":
                        if (typeof vm.onShowed === "function") {
                            vm.onShowed(ev, vm);
                        }
                        break;
                    case "hided":
                        if (typeof vm.onHided === "function") {
                            vm.onHided(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            vm.getBtnType = function (idx) {
                return vm.buttons[idx].type;
            }
            //======= 内部接口 END =======//

            //======= 外部接口 START =======//
            /**doc
             * @description {设置title}
             * @param {title} {要设置的title}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.setTitle = function (title) {
                vm.title = title;
                return vm;
            }
            /**doc
             * @description {返回title}
             * @returns {String} {title字符串}
             */
            vm.getTitle = function () {
                return vm.title;
            }
            /**doc
             * @description {显示模态窗口}
             * @returns {vm} {当前调用的vm对象}
             */ 
            vm.show = function () { 
                vm.showState = true;
                vm._trigger({}, "showed"); 

                return vm;
            }
            /**doc
             * @description {隐藏模态窗口}
             * @param {ev} {动作类型}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.hide = function (ev) {
                vm.showState = false;
                    vm._trigger(ev, "hided");
                return vm;
            }
            /**doc
             * @description {点击背景隐藏}
             * @param {ev} {动作类型}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.hideByBg = function (ev) {
                if (!vm.bgClose) return false;
                vm.showState = false;
                vm._trigger(ev, "hided");
                return vm;
            }
            /**doc
            * @description {显示的状态} 
            * @returns {showState} {显示的状态}
            */
            vm.isShow = function () { 
                return vm.showState;
            }
            //======= 外部接口 END =======//
        },
        $ready: function (vm,ele) { 
          

        }
    });

    var widget = avalon.components["mc:dialogtest"];
    widget.regionals = {};
});


