define(['avalon', 'text!./mc.checkbox.html', 'css!./mc.checkbox.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:checkbox", {
        //外部参数
        label: "", //复选框后面文本
        checked: false, //是否选中
        disabled: false, //是否禁用
        readonly: false, //只读

        //外部事件
        onInit: _interface, //初始化接口
        onChecked: null, //当复选框选中时触发事件
        onCancel: null, //当复选框取消选中时触发事件
        onChanged: null, //当复选框状态改变时触发事件

        //外部接口
        isChecked: _interface, //是否选中
        setChecked: _interface, //设置选择
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        formName: "", //表单data的key,输入框name
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔

        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效

        //内部事件
        clickCheckbox: _interface, //复选框点击事件

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
            //内部事件(changed事件先于checked和cancel事件触发)
            vm.clickCheckbox = function (ev) {
                if (!vm.disabled && !vm.readonly) {
                    if (vm._trigger(ev, "changed")) {
                        if (vm.checked) {
                            vm._trigger(ev, "cancel") && (vm.checked = false);
                        } else {
                            vm._trigger(ev, "checked") && (vm.checked = true);
                        }
                    }
                    ev.stopPropagation();
                }
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "checked":
                        if (typeof vm.onChecked == "function") {
                            return vm.onChecked(ev, vm) !== false ? true : false;
                        }
                        break;
                    case "cancel":
                        if (typeof vm.onCancel == "function") {
                            return vm.onCancel(ev, vm) !== false ? true : false;
                        }
                        break;
                    case "changed":
                        if (typeof vm.onChanged == "function") {
                            return vm.onChanged(ev, vm) !== false ? true : false;
                        }
                        break;
                    default: break;
                }
                return true;
            }

            //外部接口
            vm.isChecked = function () {
                return vm.checked;
            }
            vm.setChecked = function (val) {
                val ? vm.checked = true : vm.checked = false;
            }
            vm.getValue = function () {
                return vm.isChecked() ? 1 : 0;
            }
            vm.setValue = function (val) {
                vm.setChecked(val);
            }
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:checkbox"];
    widget.regionals = {};
})