define(["avalon", "text!./mc.text.html", "css!./mc.text.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:text", {
        //外部参数
        label: "", //提示文字
        labelSize: 0,
        value: "", //输入框内值
        placeholder: "", //输入框内提示文字
        pwd: false, //是否是密码数据框
        //name: "", //输入框name
        valid: "", //验证类型
        max: "", //当为数值验证时的最大值
        min: "", //当为数值验证时的最小值
        maxlen: 999, //最大长度
        width: 200, //宽度,默认200px
        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
        tip: "", //填写提示信息
        mult: false, //是否为多行文本框显示
        isHide: false, //是否隐藏,不可见
        readonly: false, //是否只读，只读就div显示，否则input显示

        //外部事件
        onInit: _interface, //初始化接口
        onGetValue: null, //获取值触发事件
        onSetValue: null, //设置值触发事件
        onClicked: null, //当输入框点击时触发事件
        onChanged: null, //当输入框内值发生改变时触发事件

        //外部接口
        isDisable: _interface, //是否禁用
        getData: _interface,
        setData: _interface,
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        formName: "", //表单data的key,输入框name
        submitName: "", //提交表单的name
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔

        //内部属性
        isInit: true,
        extend: {},
        isValid: true, //是否正在验证
        validInfo: "", //错误信息
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效

        //内部事件
        doClick: _interface,
        validValue: _interface,

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
            vm.doClick = function (ev) {
                vm._trigger(ev, "clicked");
            }
            vm.validValue = function (ev) {
                vm.value = vm.value + ""; //保证value为字符串
                vm.validInfo = McAvalon.validata(vm.value, vm.valid);
                vm.isValid = vm.validInfo === "" ? true : false;
                if (vm.isValid) {
                    if (vm.must === true && vm.value.trim() === "") {
                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
                    } else if (typeof vm.must == "number" && vm.value.length !== vm.must) {
                        vm.isValid = false; vm.validInfo = "该字段长度有误";
                    } else if (vm.valid.indexOf("int") !== -1 || vm.valid.indexOf("float") !== -1) {
                        if (vm.max !== "" && vm.value > vm.max) {
                            vm.isValid = false; vm.validInfo = "超过最大限制";
                        } else if (vm.min !== "" && vm.value < vm.min) {
                            vm.isValid = false; vm.validInfo = "低于最小限制";
                        }
                    }
                }
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "getValue":
                        if (typeof vm.onGetValue == "function") {
                            vm.onGetValue(ev, vm);
                        }
                        break;
                    case "setValue":
                        if (typeof vm.onSetValue == "function") {
                            vm.onSetValue(ev, vm);
                        }
                        break;
                    case "clicked":
                        if (typeof vm.onclicked == "function") {
                            vm.onClicked(ev, vm);
                        }
                        break;
                    case "changed":
                        if (typeof vm.onchanged == "function") {
                            vm.onChanged(ev, vm);
                        }
                        break;
                    default: break;
                }
            }

            //外部接口
            vm.getData = function () {
                var data = {};
                data[vm.name] = vm.value;
                return data;
            }
            vm.setData = function (newData) {
                vm.value = newData;
            }
            vm.getValue = function () {
                vm._trigger({}, "getValue");
                return vm.value;
            }
            vm.setValue = function (val, isReadonly) {
                //init
                vm.validInfo = "";
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                if (val !== vm.value) {
                    vm.value = val;
                    vm.validValue(null);
                    vm._trigger({}, "setValue");
                }
            }

            vm.$watch("value", function (newVal, oldVal) {
                vm._trigger({ newVal: newVal, oldVal: oldVal }, "changed");
            });
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:text"];
    widget.regionals = {};
})