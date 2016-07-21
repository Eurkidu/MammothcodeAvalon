toCheckBoxData = function (data) {

    avalon.each(data, function (i, item) {
        item.checked = false;
    })
    return data;
};
define(['avalon', 'text!./mc.checkboxgroup.html', 'css!./mc.checkboxgroup.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:checkboxgourp", {
        //表单相关
        formName: "", //表单data的key,输入框name
        judgeName: "", //有不同状态的form组件,用来判断的字段
        readonly: false, //是否只读，只读就无法修改
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        //表单相关 end

        //外部参数
        label: "", //复选框后面文本
        labelSize:0,
        checked: false, //是否选中
        disabled: false, //是否禁用,包括全部
        muilt: false,// 默认多选
        idName: "id",// 
        textName: "text",// 
        data: [],//数据源 [text,value,checked]
        valid: "", //验证类型
        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
        tip: "", //填写提示信息
        //外部事件
        onInit: _interface, //初始化接口
        onChecked: null, //当复选框选中时触发事件
        onCancel: null, //当复选框取消选中时触发事件
        onChanged: null, //当复选框状态改变时触发事件

        //外部接口
        isChecked: _interface, //是否有选中的东西 
        getCheckedData: _interface, //获取选中的数据 array 
        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        checkedList: [],
        isValid: true, //是否正在验证
        validInfo: "", //错误信息
        //内部事件
        clickCheckbox: _interface, //选项点击事件
        validValue: _interface,
        //内部接口
        _trigger: _interface, //内部触发器
        setCheckedState: _interface, //设置选中状态
        //单向流
        //  updateAllState: _interface, //单向流总函数
        // updateCheckedState: _interface, //更新Checked

        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.data) {
                vmOpts.data = toCheckBoxData(vmOpts.data);
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象 
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //#region outer
            vm.getValue = function () {
                var r = vm.getCheckedData();
                if (r && r.length) {
                    if (vm.muilt) {
                        //todo 格式
                        return r.join(';');
                    } else {
                        return r[0][vm.idName];
                    }
                }

            }

            vm.setValue = function (val) {
                //init
                vm.validInfo = "";
                //todo clr fn
                vm.data.forEach(function (item, i) {
                    item.checked = false;
                })
                //select
                vm.setCheckedStateById(val,true);
            }


            //#endregion



            //内部事件
            vm.clickCheckbox = function (ev, item) {
                if (!(vm.disabled || vm.readonly)) {
                    if (vm.muilt) {
                        //多选
                        var state = !item.checked;
                        //set state
                        vm.setCheckedState(item, state);
                        //trigger
                        if (state) {
                            //      vm._trigger(ev, "checked");
                        } else {
                            //    vm._trigger(ev, "cancel");
                        }
                        //   vm._trigger(ev, "changed");
                    } else {
                        //single 
                        var state = item.checked;
                        if (state) {
                            //已经选中 没操作的
                        } else {
                            //单选逻辑 
                            avalon.each(vm.data, function (k, _item) {
                                _item[vm.idName] === item[vm.idName]
                                //self
                                ? vm.setCheckedState(item, true)
                                //other
                                : vm.setCheckedState(_item, false);
                            })
                        }
                    }
                    ev.stopPropagation();
                }
            }
            vm.setCheckedState = function (item, state) {
                item.checked = state;
                vm._trigger({}, "changed");
                // vm.updateAllState();
            };
            vm.setCheckedStateById = function (id, state) {
                var r = _.find(vm.data, function (item, i) {
                    return item[vm.idName] === id
                })
                if (r)
                    vm.setCheckedState(r, state)
            };
            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "checked":
                        if (typeof vm.onChecked == "function") {
                            vm.onChecked(ev, vm);
                        }
                        break;
                    case "cancel":
                        if (typeof vm.onCancel == "function") {
                            vm.onCancel(ev, vm);
                        }
                        break;
                    case "changed":
                        if (typeof vm.onChanged == "function") {
                            vm.onChanged(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            vm.validValue = function (ev) {
                var value = vm.getValue();
                
                vm.validInfo = McAvalon.validata(value, vm.valid);
                vm.isValid = vm.validInfo === "" ? true : false;
                if (vm.isValid) {
                    //fix 0 
                    if (vm.must === true && value!==0 && (!value) ) {
                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
                    }
                }
            }
            //单向流
            //vm.updateAllState = function () {
            //    vm.updateCheckedState();
            //}
            ////更新选中
            //vm.updateCheckedState = function () {
            //    setTimeout(function () {
            //        vm.checkedList = [];
            //        avalon.each(vm.data, function (i, item) {
            //            //第一次需要加false..
            //            item.checked = item.checked || false
            //            vm.checkedList[i] = item.checked;
            //        });
            //    }, 0)
            //};
            //外部接口 
            //是否有选中的
            vm.isChecked = function () {
                //every unchecked
                var r = vm.data.every(function (item) {
                    return !item.checked;
                });
                return !r;
            };
            //获取选中vals
            vm.getCheckedData = function () {
                var r = vm.data.$model.filter(function (item) {
                    return   item.checked
                });
                return r;
            };

        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            //传入数据需要更新..
            //vm.updateCheckedState();
        }
    });

    var widget = avalon.components["mc:checkboxgourp"];
    widget.regionals = {};
})