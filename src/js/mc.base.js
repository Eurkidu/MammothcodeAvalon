define(['avalon'], function (avalon) {
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

var deepCopy = function (source) {
    var result = {};
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            result[key] = typeof source[key] === 'object' ? window.deepCoyp(source[key]) : source[key];
        }
    }
    return result;
}

McAvalon = {
    version: '0.0.1beta',
    $window: $({}), //子页面的全局window对象
    getVm: function (identifier) { //通过identifier获取avalon的VM对象
        return avalon.vmodels[identifier];
    },
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

    DataConvert: function (data) {
        var convertFun = {
            state: function (val) {
                if (val === 0) {
                    return "待处理";
                } else if (val === 1) {
                    return "审核通过";
                } else {
                    return "审核不通过";
                }
            },
            time: function (val) {
                return val.substring(0, 19).replace("T", " ");
            },
            SS_SETTLEMENT_TYPE: function (val) {
                if (val === 0) {
                    return "待办";
                } else if (val === 1) {
                    return "自办";
                } 
            },
            SS_STATUS: function (val) {
                if (val === 0) {
                    return "未付款";
                } else if (val === 1) {
                    return "已付款待结清";
                }
                else if (val === 2) {
                    return "结清成功";
                }
                else if (val === 3) {
                    return "结清失败";
                }
            },
            CM_AGENCYFINANCE_TYPE: function (val) {
                if (val === 0) {
                    return "理赔资料";
                } else if (val === 1) {
                    return "修车资料";
                }
                else if (val === 2) {
                    return "交警事放单或快速处理单";
                }
                else if (val === 5) {
                    return "身份证和打款卡号";
                }
            },
            CM_STATUS: function (val) {
                if (val === 0) {
                    return "待审核";
                } else if (val === 1) {
                    return "审核通过";
                }
                else if (val === 2) {
                    return "审核不通过";
                }
            },
            WM_STATUS: function (val) {
                if (val === 0) {
                    return "待审核";
                } else if (val === 1) {
                    return "审核通过";
                }
                else if (val === 2) {
                    return "审核不通过";
                }
            },
            C_TYPE: function (val) {
                if (val === 0) {
                    return "用户第一次按揭的优惠券";
                } else if (val === 1) {
                    return "普通优惠券";
                } 
            },
            C_ISUSED: function (val) {
                if (val === 0) {
                    return "未使用";
                } else if (val === 1) {
                    return "已使用";
                }
            },
        }
        var convertList = {
            WB_STATUS: convertFun.state,
            CREATE_TIME: convertFun.time,
            SS_SETTLEMENT_TYPE: convertFun.SS_SETTLEMENT_TYPE,
            SS_STATUS: convertFun.SS_STATUS,
            CM_AGENCYFINANCE_TYPE: convertFun.CM_AGENCYFINANCE_TYPE,
            CM_STATUS: convertFun.CM_STATUS,
            WM_STATUS: convertFun.WM_STATUS,
            //  C_TYPE: convertFun.C_TYPE,
            C_ISUSED: convertFun.C_ISUSED,
        }
        $.each(convertList, function (key, fun) {
            $.each(data, function (i, val) {
                if (val.hasOwnProperty(key)) {
                    val[key] = fun(val[key]);
                }
            });
        });
        return data;
    }
}

avalon.config({
    paths: {
        mmRequest: "ui/base/js/mmRequest.js",
        mmPromise: "ui/base/js/mmPromise.js",
        mmHistory: "ui/base/js/mmRouter/mmHistory.js",
        mmRouter: "ui/base/js/mmRouter/mmRouter.js",
        mmState: "ui/base/js/mmRouter/mmState.js",
        //MCUI path
        mcAccordion: "ui/accordion/mc.accordion.js", //手风琴
        mcSidebar: "ui/sidebar/mc.sidebar.js", //侧边栏
        mcSidepop: "ui/sidepop/mc.sidepop.js", //侧边弹出层
        mcDatagrid: "ui/datagrid/mc.datagrid.js", //数据表
        mcDatagridTest: "ui/datagridtest/mc.datagridtest.js", //数据表2
        mcPopmenu: "ui/popmenu/mc.popmenu.js", //弹出菜单
        mcPop: 'ui/pop/mc.pop.js', //提示框,确认框组件
        mcDialog: 'ui/dialog/mc.dialog.js',
        mcDialogTest: 'ui/dialogtest/mc.dialogtest.js',
        mcForm: 'ui/form/mc.form.js',
        mcNavbar: 'ui/navbar/mc.navbar.js',
        mcPanel: 'ui/panel/mc.panel.js',
        mcTab: 'ui/tab/mc.tab.js',
        mcSearchbox: "ui/searchbox/mc.searchbox.js", //搜索框
        mcTabs: "ui/tabs/mc.tabs.js", //tabs
        mcCheckbox: "ui/form/checkbox/mc.checkbox.js", //复选框
        mcCheckboxGroup: 'ui/form/checkboxGroup/mc.checkboxgroup.js',
        mcListdataAdd: 'ui/form/ListdataAdd/mc.ListdataAdd.js',//左右选择框
        mcTree: 'ui/form/tree/mc.tree.js',//树形
        mcTreeBt: 'ui/form/treebt/mc.tree.js',//树形2
        mcTreeSelect: 'ui/form/treeSelect/mc.treeSelect.js',//树形选择form
        mcButton: "ui/form/button/mc.button.js", //按钮
        mcDroplist: "ui/droplist/mc.droplist.js", //下拉展开列表
        mcDatapager: "ui/datapager/mc.datapager.js", //页码
        mcDatapagerTest: "ui/datapagertest/mc.datapagerTest.js", //页码test
        mcDatepicker: 'ui/form/datepicker/mc.datepicker.js', //日期选择
        mcPassword: 'ui/form/password/mc.password.js',
        mcRadiogroup: 'ui/form/radio/mc.radiogroup.js',
        mcRate: 'ui/form/rate/mc.rate.js',
        mcSelectbox: "ui/form/selectbox/mc.selectbox.js", //下拉选择框
        mcSpinner: 'ui/form/spinner/mc.spinner.js',
        mcSwitch: 'ui/form/switch/mc.switch.js', //开关组件
        mcText: "ui/form/text/mc.text.js", //输入行
        mcJsonadd: "ui/form/jsonadd/mc.jsonadd.js", //输入行
        mcUpload: "ui/form/upload/mc.upload.js", //上传组件
        mcEditor: "ui/form/editor/mc.editor.js", //文本编辑器组件
        mcTagadd: "ui/form/tagadd/mc.tagadd.js", //标签添加组件
        mcPagemodal: "ui/pagemodal/mc.pagemodal.js", //页面弹窗
        mcBread: "ui/bread/mc.bread.js", //面包屑
        mcTextarea: 'ui/form/textarea/mc.textarea.js',
        //MCLayout path
        mcGrid: "ui/layout/gridlayout/mc.gridlayout.js", //网格布局
        mcLinear: "ui/layout/linearlayout/mc.linearlayout.js", //线性布局
        mcAbsolute: "ui/layout/absolutelayout/mc.absolutelayout.js", //绝对布局
        mcRelative: "ui/layout/relativelayout/mc.relativelayout.js", //相对布局
    },
    maxRepeatSize: 50
});
avalon.library("mc", {
    $init: function () { },
    $childReady: function () { },
    $ready: function () { },
    $dispose: function () { }
});

  
 
 

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
window.toDatagridData(data, target) {
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
window.datagridData(data, callback) {
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

window.root = avalon.define({ //存放全局变量,可双向绑定
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
// polyfill
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
});
