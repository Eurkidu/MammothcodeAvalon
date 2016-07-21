
//#region 图标
McIcon = function () {
    //可选图标列表
    this.iconList = [
        { iconCode: "&#xe791;" },
        { iconCode: "&#xe78b;" },
        { iconCode: "&#xe729;" },
        { iconCode: "&#xe734;" },
        { iconCode: "&#xe74a;" },
        { iconCode: "&#xe741;" },
        { iconCode: "&#xe739;" },
        { iconCode: "&#xe759;" },
        { iconCode: "&#xe753;" },
        { iconCode: "&#xe700;" },
        { iconCode: "&#xe6fe;" },
        { iconCode: "&#xe706;" },
        { iconCode: "&#xe667;" },
        { iconCode: "&#xe665;" },
        { iconCode: "&#xe671;" },
        { iconCode: "&#xe676;" },
        { iconCode: "&#xe6af;" },
        { iconCode: "&#xe699;" },
        { iconCode: "&#xe69b;" },
        { iconCode: "&#xe651;" }
    ];
}
McIcon.prototype.getList = function () {
    return this.iconList;
}
McIcon.prototype.getIcon = function (idx) {
    return this.iconList[idx];
}
//#endregion

//#region McAvalon Info
McAvalon = {
    //版本信息
    version: '0.4.0beta',
    $window: $({}), //子页面的全局window对象
    $mcPageStore: null, //子页面的store对象
    getVm: function (identifier) { //通过identifier获取avalon的VM对象
        return avalon.vmodels[identifier];
    },
    //工具函数
    util: {
        //生成UID(id前缀)
        genId: function (prefix) {
            //prefix = prefix.toUpperCase() || 'ID';
            prefix = prefix || 'ID';
            return String(Math.random() + Math.random()).replace(/\d\.\d{4}/, prefix);
        },
        //获取url参数
        getUrlParamByName: function (name) {
            var result = null;
            var hash = window.location.hash;
            var s = hash.indexOf("?");
            if (s !== -1) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = hash.substr(s + 1).match(reg);
                if (r != null) result = decodeURIComponent(r[2]);
            }
            return result;
        }
    },
    //数据验证
    validata: function (val, valids) {
        var info = '', reg = null, flag = true, validArr = valids.split(',');
        for (var i = 0; i < validArr.length; i++) {
            var valid = validArr[i];
            switch (valid) {
                case 'int':
                    reg = /^\-?\d+$/;
                    info = reg.test(val) ? '' : '请输入正确的整数'; break;
                case '+int':
                    reg = /^\+?[1-9][0-9]*$/;
                    info = reg.test(val) ? '' : '请输入正确的正整数'; break;
                case '-int':
                    reg = /^\-[1-9][0-9]*$/;
                    info = reg.test(val) ? '' : '请输入正确的负整数'; break;
                case 'float':
                    reg = /^(-?\d+)(\.\d+)?/;
                    info = reg.test(val) ? '' : '请输入正确的浮点数'; break;
                case '+float':
                    reg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
                    info = reg.test(val) ? '' : '请输入正确的正浮点数'; break;
                case '-float':
                    reg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
                    info = reg.test(val) ? '' : '请输入正确的负浮点数'; break;
                case 'ip':
                    reg = /^(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])$/;
                    info = reg.test(val) ? '' : 'IP地址有误'; break;
                case 'email':
                    reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,5}$/;
                    info = reg.test(val) ? '' : '电子邮件地址有误'; break;
                case 'phone':
                    reg = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
                    info = reg.test(val) ? '' : '电话号码有误'; break;
                case 'mobile':
                    reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                    info = reg.test(val) ? '' : '手机号码有误'; break;
                default:
                    break;
            }
        }
        return info;
    },

    //图标
    icon: new McIcon()
}
//#endregion

