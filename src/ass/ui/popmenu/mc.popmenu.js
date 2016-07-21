define(['avalon', 'text!./mc.popmenu.html', 'css!./mc.popmenu.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:popmenu", {
        //外部参数
        size: "normal", //large, small, tiny
        padding: 10,
        position: {
            top: 0,
            left: 0
        },
        track: false, //自动追踪鼠标位置弹出
        show: false, //是否显示,默认隐藏

        //外部事件
        onShowed: null,
        onHided: null,

        //外部接口
        setPosition: _interface,
        showDialog: _interface,
        hideDialog: _interface,
        setCallback: _interface,

        //内部属性
        content: "",
        lindex: -1, //布局中的序号

        //内部事件
        clickBg: _interface,
        clickDialog: _interface,

        //内部接口
        _trigger: _interface,
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
            vm.clickBg = function (ev) {
                vm.hideDialog();
                ev.cancelBubble = true;
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
                        if (typeof vm.onshowed == "function") {
                            vm.onShowed(ev, vm);
                        }
                        break;
                    case "hided":
                        if (typeof vm.onhided == "function") {
                            vm.onHided(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            //======= 内部接口 END =======//

            //======= 外部接口 START =======//
            /**doc
             * @newPosition {新的位置坐标对象,需包括top和left两个值}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.setPosition = function (newPosition,offsetTop,offsetLeft) {
                vm.position = {
                    top: newPosition.top - (offsetTop || 0),
                    left: newPosition.left - (offsetLeft || 0)
                };
                return vm;
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
             * @returns {vm} {当前调用的vm对象}
             */
            vm.hideDialog = function (ev) {
                vm.show = false;
                vm._trigger(ev, "hided");
                return vm;
            }
            /**doc
             * @description {设置回调}
             * @param {idx} {设置的按钮index}
             * @param {callback} {对应的回调函数}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.setCallback = function (idx, callback) {
                vm.buttons[idx].callback = callback;
                return vm;
            }
            //======= 外部接口 END =======//
        },
        $ready: function (vm) {

        }
    });

    var widget = avalon.components["mc:popmenu"];
    widget.regionals = {};
});