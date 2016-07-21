define(["avalon", "text!./mc.pop.html", "css!./mc.pop.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:pop", {
        //#region 外部参数
        mcstyle: "", //风格
        disabled: false, //是否禁用
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        showTip: _interface, //显示提示
        showSuccessTip: _interface, //显示成功提示
        showFailTip: _interface, //显示失败提示
        showConfirm: _interface, //显示操作确认
        //#endregion

        //#region 内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件

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

            vm.showTip = function (msg, time) {
                if (time === undefined) {
                    swal(msg);
                } else {
                    swal({ title: msg, timer: time });
                }
            }
            vm.showSuccessTip = function (msg, time) {
                if (time === undefined) {
                    swal({ title: msg, type: "success" });
                } else {
                    swal({ title: msg, type: "success", timer: time });
                }
            }
            vm.showFailTip = function (msg, time) {
                if (time === undefined) {
                    swal({ title: msg, type: "error" });
                } else {
                    swal({ title: msg, type: "error", timer: time });
                }
            }
            /**doc
             * 显示确认框
             * @param {} title 确认框标题
             * @param {} text 确认框内容
             * @returns {Defferred对象} done执行confirm按钮事件,fail执行cancel按钮事件
             */
            vm.showConfirm = function (title, text) {
                var def = $.Deferred();
                swal({
                    title: title,
                    text: text,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    closeOnConfirm: false, //bug 依照confirm回调函数的调用时间,todo loading?
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        vm._trigger({}, "confirm");
                        def.resolve();
                    } else {
                        vm._trigger({}, "cancel");
                        def.reject();
                    }
                });
                return def;
            }
            //#endregion

            //#region 内部事件

            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "confirm":
                        if (typeof vm.onConfirm == "function") {
                            vm.onConfirm(ev, vm, _this);
                        }
                        break;
                    case "cancel":
                        if (typeof vm.onCancel == "function") {
                            vm.onCancel(ev, vm, _this);
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

    var widget = avalon.components["mc:pop"];
    widget.regionals = {};
})