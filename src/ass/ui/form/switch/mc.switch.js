define(["avalon", "text!./mc.switch.html", "css!./mc.switch.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:switch", {
        //#region 外部参数
        label: "", //提示文字
        labelSize: 0,
        mcstyle: "", //风格
        width: 200, //宽度,默认200px
        disabled: false, //是否禁用
        //表单相关
        formName: "", //表单data的key,输入框name
        readonly: false, //是否只读，只读就无法修改
        judgeName: "", //有不同状态的form组件,用来判断的字段
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        onChanged: _interface, //状态变化接口
        onClick: _interface, //开关点击接口
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        isActive: _interface, //是否激活
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        //#endregion

        //#region 内部属性
        isInit: true,
        switchActive: false, //是否打开(激活)
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件
        doClick: _interface, //switch点击事件
        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        //#endregion

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
            //#region 外部事件
            vm.isDisable = function () {
                return vm.disabled;
            }
            //#endregion

            //#region 外部接口
            vm.getValue = function () {
                return vm.switchActive ? 1 : 0;
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                val ? vm.switchActive = true : vm.switchActive = false;
                vm._trigger({},"changed");
            }
            vm.isActive = function () {
                return vm.switchActive;
            }
            //#endregion

            //#region 内部事件
            vm.doClick = function (ev) {
                if (!vm.readonly) {
                    vm.switchActive = !vm.switchActive;
                    vm._trigger({}, "click");
                    vm._trigger({}, "changed"); //todo 跟上面的setValue合并changed
                    ev.stopPropagation();
                }
            }
            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "changed":
                        if (typeof vm.onChanged == "function") {
                            vm.onChanged(ev, vm, _this);
                        }
                        break;
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm, _this);
                        }
                        break;
                    default: break;
                }
            }
            //#endregion
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:switch"];
    widget.regionals = {};
})