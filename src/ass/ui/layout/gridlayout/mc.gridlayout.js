define(['avalon', 'text!./mc.gridlayout.html', 'css!./mc.gridlayout.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:gridlayout", {
        //外部属性
        gridConfig: {},
        ln: 0,
        cn: 0,
        padding: 15, //panel-body 的 padding
        //内部属性
        isInit: true,
        extend: {},
        tr: [],
        td: [],

        //view接口

        onInit: _interface, //必须定义此接口
        renderContent: _interface,
        _trigger: _interface,

        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.ln || vmOpts.cn || elemOpts.ln || elemOpts.cn) {
                //初始化slot标签页内容用属性
                var gridTr = vmOpts.ln || elemOpts.ln;
                var gridTd = vmOpts.cn || elemOpts.cn;
                if (gridTr === (gridTr >>> 0) && gridTd === (gridTd >>> 0)) { //判断是否为非负正整数
                    for (var i = 0; i < gridTr; i++) {
                        for (var j = 0; j < gridTd; j++) {
                            hooks["grid" + i + j] = "";
                            if (i === 0) {
                                hooks.td.push("");
                            }
                        }
                        hooks.tr.push("");
                    }
                }
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //接口方法
            vm.renderContent = function (trIdx, tdIdx) {
                return vm["grid" + trIdx + tdIdx];
            }
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:gridlayout"];
    widget.regionals = {};
});