define(["avalon", "text!./mc.tabs.html", "css!./mc.tabs.min.css"], function (avalon, template) {
    function setContentHeight(vm, elem) {
        var vmHeight = $(elem).css("height").replace("px", "") >>> 0; //组件高度
        $(elem).find(".mc-tabs-body").css("height", vmHeight - vm.otherOffset - vm.scrollContentOffset);
    }
    var _interface = function () { };
    avalon.component("mc:tabs", {
        //外部参数
        tabsName: "",
        tabConfig: [], //tab配置项 [label: 文字信息] [callback: 回调函数]
        activeIndex: 0, //tab激活的index
        disabled: false, //是否禁用

        bindSize: "", //跟linearlayout布局大小层绑定的class名

        otherOffset: 0, //其他外部偏移（跟linearlayout内部包括的relativelayout的padding有关,暂定待修改,relativelayout跟滚动结合）
        scrollContentOffset: 31, //滚动内容偏移值（跟样式有关系）

        //外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当tab项点击时触发事件

        //外部接口
        isDisable: _interface, //是否禁用

        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        $tabsBody: null, //tabs body 的 jQuery 对象

        //内部事件
        clickTab: _interface, //按钮点击事件

        //内部接口
        _trigger: _interface, //内部触发器
        renderContent: _interface, //渲染tab内容

        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.tabConfig != undefined) {
                for (var i = 0; i < vmOpts.tabConfig.length; i++) {
                    hooks["content" + i] = "";
                }
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //内部事件
            vm.clickTab = function (ev, tabIdx) {
                if (!vm.disabled) {
                    if (vm.activeIndex !== tabIdx) {
                        vm.activeIndex = tabIdx;
                        typeof vm.tabConfig[tabIdx].callback === "function" && vm.tabConfig[tabIdx].callback(ev, vm);
                        vm._trigger(ev, "click");
                        ev.stopPropagation();
                    }
                }
            }

            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            vm.renderContent = function(tabIdx) {
                return vm["content" + tabIdx];
            }

            //外部事件
            vm.isDisable = function () {
                return vm.disabled;
            }
        },
        $ready: function (vm, elem) {
            vm.$tabsBody = $(elem).find(".mc-tabs-body");
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            console.log("tabs ini");
            //setContentHeight(vm, elem);
            //注册布局大小变动事件
            McAvalon.$window.on("layout_resize", function (event, layoutSizeObj) {
                console.log(layoutSizeObj);
                if (layoutSizeObj["mc_li" + vm.bindSize]) {
                    var vmHeight = layoutSizeObj["mc_li" + vm.bindSize].height;
                    vm.$tabsBody.css("height", vmHeight - vm.otherOffset - vm.scrollContentOffset);
                }
            });
            //触发布局初始化事件
            McAvalon.$window.trigger("layout_ini");
        }
    });

    var widget = avalon.components["mc:tabs"];
    widget.regionals = {};
})