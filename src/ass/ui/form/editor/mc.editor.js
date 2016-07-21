define(["avalon", "text!./mc.editor.html", "css!./mc.editor.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:editor", {
        //#region 外部参数
        ueditorId: "", //百度文本编辑器的id
        label: "", //提示文字
        labelSize: 0,
        tip:"",
        placeholder: "",
        mcstyle: "", //风格
        size: "normal", //small large
        width: 900, //宽度,默认600px
        disabled: false, //是否禁用
        //表单相关
        formName: "", //表单data的key,输入框name
        readonly: false, //是否只读，只读就无法更改上传的图片，不显示上传按钮
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当按钮点击时触发事件
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
        isFullscreen: false, //是否全屏
        $ueditorObj: null, //百度文本编辑器对象
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件

        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        iniEditor: _interface, //初始化百度文本编辑器
        destroy: _interface, //销毁当前的百度文本编辑器对象
        //#endregion

        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            hooks.ueditorId = McAvalon.util.genId("_ueditor");
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
                //获得百度文本编辑器内容
                return vm.$ueditorObj.getContent();
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                //如果在源代码模式则先切换回编辑模式
                if (vm.$ueditorObj.queryCommandState('source')) {
                    vm.$ueditorObj.execCommand('source');
                }
                vm.$ueditorObj.setContent(val);
            }
            //#endregion

            //#region 内部事件

            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm, _this);
                        }
                        break;
                    default: break;
                }
            }
            vm.iniEditor = function() {
                UM.clearCache(vm.ueditorId);
                //实例化编辑器
                vm.$ueditorObj = UM.getEditor(vm.ueditorId);
                //fix fullscreen bug
                vm.$ueditorObj.addListener("afterfullscreenchange", function () {
                    vm.isFullscreen = !vm.isFullscreen;
                });
            }
            vm.destroy = function () {
                //销毁当前的百度文本编辑器对象
                UM.clearCache(vm.ueditorId);
            }
            //#endregion
        },
        $ready: function (vm, elem) {
            vm.iniEditor(); //初始化百度文本编辑器
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:editor"];
    widget.regionals = {};
})