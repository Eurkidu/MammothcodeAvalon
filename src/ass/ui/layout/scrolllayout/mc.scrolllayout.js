define(['avalon', 'text!./mc.scrolllayout.html', 'css!./mc.scrolllayout.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:scrolllayout", {
        //外部属性
        mcstyle: "",
        bindSize: "", //绑定的linear-item 样式
        width: false,
        padding: false,
        ptl: false,
        pt: false,
        pl: false,
        pr: false,
        pb: false,

        //内部属性
        isInit: true,
        extend: {},
        content: "",

        //view接口

        onInit: _interface, //必须定义此接口
        renderStyle: _interface,
        renderContent: _interface,
        _trigger: _interface,

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
            //接口方法
            vm.renderStyle = function (style) {
                if (vm[style] !== false) {
                    return vm[style];
                }
            }
            vm.renderContent = function () {
                return vm["content"];
            }
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:scrolllayout"];
    widget.regionals = {};
});