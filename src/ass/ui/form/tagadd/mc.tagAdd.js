define(["avalon", "text!./mc.tagadd.html", "css!./mc.tagadd.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:tagadd", {
        //#region 外部参数
        label: "", //提示文字
        labelSize: 0,
        mcstyle: "", //风格
        size: "normal", //small large
        width: 200, //宽度,默认200px
        disabled: false, //是否禁用
        placeholder: "", //提示文字
        tip:"",//
        type: "normal", //normal 无类型 | group 组 | person 员工 | department 部门
        iconCodeList: {
            normal: "",
            group: "&#xe739;",
            person: "&#xe78b;",
            department: "&#xe753;"
        }, //图标字体code
        value: "", //值
        tagList: [], //标签列表
        //表单相关
        formName: "", //表单data的key,输入框name
        readonly: false, //是否只读，只读就无法添加，删除标签
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        onAdd: null, //当添加按钮点击时触发事件
        onDel: null, //当删除按钮点击时触发事件
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
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件
        doKeyDown: _interface, //标签按钮keyDown事件
        doAdd: _interface, //标签添加事件
        doDel: _interface, //标签添加事件
        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        addTag: _interface, //添加标签
        delTag: _interface, //删除标签
        getIcon: _interface, //获取图标
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
                //todo 对must的支持,判断标签是否为空
                var dataArr = [];
                $.each(vm.tagList, function (i, val) {
                    dataArr.push(val.tagName);
                });
                return dataArr.join(";");
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                console.log(vm.tagList);
                if (val !== "") {
                    var dataArr = val.split(";");
                    vm.tagList = dataArr.map(function (val, i) {
                        return {
                            tagName: val
                        }
                    });
                }
            }
            //#endregion

            //#region 内部事件
            vm.doKeyDown = function (ev) {
                if (ev.keyCode === 13) {
                    vm.addTag();
                }
            }
            vm.doAdd = function (ev) {
                vm.addTag();
            }
            vm.doDel = function (ev, idx) {
                vm.delTag(idx);
            }
            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "add":
                        if (typeof vm.onAdd == "function") {
                            vm.onAdd(ev, vm, _this);
                        }
                        break;
                    case "del":
                        if (typeof vm.onDel == "function") {
                            vm.onDel(ev, vm, _this);
                        }
                        break;
                    default: break;
                }
            }
            vm.addTag = function () {
                //todo 空标签提示
                //todo 不能添加重复的标签
                if (vm.value.trim() !== "") {
                    vm.tagList.push({
                        tagName: vm.value
                    });
                    vm.value = "";
                    vm._trigger({}, "add");
                }
            }
            vm.delTag = function (idx) {
                avalon.Array.removeAt(vm.tagList, idx);
                vm._trigger({}, "del");
            }
            vm.getIcon = function() {
                return vm.iconCodeList[vm.type] || "";
            }
            //#endregion
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:tagadd"];
    widget.regionals = {};
})