define(["avalon", "text!./mc.iconselect.html", "css!./mc.iconselect.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:iconselect", {
        //#region 外部参数
        label: "", //提示文字
        labelSize: 0,
        mcstyle: "", //风格
        width: 200, //宽度,默认200px
        disabled: false, //是否禁用
        iconCode: "", //图标字体code
        iconList: McAvalon.icon.getList(),
        //表单相关
        formName: "", //表单data的key,输入框name
        readonly: false, //是否只读，只读就无法添加，删除标签
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        onChanged: null, //当改变图片的时候触发事件
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        //#endregion

        //#region 内部属性
        isInit: true,
        popShow: false,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件
        doPopSelect: _interface, //显示图标选择层事件
        doSelect: _interface, //图标选择事件
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
                return vm.iconCode;
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                vm.iconCode = val;
            }
            //#endregion

            //#region 内部事件
            vm.doPopSelect = function (ev) {
                vm.popShow = !vm.popShow;
            }
            vm.doSelect = function (ev, code) {
                if (vm.iconCode !== code) {
                    vm.iconCode = code;
                    vm._trigger({}, "changed");
                }
                vm.popShow = false;
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

    var widget = avalon.components["mc:iconselect"];
    widget.regionals = {};
})