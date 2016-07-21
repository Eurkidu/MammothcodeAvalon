define(['avalon', 'text!./mc.linearlayout.html', 'css!./mc.linearlayout.min.css'], function (avalon, template) {
    //获取内部保存项路径
    function getPath(d, hooks) {
        for (var i = 0; i < d.length; i++) {
            hooks[d[i]._p] = "";
            if (d[i]._c.length) {
                getPath(d[i]._c, hooks);
            }
        }
    }
    //初始化布局
    function iniLayout(vm, elem) {
        //把线性布局与布局管理器关联
        //var $linear = $(elem).find(".mc-linear-item");
        var layoutSizeObj = {};
        var styleHtml = "";
        styleHtml += "<style>";
        console.log(vm.$mamager);
        vm.$mamager.each(function (i, val) {
            var className = $(val).attr("class").split(" ");
            $.each(className, function (j, item) {
                if (item.indexOf("mc_ai") !== -1) {
                    layoutSizeObj[item.replace("mc_ai", "mc_li")] = {
                        width: val.offsetWidth,
                        height: val.offsetHeight
                    }
                    styleHtml += "#" + vm.layoutid + " ." + item.replace("mc_ai", "mc_li") + "{width:" + val.offsetWidth + "px;height:" + val.offsetHeight + "px}";
                    return false;
                }
            });
            //$linear.eq(i).css({
            //    height: val.offsetHeight,
            //    width: val.offsetWidth
            //});
        });
        styleHtml += "</style>";
        vm.sizeStyle = styleHtml;
        return layoutSizeObj;
    }
    var _interface = function () { };
    avalon.component("mc:linearlayout", {
        //外部属性
        mode: "v",
        data: {},
        mcstyle: "",
        width: false,
        height: false,
        padding: false,
        pt: false,
        pl: false,
        pr: false,
        pb: false,
        layoutz: {},
        //内部属性
        isInit: true,
        layoutid: "", //布局id
        tmpid: "",
        mtmpid: "",
        $mamager: null, //布局管理器
        extend: {},

        sizeStyle: "", //大小样式

        //view接口
        test: _interface,
        onInit: _interface, //必须定义此接口
        renderStyle: _interface,
        calPosition: _interface,
        renderContent: _interface,
        _trigger: _interface,

        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            hooks.layoutid = McAvalon.util.genId("layout");
            hooks.tmpid = McAvalon.util.genId("linear");
            hooks.mtmpid = McAvalon.util.genId("manager");
            getPath(vmOpts.data._c, hooks);
            console.log(hooks);
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //接口方法
            vm.renderStyle = function (style) {
                if (vm[style] !== false) {
                    return vm[style];
                }
                //var style = "<style>." + vm.$id + "{";
                //vm.top === false || (style += "top:" + vm.top + "px;");
                //vm.left === false || (style += "left:" + vm.left + "px;");
                //vm.right === false || (style += "right:" + vm.right + "px;");
                //vm.bottom === false || (style += "bottom:" + vm.bottom + "px;");
                //vm.width === false || (style += "width:" + vm.width + "px;");
                //style += "}</style>";
                //console.log(vm);
                //return style;
            }
            vm.test = function (data) {
                console.log(data);
                console.log(data._m);
                console.log(vm.data);
            }
            vm.renderContent = function (path, cNbr) {
                if (!cNbr) { //判断是否为末块
                    return vm[path];
                }
                return "";
            }
            vm.calPosition = function (pType, data, idx) {
                //todo 支持多个百分比
                var tmp, i;
                if (pType === "top") {
                    if (data._m === "h") {
                        return 0;
                    } else {
                        tmp = 0;
                        for (i = 0; i < idx; i++) {
                            if (data._c[i].w.indexOf("%") !== -1) return false;
                            tmp += data._c[i].w >>> 0;
                        }
                        return tmp;
                    }
                } else if (pType === "bottom") {
                    if (data._m === "h") {
                        return 0;
                    } else {
                        tmp = 0;
                        for (i = idx + 1; i < data._c.length; i++) {
                            if (data._c[i].w.indexOf("%") !== -1) return false;
                            tmp += data._c[i].w >>> 0;
                        }
                        return tmp;
                    }
                } else if (pType === "left") {
                    if (data._m === "v") {
                        return 0;
                    } else {
                        tmp = 0;
                        for (i = 0; i < idx; i++) {
                            if (data._c[i].w.indexOf("%") !== -1) return false;
                            tmp += data._c[i].w >>> 0;
                        }
                        return tmp;
                    }
                } else if (pType === "right") {
                    if (data._m === "v") {
                        return 0;
                    } else {
                        tmp = 0;
                        for (i = idx + 1; i < data._c.length; i++) {
                            if (data._c[i].w.indexOf("%") !== -1) return false;
                            tmp += data._c[i].w >>> 0;
                        }
                        return tmp;
                    }
                }
            }
        },
        $ready: function (vm, elem) {
            vm.$mamager = $(elem).find(".mc-absolute-item");
            console.log(vm.$mamager);
            //注册布局初始化事件
            McAvalon.$window.on("layout_ini", function () {
                console.log("layout_ini");
                //触发布局大小变动事件
                McAvalon.$window.trigger("layout_resize", iniLayout(vm, elem));
            });
            //注册窗口大小变动事件
            McAvalon.$window.on("window_resize", function () {
                console.log("layout_resize");
                //触发布局大小变动事件
                McAvalon.$window.trigger("layout_resize", iniLayout(vm, elem));
            });
            //iniLayout(vm, elem);
            console.log("linearlayout ini");
            //触发布局初始化事件
            McAvalon.$window.trigger("layout_ini");
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        },
        $childReady: function (a,b) {
            console.log(a);
            console.log(b);
        }
    });

    var widget = avalon.components["mc:linearlayout"];
    widget.regionals = {};
});