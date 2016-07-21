define(['avalon', 'text!./mc.accordion.html', 'css!./mc.accordion.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:accordion", {
        //外部属性
        tindex: -1, //组件在表格中行index
        tdata: "",
        active: 0, //表示当前激活项
        padding: 15, //panel-body 的 padding
        //外部参数
        panels: [],
        onChanged: _interface,
        //内部属性
        isInit: true,
        extend: {},
        $allPanelBody: null,

        //view接口
        renderTestIn: _interface,
        renderTest: _interface,

        onInit: _interface, //必须定义此接口
        initTableData: _interface,
        renderContent: _interface,
        clickPanel: _interface,
        _trigger: _interface,
        setActive: _interface,
        getActive: _interface,

        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.panels != undefined) {
                //初始化slot标签页内容用属性
                for (var i = 0; i < vmOpts.panels.length; i++) {
                    hooks['content' + i] = '';
                }
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = '';
        },
        $init: function (vm, elem) {
            //内部方法
            vm._trigger = function (ev, type) {
                switch (type) {
                    case 'changed':
                        if (typeof vm.onChanged == 'function') {
                            vm.onChanged(ev, {
                                "setActive": vm.setActive,
                                "getActive": vm.getActive
                            });
                        }
                        break;
                    default: break;
                }
            }
            //接口方法
            vm.renderContent = function (idx) {
                return vm['content' + idx];
            }
            vm.clickPanel = function (ev, idx) {
                if (idx != vm.active) { //判断点击的是否是当前项
                    //非当前项
                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
                    vm.active = idx;
                } else {
                    //当前项
                    vm.$allPanelBody.eq(idx).slideUp(300); //收起当前项
                    vm.active = -1; //激活项置为-1
                }
            }
            //对外方法
            vm.setActive = function (idx) {
                if (idx != vm.active) { //判断是否是当前项
                    //非当前项
                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
                    vm.active = idx;
                }
            }
            vm.getActive = function () {
                return vm.active;
            }
            //观测方法
            vm.$watch('active', function (newVal, oldVal) {
                if (newVal == -1 || oldVal == -1) return;
                vm._trigger({ newVal: newVal, oldVal: oldVal }, 'changed');
                if (typeof vm.panels[newVal].fun == 'function') {
                    vm.panels[newVal].fun({ newVal: newVal, oldVal: oldVal }, vm);
                }
            });
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.$allPanelBody = $(elem).find(".panel-body"); //缓存$allPanelBody
            vm.$allPanelBody.eq(vm.active).slideDown(0); //展开当前项
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.initTableData(vm, elem);
            vm.isInit = false;
            if (typeof vm.panels[vm.active].fun == 'function') {
                vm.panels[vm.active].fun({}, vm);
            }
        }
    });

    var widget = avalon.components["mc:accordion"];
    widget.regionals = {};
});