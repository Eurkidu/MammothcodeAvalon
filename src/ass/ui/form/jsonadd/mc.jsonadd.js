define(["avalon", "text!./mc.jsonadd.html", "css!./mc.jsonadd.min.css", 'mcText', 'mcButton'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:jsonadd", {
        //外部参数
        label: "", //提示文字
        labelSize: 0,
        value: [], //输入框内值
        placeholder: "", //输入框内提示文字
        //name: "", //输入框name
        // json格式
        keyName: "key",
        valName: "val",
        // 格式
        valid: "", //验证类型  
        width: 200, //宽度,默认200px
        must: false, //是否必填,也可为数字 代表必须的长度(会将覆盖length)
        tip: "", //填写提示信息
        mult: false, //是否为多行文本框显示
        isHide: false, //是否隐藏,不可见
        readonly: false, //是否只读，只读就div显示，否则input显示

        //外部事件
        onInit: _interface, //初始化接口
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
        keyIpt: "",
        valIpt: "",
        //内部事件
        doClick: _interface,
        validValue: _interface,

        //内部接口
        _trigger: _interface, //内部触发器
        clrIpt: _interface, // 清理资源
        clrEnv: _interface, // 清理资源
        addItem: _interface,
        //buildin
        getValIptVM: _interface, // child vm
        getKeyIptVM: _interface, // child vm
        $keyIptVm: _interface, // child vm
        $valIptVm: _interface, // child vm
        //buildin end
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
            //#region buildin 
            vm.getValIptVM = function (_vm, elem) { 
                vm.$valIptVm = _vm;
            }
            vm.getKeyIptVM = function (_vm, elem) {
                vm.$keyIptVm = _vm;
            }
            //#endregion
            //内部事件
            vm.validValue = function (ev) {
                //vm.value = vm.value + ""; //保证value为字符串
                //vm.validInfo = McAvalon.validata(vm.value, vm.valid);
                //vm.isValid = vm.validInfo === "" ? true : false;
                //if (vm.isValid) {
                //    if (vm.must === true && vm.value.trim() === "") {
                //        vm.isValid = false; vm.validInfo = "该字段为必填字段";
                //    }
                //}
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "changed":
                        if (typeof vm.onchanged == "function") {
                            vm.onChanged(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            vm.addItem = function () {
                var key=vm.$keyIptVm.getValue();
                var val = vm.$valIptVm.getValue();
                if (key && val) { 
                    vm.value = vm.value || [];
                    var obj={};
                    obj[vm.keyName]=key;
                    obj[vm.valName]=val;
                    vm.value.push(obj)
                    vm.clrIpt();
                } else {
                    alert('..缺少')
                } 
            }
            vm.clrIpt = function () {
                vm.$valIptVm.setData("");
                vm.$keyIptVm.setData("");
            }
            vm.clrEnv = function () {
                vm.clrIpt();
                vm.value = [];
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
              
                // debugger;
               // return JSON.stringify([{ GoodsJsonName: "可可脂", GoodsJsonValueName: "100%" }]);
                return JSON.stringify(vm.value.$model);
            }
            vm.setValue = function (val, isReadonly) {
                vm.clrEnv();
                 
                if (val) { 
                   var val = typeof val === 'string' ? JSON.parse(val) : val;

                    //isReadonly 传值的时候才赋值判断
                    isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                    if (val !== vm.value) {
                        vm.value = val;
                        //vm.validValue(null);
                    }
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

    var widget = avalon.components["mc:jsonadd"];
    widget.regionals = {};
})