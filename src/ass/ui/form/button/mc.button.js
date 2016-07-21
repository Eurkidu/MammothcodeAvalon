define(["avalon", "text!./mc.button.html", "css!./mc.button.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:button", {
        //外部参数
        label: "", //文本
        type: "", //success,fail
        mcstyle: "", //风格
        size: "normal", //wide
        disabled: false, //是否禁用

        //外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当按钮点击时触发事件

        //外部接口
        isDisable: _interface, //是否禁用

        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效

        //内部事件
        clickButton: _interface, //按钮点击事件

        //内部接口
        _trigger: _interface, //内部触发器

        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //内部事件
            vm.clickButton = function (ev, _this) {
                if (!vm.disabled) {
                    vm._trigger(ev, "click", _this);
                    ev.stopPropagation();
                }
            }

            //内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm, _this);
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

    var widget = avalon.components["mc:button"];
    widget.regionals = {};
})