//#region Avalon Config
avalon.config({
    paths: {
        mmRequest: "debug/src/ass/ui/base/js/mmRequest.js",
        mmPromise: "debug/src/ass/ui/base/js/mmPromise.js",
        mmHistory: "debug/src/ass/ui/base/js/mmRouter/mmHistory.js",
        mmRouter: "debug/src/ass/ui/base/js/mmRouter/mmRouter.js",
        mmState: "debug/src/ass/ui/base/js/mmRouter/mmState.js",
        //MCUI path
        mcAccordion: "debug/src/ass/ui/accordion/mc.accordion.js", //手风琴
        mcSidebar: "debug/src/ass/ui/sidebar/mc.sidebar.js", //侧边栏
        mcSidepop: "debug/src/ass/ui/sidepop/mc.sidepop.js", //侧边弹出层
        mcDatagrid: "debug/src/ass/ui/datagrid/mc.datagrid.js", //数据表
        mcDatagridTest: "debug/src/ass/ui/datagridtest/mc.datagridtest.js", //数据表2
        mcPopmenu: "debug/src/ass/ui/popmenu/mc.popmenu.js", //弹出菜单
        mcPop: 'debug/src/ass/ui/pop/mc.pop.js', //提示框,确认框组件
        mcDialog: 'debug/src/ass/ui/dialog/mc.dialog.js',
        mcDialogTest: 'debug/src/ass/ui/dialogtest/mc.dialogtest.js',
        mcForm: 'debug/src/ass/ui/form/mc.form.js',
        mcNavbar: 'debug/src/ass/ui/navbar/mc.navbar.js',
        mcPanel: 'debug/src/ass/ui/panel/mc.panel.js',
        mcTab: 'debug/src/ass/ui/tab/mc.tab.js',
        mcSearchbox: "debug/src/ass/ui/searchbox/mc.searchbox.js", //搜索框
        mcTabs: "debug/src/ass/ui/tabs/mc.tabs.js", //tabs
        mcCheckbox: "debug/src/ass/ui/form/checkbox/mc.checkbox.js", //复选框
        mcCheckboxGroup: 'debug/src/ass/ui/form/checkboxGroup/mc.checkboxgroup.js',
        mcListdataAdd: 'debug/src/ass/ui/form/ListdataAdd/mc.ListdataAdd.js',//左右选择框
        mcTree: 'debug/src/ass/ui/form/tree/mc.tree.js',//树形
        mcTreeBt: 'debug/src/ass/ui/form/treebt/mc.tree.js',//树形2
        mcTreeSelect: 'debug/src/ass/ui/form/treeSelect/mc.treeSelect.js',//树形选择form
        mcButton: "debug/src/ass/ui/form/button/mc.button.js", //按钮
        mcDroplist: "debug/src/ass/ui/droplist/mc.droplist.js", //下拉展开列表
        mcDatapager: "debug/src/ass/ui/datapager/mc.datapager.js", //页码
        mcDatapagerTest: "debug/src/ass/ui/datapagertest/mc.datapagerTest.js", //页码test
        mcDatepicker: 'debug/src/ass/ui/form/datepicker/mc.datepicker.js', //日期选择
        mcPassword: 'debug/src/ass/ui/form/password/mc.password.js',
        mcRadiogroup: 'debug/src/ass/ui/form/radio/mc.radiogroup.js',
        mcRate: 'debug/src/ass/ui/form/rate/mc.rate.js',
        mcSelectbox: "debug/src/ass/ui/form/selectbox/mc.selectbox.js", //下拉选择框
        mcSpinner: 'debug/src/ass/ui/form/spinner/mc.spinner.js',
        mcSwitch: 'debug/src/ass/ui/form/switch/mc.switch.js', //开关组件
        mcText: "debug/src/ass/ui/form/text/mc.text.js", //输入行
        mcJsonadd: "debug/src/ass/ui/form/jsonadd/mc.jsonadd.js", //输入行
        mcUpload: "debug/src/ass/ui/form/upload/mc.upload.js", //上传组件
        mcEditor: "debug/src/ass/ui/form/editor/mc.editor.js", //文本编辑器组件
        mcTagadd: "debug/src/ass/ui/form/tagadd/mc.tagadd.js", //标签添加组件
        mcSelectadd: "debug/src/ass/ui/form/selectadd/mc.Selectadd.js", //选择添加组件
        mcPagemodal: "debug/src/ass/ui/pagemodal/mc.pagemodal.js", //页面弹窗
        mcBread: "debug/src/ass/ui/bread/mc.bread.js", //面包屑
        mcIconselect: "debug/src/ass/ui/form/iconselect/mc.iconselect.js", //图标选择
        mcTextarea: 'debug/src/ass/ui/form/textarea/mc.textarea.js',
        //MCLayout path
        mcGrid: "debug/src/ass/ui/layout/gridlayout/mc.gridlayout.js", //网格布局
        mcLinear: "debug/src/ass/ui/layout/linearlayout/mc.linearlayout.js", //线性布局
        mcAbsolute: "debug/src/ass/ui/layout/absolutelayout/mc.absolutelayout.js", //绝对布局
        mcRelative: "debug/src/ass/ui/layout/relativelayout/mc.relativelayout.js", //相对布局
    },
    maxRepeatSize: 50
});
avalon.library("mc", {
    $init: function () { },
    $childReady: function () { },
    $ready: function () { },
    $dispose: function () { }
});
//#endregion

