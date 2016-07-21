define(["avalon", "text!./mc.selectbox.html", "css!./mc.selectbox.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:selectbox", {
        //外部参数
        label: "", //提示文字
        labelSize: 0,
        name: "",
        data: [], //下拉数据源
        arrowDown: true, //默认往下展开
        width: 250, //下拉选择框宽度,默认250px
        select: 0, //默认选中项
        active: false, //是否展开
        disabled: false, //是否禁用

        //外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当按钮点击时触发事件
        onSelected: null, //当选择时触发事件

        //外部接口
        isDisable: _interface, //是否禁用
        isOpen: _interface,
        setState: _interface,
        getSelect: _interface, //获取选择项
        getValue: _interface, //供表单调用
        setValue: _interface, //供表单调用
        setSelectByIndex: _interface, //通过index设置选中项
        setSelectByTxt: _interface,
        setSelectByValue: _interface,

        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效

        //内部事件
        clickSelectbox: _interface, //下拉选择框点击事件
        clickLi: _interface, //选择项点击事件

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
            vm.clickSelectbox = function (ev) {
                if (!vm.disabled) {
                    //如果有其他下拉选择框,且处于打开状态则关闭
                    if (McAvalon.global.selectboxVm) {
                        avalon.each(McAvalon.global.selectboxVm, function (i, val) {
                            val !== vm && val.isOpen() && val.setState(false);
                        });
                    }
                    vm.active = !vm.active;
                    vm._trigger(ev, "click");
                    ev.stopPropagation();
                }
            }
            vm.clickLi = function (ev, idx) {
                vm.select = idx;
                vm.active = false;
                vm._trigger(ev, "selected");
                ev.stopPropagation();
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm);
                        }
                        break;
                    case "selected":
                        if (typeof vm.onSelected == "function") {
                            vm.onSelected(ev, vm);
                        }
                        break;
                    default: break;
                }
            }

            //外部接口
            vm.isDisable = function () {
                return vm.disabled;
            }
            vm.isOpen = function () {
                return vm.active;
            }
            vm.setState = function (state) {
                state ? vm.active = true : vm.active = false;
            }
            vm.getSelect = function () {
                return vm.data[vm.select] && vm.data[vm.select].$model;
            }
            vm.getValue = function() {
                return vm.data[vm.select] && vm.data[vm.select].$model.value;
            }
            vm.setValue = function(data) {
                vm.data = data;
            }
            vm.setSelectByIndex = function (idx) {
                vm.select = idx;
                return vm;
            }
            vm.setSelectByTxt = function (txt) {
                avalon.each(vm.data, function (i, val) {
                    console.log(i + "||" + val);
                    if (val.text == txt) {
                        vm.select = i;
                        return false;
                    }
                });
                return vm;
            }
            vm.setSelectByValue = function (value) {
                avalon.each(vm.data, function (i, val) {
                    console.log(i + "||" + val);
                    if (val.value == value) {
                        vm.select = i;
                        return false;
                    }
                });
                return vm;
            }
        },
        $ready: function (vm, elem) {
            McAvalon.global.selectboxVm || (McAvalon.global.selectboxVm = []);
            McAvalon.global.selectboxVm.push(vm);
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:selectbox"];
    widget.regionals = {};
})