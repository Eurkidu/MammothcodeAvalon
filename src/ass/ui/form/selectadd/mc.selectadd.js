define(["avalon", "text!./mc.selectadd.html", "css!./mc.selectadd.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:selectadd", {
        //#region 外部参数
        label: "", //提示文字
        labelSize: 0,
        size: "normal", //small large
        width: 300, //宽度,默认300px
        disabled: false, //是否禁用
        value: "", //值
        tagList: [], //标签列表 tagType,tagValue,tagName
        noAddBtn: false,
        //normal 无类型 | group 组 | person 员工 | department 部门
        iconCodeList: {
            normal: "",
            group: "&#xe739;",
            person: "&#xe78b;",
            department: "&#xe753;"
        }, //图标字体code
        //弹出层vmid
        $dialog_vmid: null,
        $dialog_vmidTmp: null,
        //表单相关
        formName: "", //表单data的key,输入框name
        readonly: false, //是否只读，只读就无法添加，删除标签
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        onAdd: null, //当添加按钮点击时触发事件
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        setData: _interface, //设置标签数据,传入数组
        getData: _interface, //获取标签数据,返回数组
        //#endregion

        //#region 内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        $dialogVm: null, //弹出框(弹出框类)vm
        //#endregion

        //#region 内部事件
        doAdd: _interface, //标签添加事件
        doDel: _interface, //标签添加事件
        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        addTag: _interface, //添加标签
        delTag: _interface, //删除标签
        delTagByVal: _interface, //删除标签
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
                    dataArr.push(val.tagValue);
                });
                return dataArr.join(";");
            }
            vm.setValue = function (val, text, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                if (val !== "" && text !== "") {
                    var valArr = val.split(";");
                    var textArr = text.split(";");
                    vm.tagList = valArr.map(function (val, i) {
                        return {
                            tagValue: val,
                            tagName: textArr[i]
                        }
                    });
                }
            }
            /**
             * 设置数据
             * @param {} arr 的每一项必须包括 {tagValue,tagName} 
             * @returns {} 
             */
            vm.setData = function (arr) {
                avalon.type(arr) === "array" && (vm.tagList = arr);
            }
            vm.getData = function () {
                return vm.tagList;
            }
            //#endregion

            //#region 内部事件
            vm.doAdd = function (ev) {
                vm.addTag();
            }
            vm.doDel = function (ev, idx) {
                vm.delTag(idx);
            }
            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this,_item) {
                switch (type) {
                    case "add":
                        if (typeof vm.onAdd == "function") {
                            vm.onAdd(ev, vm, _this);
                        }
                        break;
                    case "del":
                        if (typeof vm.onDel == "function") {
                        return    vm.onDel(ev, vm, _this, _item);
                        }
                        break;
                    default: break;
                }
            }
            vm.addTag = function () {
                //bug 第二次进入的时候vm.$dialogVm !== avalon.vmodels里面的对象,导致无法双向同步
                //所以每次点击时重新获取
                vm.$dialogVm = McAvalon.getVm(vm.$dialog_vmidTmp());
                vm.$dialogVm && vm.$dialogVm.showDialog();
            }
            //内部 add
            vm._addTag = function (item) {
                //{tagType,tagValue,tagName}
                vm.tagList.push(item);
                vm._trigger({}, "add", {});
            }
            vm.delTag = function (idx) {
                //console.log(idx);
                var r = vm._trigger({}, "del", {}, { tagType: vm.tagList[idx].tagType, tagValue: vm.tagList[idx].tagValue });
                if (r === false) return false;
                avalon.Array.removeAt(vm.tagList, idx);
            }
            vm.delTagByVal = function (v) {
                var r = _.find(vm.tagList, function (tag) {
                    return tag.tagValue === v;
                });
                if (r)
                //alon.Array.removeAt(vm.tagList, idx);
                    avalon.Array.remove(vm.tagList, r);
            }
            vm.$dialog_vmid && McAvalon.$mcPageStore.getDeferred(vm.$dialog_vmid).done(function (_vm) {
                vm.$dialogVm = _vm;
                _vm.onSelectadd = function (idx, _vm) {
                    //bug vm与传入的绑定,当有2个selectadd对应相同的$dialog_vmid会混乱
                    vm._trigger(idx, "add", _vm);
                }
            });
            vm.getIcon = function (el) {
                return vm.iconCodeList[el.tagType] || "";
            }
            //#endregion
        },
        $ready: function (vm, elem) {
            //向store注册组件
            McAvalon.$mcPageStore && McAvalon.$mcPageStore.regist(vm);
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:selectadd"];
    widget.regionals = {};
})