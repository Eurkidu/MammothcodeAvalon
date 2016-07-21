define(['avalon', 'text!./mc.dialog.html', 'css!./mc.dialog.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:dialog", {
        //外部参数
        title: "", //模态窗口title
        size: "normal", //page,large, small
        width: null,
        height: null,
        padding: 15,
        show: false, //是否显示,默认隐藏
        buttons: [], //footer显示的按钮列表 [label 按钮文字][type 类型 [success][fail]][callback 回调函数]
        bgClose: false, //点击背景是否可以关闭模态窗口
        $tmpData: {}, //临时数据存储对象

        //外部事件
        onShowed: null,
        onHided: null,

        //外部接口
        setTitle: _interface,
        getTitle: _interface,
        showDialog: _interface,
        hideDialog: _interface,
        setCallback: _interface,

        getTmpData: _interface, //获取临时数据对象的值
        setTmpData: _interface, //设置临时数据对象的值

        //内部属性
        content: "",
        lindex: -1, //布局中的序号

        //内部事件
        btnClick: _interface,
        clickDialog: _interface,

        //内部接口
        onInit: _interface, //初始化接口 
        _trigger: _interface,
        onSelectadd: _interface, //当dialog作为vm传给selectadd组件时会调用此接口,此接口在弹出层关闭时触发
        jBtnType: _interface,

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
                var callback = btnVm.lindex !== -1 && vm.buttons[btnVm.lindex].callback;
                if (typeof callback == "function") {
                    if (callback(ev, vm)) {
                        vm._trigger(btnVm.lindex, "selectadd");
                        vm.hideDialog({}, true);
                    }
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
                        if (typeof vm.onShowed == "function") {
                            vm.onShowed(ev, vm);
                        }
                        break;
                    case "hided":
                        if (typeof vm.onHided == "function") {
                            vm.onHided(ev, vm);
                        }
                        break;
                    case "selectadd":
                        if (typeof vm.onSelectadd == "function") {
                            vm.onSelectadd(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            vm.jBtnType = function (idx) {
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
            vm.showDialog = function () {
                vm.show = true;
                vm._trigger({}, "showed");
                return vm;
            }
            /**doc
             * @description {隐藏模态窗口}
             * @param {ev} {动作类型}
             * @param {noJudge} {是否不判断直接关闭}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.hideDialog = function (ev, noJudge) {
                if (noJudge || vm.bgClose) {
                    vm.show = false;
                    vm._trigger(ev, "hided");
                }
                return vm;
            }
            /**doc
             * @description {设置回调}
             * @param {idx} {设置的按钮index}
             * @param {callback} {对应的回调函数}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.setCallback = function (idx, callback) {
                vm.buttons[idx] && (vm.buttons[idx].callback = callback);
                return vm;
            }
            vm.getTmpData = function () {
                return vm.$tmpData;
            }
            vm.setTmpData = function (val) {
                vm.$tmpData = $.extend(vm.$tmpData, val);
                return vm;
            }
            //======= 外部接口 END =======//
        },
        $ready: function (vm, elem) {
            //向store注册组件
            McAvalon.$mcPageStore && McAvalon.$mcPageStore.regist(vm);
            vm.onInit(vm, elem); //调用外部初始化函数
        }
    });

    var widget = avalon.components["mc:dialog"];
    widget.regionals = {};
});