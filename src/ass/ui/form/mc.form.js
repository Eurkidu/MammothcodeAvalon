define(['avalon', 'mmRequest', 'text!./mc.form.html', 'css!./mc.form.min.css'], function (avalon, req, template) {
    var _interface = function () { };
    /**
     * 判断子组件内是否有某个属性
     * @param {} comp 子组件vm
     * @param {} val 属性名
     * @returns {} 
     */
    function _hasProperty(comp, propertyName) {
        return comp.hasOwnProperty(propertyName) && comp[propertyName] !== "";
    }
    avalon.component("mc:form", {
        //外部属性
        title: "", //标题
        cpadding: 15, //组件内边距
        labelSize: 240,
        //buttons: true,  //是否存在submit、reset按钮
        hasButtons: true, //是否存在按钮
        leftLabel: "确定", //左边按钮
        rightLabel: "取消", //右边按钮
        border: false,
        btnSize: 'normal',
        btnPos: 'left',
        submitMode: 'ajax',
        //autoAjaxFirst: true, //是否自动发起第一次请求
        $defaultData: null, //默认数据
        defaultData: null, //暴露给外部进行绑定
        //外部参数
        submitUrl: '',
        loadUrl: '',
        loadParam: {},
        onoksubmited: null,
        onerrsubmited: null,
        onsubmited: null,
        onBeforeSubmit: null,
        onreseted: null,
        onloaded: null,
        onDataChange: null, //当请求到新数据时触发事件
        onFail: null,
        onInit: _interface, //初始化接口

        //ajax相关
        $ajaxTmpData: null, //ajax获取到的临时数据
        $ajaxConfig: {
            url: "",
            data: {},
            dataType: "json"
        },
        isLoadingData: false, //是否正在加载数据

        //内部属性
        isInit: true,
        //oriData: {},
        //view属性
        isLoading: false,
        //view接口
        doSubmit: _interface,
        doReset: _interface,
        _trigger: _interface,
        _ajax: _interface,
        _checkValid: _interface,

        ajaxData: _interface, //请求数据
        checkData: _interface, //验证数据
        $$checkData: _interface, //验证数据

        getAjaxData: _interface, //获取上次ajax返回的数据
        setAjaxData: _interface, //设置ajax返回的数据

        getDefaultData: _interface, //获得表单默认数据
        setDefaultData: _interface, //设置表单默认数据

        getData: _interface,
        $$getData: _interface,

        setData: _interface,
        submit: _interface,
        reset: _interface,
        reload: _interface,
        getElements: _interface,
        //slot
        content: "",

        $template: template,
        $replace: true,
        //hooks : 定义component中的属性
        //vmOpts : 引用component时的js配置$opt 
        //eleOpts: 使用component时标签中的属性
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //内部方法
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "data":
                        if (typeof vm.onDataChange == "function") {
                            vm.onDataChange(vm);
                        }
                        break;
                    case "fail":
                        if (typeof vm.onFail == "function") {
                            vm.onFail(vm);
                        }
                        break;
                    case "loaded":
                        if (typeof vm.onloaded == "function") {
                            vm.onloaded(ev, vm);
                        }
                        break;
                    case "submited":
                        if (typeof vm.onsubmited == "function") {
                            vm.onsubmited(ev, vm);
                        }
                        break;
                    case "beforeSubmit":
                        if (typeof vm.onBeforeSubmit == "function") {
                            vm.onBeforeSubmit(ev, vm);
                        }
                        break;
                    case "reseted":
                        if (typeof vm.onreseted == "function") {
                            vm.onreseted(ev, vm);
                        }
                        break;
                    case "ok":
                        if (typeof vm.onoksubmited == "function") {
                            vm.onoksubmited(ev, vm);
                        }
                    case "err":
                        if (typeof vm.onerrsubmited == "function") {
                            vm.onerrsubmited(ev, vm);
                        }
                    default: break;
                }
            }
            vm._ajax = function (url, data, successCallback) {
                if (url != "") {
                    vm.isLoading = true;
                    req.ajax({
                        type: "POST",
                        url: url,
                        data: {
                            data: JSON.stringify(data)
                        },
                        dataType: "json",
                        headers: {},
                        success: function (d, status, xhr) {
                            vm.isLoading = false;
                            successCallback(d);
                        },
                        error: function (d) {
                            vm.isLoading = false;
                            vm._trigger(d, "err");
                        }
                    });
                }
            }
            vm._checkValid = function () {
                var result = true;
                for (k in vm.$refs) {
                    var comp = vm.$refs[k];
                    if (comp.isValid != undefined && comp.isValid === false) {
                        result = false; break;
                    }
                }
                return result;
            }

            vm.ajaxData = function (data) {
                var config = vm.$ajaxConfig;
                if (config.url !== "") {
                    var param = $.extend(data, config.data);
                    Mc.Ajax({
                        url: config.url,
                        data: param,
                        success: function (response) {
                            vm.isLoadingData = false;
                            vm.setAjaxData(response);
                            vm._trigger({}, "data");
                        },
                        beforeSend: function () {
                            vm.isLoadingData = true;
                        },
                        fail: function (response) {
                            vm.isLoadingData = false;
                            vm._trigger({}, "fail");
                        }
                    });
                }
            }
            vm.getAjaxData = function () {
                return vm.$ajaxTmpData;
            }
            vm.setAjaxData = function (val) {
                vm.$ajaxTmpData = val;
            }

            vm.$$checkData = function (curVm) {
                var result = true;
                for (k in curVm) {
                    var comp = curVm[k];
                    //todo 验证重构，子组件提供是否带验证，是否验证通过的方法
                    if (comp.hasOwnProperty("validValue")) {
                        comp.validValue(); //执行数据验证
                        if (comp.hasOwnProperty("isValid") && !comp.isValid) {
                            result = false;
                            //验证单个后结束，还是验证全部
                            //break;
                        }
                    }
                }
                return result;
            }

            vm.checkData = function () {
                var result = true;
                for (k in vm.$refs) {
                    var comp = vm.$refs[k];
                    //todo 验证重构，子组件提供是否带验证，是否验证通过的方法
                    if (comp.hasOwnProperty("validValue")) {
                        comp.validValue(); //执行数据验证
                        if (comp.hasOwnProperty("isValid") && !comp.isValid) {
                            result = false;
                            //验证单个后结束，还是验证全部
                            //break;
                        }
                    }
                }
                return result;
            }

            vm.doSubmit = function (ev) {
                vm._trigger(ev, "submited");
                var curVm = vm.getCurVm();
                if (vm.$$checkData(curVm)) {
                    //var data = vm.getData();
                    var data = vm.$$getData(curVm);
                    vm._trigger(ev, "beforeSubmit");
                    vm.ajaxData(data);
                }
            }
            vm.doReset = function (ev) {
                vm.setData();
                vm._trigger(ev, "reseted");
            }
            
            vm.getCurVm = function () {
                var vmArr = [];
                var tmpData = [];
                var judgeStateList = []; //判断statelist
                for (k in vm.$refs) {
                    if (vm.$refs.hasOwnProperty(k)) {
                        var comp = vm.$refs[k];
                        //todo 如果不跟外部switch关联(即不在外部更新字段值,则直接去获取defaultdata内该字段的值) 
                        if (_hasProperty(comp, "judgeName")) {
                            judgeStateList.push({
                                "judge": comp.judgeName,
                                "state": comp.getValue() + ""
                            });
                        }
                        if (_hasProperty(comp, "fJudge")) {
                            tmpData.push({
                                "vm": comp,
                                "judge": comp.fJudge,
                                "state": comp.fState + ""
                            });
                        } else {
                            vmArr.push(comp);
                        }
                    }
                }
                $.each(tmpData, function (i, dataVal) {
                    $.each(judgeStateList, function (i, judgeVal) {
                        if (dataVal.judge === judgeVal.judge) {
                            var stateList = dataVal.state.split(",");
                            $.each(stateList, function (i, stateVal) {
                                if (stateVal === judgeVal.state) {
                                    vmArr.push(dataVal.vm);
                                    return false;
                                }
                            });
                        }
                    });
                });
                return vmArr;
            }

            vm.$$getData = function (curVm) {
                //todo 组件是否有judgeName,submitName,formName在初始化的时候判断组装
                var data = {};
                for (k in curVm) {
                    if (curVm.hasOwnProperty(k)) {
                        var comp = curVm[k];
                        //submitName优先级高于formName
                        if (_hasProperty(comp, "submitName") && typeof comp.getValue == "function") {
                            data[comp.submitName] = comp.getValue();
                        } else if (_hasProperty(comp, "formName") && typeof comp.getValue == "function") {
                            data[comp.formName] = comp.getValue();
                        }
                    }
                }
                return data;
            }

            //对外方法
            vm.getData = function () {
                //todo 组件是否有judgeName,submitName,formName在初始化的时候判断组装
                var data = {};
                var tmpData = [];
                var judgeStateList = []; //判断statelist
                for (k in vm.$refs) {
                    if (vm.$refs.hasOwnProperty(k)) {
                        var comp = vm.$refs[k];
                        //submitName优先级高于formName
                        if (_hasProperty(comp, "submitName") && typeof comp.getValue == "function") {
                            if (_hasProperty(comp, "fJudge")) {
                                tmpData.push({
                                    "key": comp.submitName,
                                    "value": comp.getValue(),
                                    "judge": comp.fJudge,
                                    "state": comp.fState + ""
                                });
                            } else {
                                tmpData.push({
                                    "key": comp.submitName,
                                    "value": comp.getValue()
                                });
                            }
                        } else if (_hasProperty(comp, "formName") && typeof comp.getValue == "function") {
                            if (_hasProperty(comp, "fJudge")) {
                                tmpData.push({
                                    "key": comp.formName,
                                    "value": comp.getValue(),
                                    "judge": comp.fJudge,
                                    "state": comp.fState + ""
                                });
                            } else {
                                tmpData.push({
                                    "key": comp.formName,
                                    "value": comp.getValue()
                                });
                            }
                        }
                    }
                }
                $.each(tmpData, function (i, dataVal) {
                    if (dataVal.judge) {
                        $.each(judgeStateList, function (i, judgeVal) {
                            if (dataVal.judge === judgeVal.judge) {
                                var stateList = dataVal.state.split(",");
                                $.each(stateList, function(i, stateVal) {
                                    if (stateVal === judgeVal.state) {
                                        data[dataVal.key] = dataVal.value;
                                        return false;
                                    }
                                });
                            }
                        });
                    } else {
                        data[dataVal.key] = dataVal.value;
                    }
                });
                return data;
            }
            vm.setData = function () {
                var data = vm.getDefaultData();
                for (k in vm.$refs) {
                    if (vm.$refs.hasOwnProperty(k)) {
                        var comp = vm.$refs[k];
                        if (_hasProperty(comp, "formName") && typeof comp.setValue == "function") {
                            var formNameList = comp.formName.split(",");
                            var dataList = formNameList.map(function(val, i) {
                                var dataVal = data[val];
                                return dataVal !== null && dataVal !== undefined ? data[val] : "";
                            });
                            comp.setValue.apply(vm, dataList);
                            //comp.setValue(data[comp.formName] ? data[comp.formName] : "");
                        }
                    }
                }
                return vm;
            }

            vm.getDefaultData = function () {
                return vm.$defaultData;
            }
            vm.setDefaultData = function (val) {
                vm.$defaultData = val;
                vm.defaultData = val;
                return vm;
            }

            vm.submit = function () {
                vm.doSubmit({});
            }
            vm.reset = function () {
                vm.doReset({});
            }
            vm.reload = function () {
                if (vm.loadUrl != "") {
                    vm._ajax(vm.loadUrl, vm.loadParam, function (d) {
                        if (d.response.state == "success") {
                            //vm.setData(d.response.data);
                        }
                        vm._trigger(d, "loaded");
                    });
                }
            }
            vm.getElements = function () {
                var arr = [];
                for (k in vm.$refs) {
                    var comp = vm.$refs[k];
                    if (comp.name != undefined && typeof comp.setValue == "function") {
                        arr.push(comp);
                    }
                }
                return arr;
            }
        },
        $ready: function (vm, elem) {
            //$.each(vm.$refs, function (val, i) {
            //    var childVm = avalon.vmodels[val];
            //    childVm.labelSize != undefined && (childVm.labelSize = vm.labelSize);
            //});
            for (k in vm.$refs) {
                var comp = vm.$refs[k];
                if (comp.hasOwnProperty("labelSize") && typeof comp.getValue == "function") {
                    comp.labelSize = vm.labelSize;
                }
            }
            //if (vm.autoAjaxFirst) {
            //    vm.getData();
            //} else {
            //    vm.setData();
            //}
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            //vm.oriData = vm.getData();
            //vm.reload();
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:form"];
    widget.regionals = {};
})