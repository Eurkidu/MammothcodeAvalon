define(["avalon", "text!./mc.datepicker.html", "css!./mc.datepicker.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:datepicker", {
        //#region 外部参数
        value: "",
        width: 200, //宽度
        mcstyle: "", //风格
        disabled: false, //是否禁用
        placeholder: "",
        readonly: false,
        tip:"",
        //表单相关
        formName: "", //表单data的key,输入框name
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        //#endregion

        //#region 内部属性
        isInit: true,
        extend: {},
        $datepicker_ipt: "",
        $datepickerIptOpt: $({}),
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件
        doDatepicker: _interface,
        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        //#endregion

        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            hooks.$datepicker_ipt = McAvalon.util.genId("datepickIpt");
            hooks.$datepicker = McAvalon.util.genId("datepick");
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //#region 外部事件
            vm.isDisable = function () {
                return vm.disabled;
            }
            //#endregion

            //#region 外部接口
            vm.show = function () {
                vm.$datepickerIptOpt.trigger("focus");
            }
            //#endregion

            //#region 内部事件
            vm.doDatepicker = function(ev) {
                vm.show();
            }
            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "confirm":
                        if (typeof vm.onConfirm == "function") {
                            vm.onConfirm(ev, vm, _this);
                        }
                        break;
                    case "cancel":
                        if (typeof vm.onCancel == "function") {
                            vm.onCancel(ev, vm, _this);
                        }
                        break;
                    default: break;
                }
            }
            vm.iniDatepicker = function () {
                vm.readonly || vm.$datepickerIptOpt.date_input();
            }
            vm.getValue = function () {
                return (new Date(vm.value).getTime() / 1000) >> 0;
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                vm.value = new Date(val * 1000).format("yyyy-M-d");
            }
            //#endregion
        },
        $ready: function (vm, elem) {
            vm.$datepickerIptOpt = $(elem).find("#" + vm.$datepicker_ipt);
            vm.iniDatepicker();
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:datepicker"];
    widget.regionals = {};
})