//#region some method
function testSetValue(_key, _obj, _success) {
    //121.40.186.49:8001
    //$.ajax({
    //    url: "http://192.168.0.109:8001/Home/set",
    //    type: "post",
    //    async: true,
    //    data: {
    //        key: _key,
    //        value: JSON.stringify(_obj)
    //    },
    //    success: function () {
    //        typeof _success === "function" && _success();
    //    }
    //});
    $.ajax({
        url: "/Home/SetData",
        type: "post",
        async: true,
        data: {
            key: _key,
            value: JSON.stringify(_obj)
        },
        success: function () {
            typeof _success === "function" && _success();
        }
    });
}

function testGetValue(_key, _success) {
    //$.ajax({
    //    url: "http://192.168.0.109:8001/Home/get",
    //    data: {
    //      key: _key
    //    },
    //    type: "post",
    //    async: true,
    //    success: function (result) {
    //        typeof _success === "function" && _success.call(this, result);
    //    }
    //});
    $.ajax({
        url: "/Home/GetData",
        type: "post",
        async: true,
        data: {
            key: _key
        },
        success: function (result) {
            typeof _success === "function" && _success.call(this, result);
        }
    });
}

//对象深度拷贝
var deepCopy = function (source) {
    var result = {};
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            result[key] = typeof source[key] === 'object' ? window.deepCoyp(source[key]) : source[key];
        }
    }
    return result;
}


//方式3, 设计一个assignVM方法，方便mixin N个对象
function assignVM(vm, firstSource) {
    for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource && typeof nextSource !== "object")
            continue;
        for (var j in vm) {
            if (vm.hasOwnProperty(j) && nextSource.hasOwnProperty(j)) {
                vm[j] = nextSource[j];
            }
        }
    }
    return vm;
}
/**
 * 转换数据为表格源数据
 * @param {} data 待转换的数据
 * @param {} target 目标表格vm
 * @returns {} 转换完的数据
 */
toDatagridData = function (data, target) {
    //return target ? datagridData(data, function () { target.selected.push(false) }) : datagridData(data);
    return datagridData(data, target ? function () {
        target.selected.push(false);
    } : null);
}

/**
 * 转换为数据表格数据
 * @param {} data 原数据
 * @param {} callback 回调函数
 * @returns {} 新数据
 */
datagridData = function (data, callback) {
    var hasCallback = false;
    typeof callback === "function" && (hasCallback = true);
    avalon.each(data, function (i, val) {
        val.$tableChildVM = {};
        val.selected = false;
        if (hasCallback) callback.call(val, i);
    });
    return data;
}

McAvalon.global = {}; //存放全局变量

root = avalon.define({ //存放全局变量,可双向绑定
    $id: "app"
});

/**
 * 辅助selectbox点击收拢
 */
$(document).on("click", function () {
    if (McAvalon.global.selectboxVm) {
        avalon.each(McAvalon.global.selectboxVm, function (i, val) {
            val.isOpen() && val.setState(false);
        });
    }
});


//shim
window.console = window.console || (function () {
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
    return c;
})();
//#endregion

