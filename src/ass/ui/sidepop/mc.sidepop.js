define(["avalon", "text!./mc.sidepop.html", "css!./mc.sidepop.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:sidepop", {
        //外部参数
        headerHeight: 0, //header高度
        footerHeight: 0, //footer高度
        size: "normal", //large, small
        padding: 15, //cbody面板的padding
        show: false, //是否显示,默认隐藏
        
        //外部事件
        onInit: _interface, //初始化接口
        onShow: null, //侧边弹出层显示
        onClose: null, //侧边弹出层关闭
        onChange: null, //侧边弹出层状态改变

        //外部接口
        sidePopShow: _interface, //显示侧边弹出层
        sidePopHide: _interface, //隐藏侧边弹出层

        //内部属性
        isInit: true,
        extend: {},
        $scrollBody: $({}), //滚动层
        showAnimate: false, //显示动画
        hideAnimate: false, //关闭动画

        //内部事件
        clickSidePop: _interface, //侧边弹出层被点击事件

        //内部接口
        _trigger: _interface, //内部触发器

        //slot
        cheader: "",
        cbody: "",
        cfooter: "",

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
            vm.clickSidePop = function (ev) {
                if (ev.target.id.indexOf("_ueditor") === -1) {
                    //阻止冒泡(避免点击弹出框时 弹出框关闭)
                    ev.cancelBubble = true;
                    window.event.cancelBubble = true;
                }
            }
            //======= 内部事件 END =======//


            //======= 内部接口 START =======//
            /**doc
             * @description {事件触发器}
             * @param {ev} {动作类型}
             * @param {type} {事件类型}
             * @returns {} 
             */
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "show":
                        if (typeof vm.onShow == "function") {
                            vm.onShow(ev, vm);
                        }
                        break;
                    case "close":
                        if (typeof vm.onClose == "function") {
                            vm.onClose(ev, vm);
                        }
                        break;
                    case "change":
                        if (typeof vm.onChanger == "function") {
                            vm.onChanger(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            //======= 内部接口 END =======//


            //======= 外部接口 START =======//
            vm.sidePopShow = function () {
                if (!vm.show) {
                    vm.show = true;
                    vm.showAnimate = true;
                    setTimeout(function() {
                        vm.showAnimate = false;
                    }, 350);
                    vm._trigger({}, "show");
                } else {
                    vm.$scrollBody.scrollTop(0); //滚动条滚回顶部
                }
            }
            vm.sidePopHide = function () {
                if (vm.show) {
                    vm.hideAnimate = true;
                    setTimeout(function () {
                        vm.hideAnimate = false;
                        vm.show = false;
                    }, 350);
                    vm._trigger({}, "hide");
                }
            }
            //======= 外部接口 END =======//


            //======= 观测方法 START =======//
            //弹出层显示时回调
            vm.$watch("show", function (newVal, oldVal) {
                vm.$scrollBody.scrollTop(0); //滚动条滚回顶部
                vm._trigger({ newState: newVal, oldState: oldVal }, "change");
            });
            //======= 观测方法 END =======//
        },
        $ready: function (vm, elem) {
            vm.$scrollBody = $(elem).find(".mc-scroll-wrap");
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            McAvalon.$window.on("window_click", function (trigger, ev) {
                //如果点击不是百度文本编辑器内产生的则关闭
                if (ev.target.className.indexOf("edui-") === -1) {
                    vm.sidePopHide();
                }
            });
        }
    });

    var widget = avalon.components["mc:sidepop"];
    widget.regionals = {};

});