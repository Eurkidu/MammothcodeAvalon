define(["avalon", "text!./mc.droplist.html", "css!./mc.droplist.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:droplist", {
        //外部参数
        active: false, //是否处于展开状态
        data: [], //droplist数据 [label: 文字信息] [state: 标志颜色[1绿色2黄色3红色]]
        width: 100, //默认展开后宽度
        mcstyle: "", //外挂样式
        label: "", //展开按钮文字
        disabled: false, //是否禁用

        //外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当tab项点击时触发事件

        //外部接口
        isDisable: _interface, //是否禁用

        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效

        //内部事件
        clickDrop: _interface, //展开按钮点击事件

        //内部接口
        _trigger: _interface, //内部触发器

        $template: template,
        //$replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //内部事件
            vm.clickDrop = function (ev) {
                if (!vm.disabled) {
                    vm.active = !vm.active;
                    vm._trigger(ev, "click");
                    ev.stopPropagation();
                }
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm);
                        }
                        break;
                    default: break;
                }
            }

            //外部事件
            vm.isDisable = function () {
                return vm.disabled;
            }
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:droplist"];
    widget.regionals = {};
})