//#region polyfill
//author: meizz
//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
//例子：
//(new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
//(new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
//支持yyyyMMdd yyyy/MM/dd MM/dd/yyyy等
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, '');
}
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, '');
}
String.prototype.toDate = function () {
    var str = this;
    var dt = null;
    try {
        if (str.indexOf('-') != -1) {
            dt = new Date(str.replace(/-/g, '/'));
        } else if (str.indexOf('/') != -1) {
            dt = new Date(str);
        } else if (str.length == 8) {
            dt = new Date(str.substr(0, 4) + '/' + str.substr(4, 2) + '/' + str.substr(6, 2));
        } else if (str.length >= 14 && str.length <= 17) {
            dt = new Date(str.substr(0, 4) + '/' + str.substr(4, 2) + '/' + str.substr(6, 2) + ' ' + str.substr(8, 2) + ':' + str.substr(10, 2) + ':' + str.substr(12, 2));
        }
    } catch (e) { }
    return dt;
}

if (typeof Array.prototype.forEach != "function") {
    Array.prototype.forEach = function (fn, context) {
        for (var k = 0, length = this.length; k < length; k++) {
            if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
                fn.call(context, this[k], k, this);
            }
        }
    };
}

if (typeof Array.prototype.map != "function") {
    Array.prototype.map = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                arr.push(fn.call(context, this[k], k, this));
            }
        }
        return arr;
    };
}

if (typeof Array.prototype.filter != "function") {
    Array.prototype.filter = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                fn.call(context, this[k], k, this) && arr.push(this[k]);
            }
        }
        return arr;
    };
}

if (typeof Array.prototype.some != "function") {
    Array.prototype.some = function (fn, context) {
        var passed = false;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === true) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}

if (typeof Array.prototype.every != "function") {
    Array.prototype.every = function (fn, context) {
        var passed = true;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === false) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}

if (typeof Array.prototype.indexOf != "function") {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var index = -1;
        fromIndex = fromIndex * 1 || 0;

        for (var k = 0, length = this.length; k < length; k++) {
            if (k >= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

if (typeof Array.prototype.lastIndexOf != "function") {
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        var index = -1, length = this.length;
        fromIndex = fromIndex * 1 || length - 1;

        for (var k = length - 1; k > -1; k -= 1) {
            if (k <= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

if (typeof Array.prototype.reduce != "function") {
    Array.prototype.reduce = function (callback, initialValue) {
        var previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }

        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}

if (typeof Array.prototype.reduceRight != "function") {
    Array.prototype.reduceRight = function (callback, initialValue) {
        var length = this.length, k = length - 1, previous = initialValue;
        if (typeof initialValue === "undefined") {
            previous = this[length - 1];
            k--;
        }
        if (typeof callback === "function") {
            for (k; k > -1; k -= 1) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}
//#endregion

; (function (McAvalon, $, undefined) {
    "use strict";

    //#region store
    var emptyStore = null;
    //mcStore 对象
    function mcStore(idStore) {
        //id的store
        this.idStore = idStore || {};
        //vm的store
        this.vmStore = {};
        //deferred的store
        this.deferredStore = {};
        for (var id in idStore) {
            if (idStore.hasOwnProperty(id)) {
                this.deferredStore[this.idStore[id]] = $.Deferred();
            }
        }
    }

    //创建store的方法
    McAvalon.Store = function (idStore) {
        var store = new mcStore(idStore);
        McAvalon.$mcPageStore = store;
        return store;
    }

    //获得一个空的sotre对象
    McAvalon.EmptyStore = function () {
        return emptyStore || (emptyStore = new mcStore({}));
    }

    //获取id
    mcStore.prototype.getId = function (idkey) {
        return this.idStore[idkey];
    }

    //获取vm
    mcStore.prototype.getVm = function (idkey) {
        return this.vmStore[this.idStore[idkey]];
    }

    //获取延迟对象
    mcStore.prototype.getDeferred = function (idkey) {
        console.log(this.idStore[idkey]);
        return this.deferredStore[this.idStore[idkey]];
    }

    //组件注册
    mcStore.prototype.regist = function (compVm) {
        var curId = compVm.$id;
        this.vmStore[curId] = compVm;
        //暂不处理匿名注册情况
        if (this.deferredStore[curId]) {
            console.log(curId);
            //注册成功
            this.deferredStore[curId].resolve(compVm);
        }
    }
    //#endregion

})(window.McAvalon || (window.McAvalon = {}), window.jQuery);
