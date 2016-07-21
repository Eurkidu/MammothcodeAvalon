 define(["avalon", "text!./mc.treeselect.html", "css!./mc.treeselect.min.css", 'mcTreeBt', 'mcDialog'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:treeselect", {
        //buildIn相关
        $dialog_opt: {},
        getDialogVM: _interface,
        getTreeVM: _interface,
        $treeVM: {},
        $dialogVM: {},
        $tree_opt: {
            bt: false,
            dynamic: true,
            hasCheckbox: false,
            clickEveryWhere: true,
            //disableImp: true,
            ajaxConfig: {
                url: '/SystemManage/GetModuleList',
                key: 'MFId'
            },
            idName: 'MId',
            textName: 'MName',
            pidName: 'MFId',
            // isLeafName: 'IsLeaf',
            virtualId: '0',
            virtualClick: false,
            //最后会出来这个 要过滤掉MID 为0什么的
            data: [],
            //请求
            onEveryClick: function (item, _vm) { },
        },
        //外部参数
        label: "", //提示文字
        trace: false, //getValue是否返回路径
        labelSize: 0,
        value: "", //输入框内值  
        text: "", //输入框内文字 
        $ajaxConfig: {},  //url idName,textName
        //silence:true,
        //name: "", //输入框name
        valid: "", //验证类型
        width: 200, //宽度,默认200px
        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
        tip: "", //填写提示信息
        isHide: false, //是否隐藏,不可见
        readonly: false, //是否只读，只读就div显示，否则input显示
        //外部事件
        onInit: _interface, //初始化接口
        onClicked: null, //当输入框点击时触发事件
        onChanged: null, //当输入框内值发生改变时触发事件

        //外部接口

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
            if (typeof vmOpts.$tree_opt.data === 'function') vmOpts.$tree_opt.data = vmOpts.$tree_opt.data();
            //树配置要融合
            if (vmOpts.$tree_opt) {
                vmOpts.$tree_opt = $.extend(true, hooks.$tree_opt, vmOpts.$tree_opt)
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //buildin 相关
            vm.$dialog_opt = {
                size: 'large',
                buttons: [
                    {
                        label: "保存",
                        type: "success",
                        callback: function (ev, _vm) {
                            //get tree val ,set到自身vm的value 
                            var item = vm.$treeVM.getSelect();
                            if (item) {
                                if (vm.trace) {
                                    vm.value = item.trace.join(",");
                                } else {
                                    vm.value = item.val;
                                }
                                vm.text = item.text;
                            }
                            return true;
                        }
                    },
                    {
                        label: "取消",
                        callback: function () {
                            return true;
                        }
                    }
                ]
            }

            vm.getDialogVM = function (_vm, elem) {
                vm.$dialogVM = _vm
            }
            vm.getTreeVM = function (_vm, elem) {
                vm.$treeVM = _vm
                //静默加载第一次   
                //if (vm.$treeVM.data.length===0) {
                //vm.$treeVM.setData(null).showItem(null,1, {
                //    force: true,
                //    silence: vm.silence
                //});
                // }


            }
            //内部事件 
            vm.doClick = function (ev) {
                vm.$dialogVM.showDialog();
                //vm.$dialogVM.hideDialog({}, true);
                vm._trigger(ev, "clicked");
            }
            vm.validValue = function (ev) {
                vm.value = vm.value + ""; //保证value为字符串
                vm.validInfo = McAvalon.validata(vm.value, vm.valid);
                vm.isValid = vm.validInfo === "" ? true : false;
                if (vm.isValid) {
                    if (vm.must === true && vm.value.trim() === "") {
                        vm.isValid = false; vm.validInfo = "该字段为必填字段";
                    }
                }
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
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
            vm.getValue = function () {
                //可能需要
                //if (vm.value === vm.$tree_opt.virtualId) return ''
                return vm.value;
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                vm.text = val;
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

    var widget = avalon.components["mc:treeselect"];
    widget.regionals = {};
})