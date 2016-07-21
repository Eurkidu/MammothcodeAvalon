//todo 右边 data需要写出来
define(["avalon","text!./mc.listselect.html", "css!./mc.listselect.min.css",'mcLetterList', 'mcDialog'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:listselect", {
        //buildIn相关
        $dialog_opt: {},
        getDialogVM: _interface, 
        $listId: McAvalon.util.genId("_letterlist"), //id 
        $dialogVM: {},
        //buildin 
        $list_opt: {
        
        },
        $data_opt:{

        },
        data: [],
        dataSelect: null,
        dataClick: _interface, //
        //外部参数
        label: "", //提示文字
        trace: false, //getValue是否返回路径
        labelSize: 0,
        value: "", //输入框内值   
        text: "", //输入框内文字    
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
            //树配置要融合
            if (vmOpts.$list_opt) {
                vmOpts.$list_opt = $.extend(true, hooks.$list_opt, vmOpts.$list_opt)
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //buildin 相关
            //data

            vm.dataClick = function (item) {
                vm.dataSelect ? vm.dataSelect.selected = false : 0;
                vm.dataSelect = item;
                item.selected = true;
            }
            //list
            vm.$list_opt.onClickBefore = function (_item) {
                //
                vm.dataSelect = null;
                _item[vm.$list_opt.idName]
                var ajaxConfig = vm.$data_opt.$ajaxConfig;
                var p={}; 
                p[ajaxConfig.key] = _item[ajaxConfig.key]
                p = $.extend(true, p, ajaxConfig.extra); 
                Mc.Ajax({
                    url:  ajaxConfig.url,
                    data:p,
                    success: function (response) {
                        vm.data = response.data.map(function (item) {
                            item.selected = false;
                            return item;
                        })
                    }
                });
            };
            //dialog
            vm.$dialog_opt = {
                size: 'large',
                buttons: [
                    {
                        label: "保存",
                        type: "success",
                        callback: function (ev, _vm) {
                            //get self val
                            //debugger;
                            vm.value = vm.dataSelect[vm.$data_opt.idName];
                            vm.text = vm.dataSelect[vm.$data_opt.textName];
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
                return vm.value;
            }
            vm.setValue = function (val, isReadonly) {
                //todo clr fns抽离
                //data
                vm.dataSelect = null;
                vm.data = [];
                //tree 
                McAvalon.getVm(vm.$listId).q = ""; 
                var tmp = McAvalon.getVm(vm.$listId).getSelect() 
                    tmp ? tmp.selected = false : 0;
                //clr end

                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                vm.text = val; 
               // vm.value = val;
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

    var widget = avalon.components["mc:listselect"];
    widget.regionals = {};
})