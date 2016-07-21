define(['avalon', 'text!./mc.pagemodal.html', 'css!./mc.pagemodal.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:pagemodal", {
        //外部参数
        title: "", //模态窗口title
        padding: 15,
        modalIsShow: false, //是否显示,默认隐藏
        $tmpData: {}, //临时数据存储对象

        //外部事件
        onInit: _interface, //初始化接口
        onShowed: null,
        onHided: null,

        //外部接口
        setTitle: _interface,
        getTitle: _interface,
        show: _interface,
        hide: _interface,
        setCallback: _interface,

        getTmpData: _interface, //获取临时数据对象的值
        setTmpData: _interface, //设置临时数据对象的值

        //内部属性
        isInit: true,
        extend: {},
        content: "",
        lindex: -1, //布局中的序号
        $scrollBody: $({}), //滚动层

        //内部事件
        btnClick: _interface,
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
            /**
             * 模态窗口点击时事件
             * @param {} ev 动作类型
             * @returns {} 
             */
            vm.clickDialog = function (ev) {
                console.log(ev);
                //阻止冒泡(避免点击弹出框时 弹出框关闭)
                //ev.cancelBubble = true;
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
                vm.modalIsShow = true;
                vm._trigger({}, "showed");
                return vm;
            }
            /**doc
             * @description {隐藏模态窗口}
             * @param {ev} {动作类型}
             * @param {noJudge} {是否不判断直接关闭}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.hide = function () {
                vm.modalIsShow = false;
                vm._trigger({}, "hided");
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
            vm.getTmpData = function() {
                return vm.$tmpData;
            }
            vm.setTmpData = function(val) {
                vm.$tmpData = $.extend(vm.$tmpData, val);
                return vm;
            }
            //======= 外部接口 END =======//
            //弹出层显示时回调
            vm.$watch("modalIsShow", function () {
                vm.$scrollBody.scrollTop(0); //滚动条滚回顶部
            });
        },
        $ready: function (vm, elem) {
            vm.$scrollBody = $(elem).find(".mc-modal-content");
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:pagemodal"];
    widget.regionals = {};
});