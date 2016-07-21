//重写data转换函数::test--data是list,把selectbox val转index在这一起转
function toDatagridData(data, config) {
    //return target ? datagridData(data, function () { target.selected.push(false) }) : datagridData(data);
    return datagridData(data, config);
}
/**
 * 转换为数据表格数据
 * @param {} data 原数据
 * @param {} callback 回调函数
 * @returns {} 新数据
 */
function datagridData(data, config) {
    avalon.each(data, function (i, item) {
        item.selected = false;
        //这样写意味着一行只允许存在一个下拉框..暂时 ,原来TDLINK也只能有一个.NB,不然做单向同步到V会非常麻烦..
        item.selectboxActive = false;
        item.selectboxIndex = -1;
    });
    setSelectboxRealIndex(data, config)
    return data;
}
/**doc
* @description {设置当前值对应的真实index}
* @param {data} {数据源}
* @param {config} {tr head配置}
* @returns {vm} {当前调用的vm对象} 
*/
var setSelectboxRealIndex = function (data, config) {
    //获取Select所在字段
    var r = config.filter(function (config) {
        return config.type === 'selectbox'
    });
    if (!r[0]) return false;
    var key = r[0].dataId;
    //设置index  
    data.forEach(function (item, i) {
        var opt = r[0].selectboxOpt.filter(function (opt) {
            return opt.value === item[key];
        })
        opt = opt[0];
        //console.log(r[0].selectboxOpt)
        var realIndex = r[0].selectboxOpt.indexOf(opt);
        item.selectboxIndex = realIndex;
    })
}
define(["avalon", "text!./mc.datagridtest.html", "css!./mc.datagridtest.min.css", 'css!./checkbox/mc.checkbox.min.css', 'css!./selectbox/mc.selectbox.min.css', 'css!./button/mc.button.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:datagridtest", {
        //外部参数  
        tableConfig: [], //表格配置项 [headTxt - 标题信息][dataId - 绑定列id][width - 列宽][type - 列类型] [btn-onCLick事件]
                         //[selectbox- selectboxOpt: [{ text, value }]
        dataGetConfig: null,  //获取数据源的配置参数 
        data: [], //数据源
        field: "", //排序字段
        trend: 1, //排序正负
        //外部事件
        onInit: _interface, //初始化接口 
        //外部接口
        getSelectedRow: _interface, //获取选中行(返回数组)  
        removeRow: _interface, //移除行
        removeRowByID: _interface, //移除行by
        insertRow: _interface, //插入行
        replaceRow: _interface, //替换行 
        //内部属性
        isInit: true,
        extend: {},
        name: "", //样式名 - 防止动态生成的style冲突
        selectedAll: false,//全选
        selectedList: [], //选中项 
        selectboxActiveList: [], //展开项 
        $headerContent: "", //数据表头部内容
        $headTypeList: { //标题类型列表
            "checkbox": 1
        },
        $typeList: { //列表类型列表
            "checkbox": 1,
            "btn": 2,
            "selectbox": 3
        },
        //内部事件 
        clickAll: _interface, //总的行点击事件
        clickRow: _interface, //行点击事件
        clickHead: _interface, //头点击排序事件
        clickButton: _interface, //按钮
        clickSelectbox: _interface, //选择框自身
        clickSelectboxItem: _interface, //选择框列表点击
        //内部接口
        _trigger: _interface, //内部触发器 
        //渲染html函数
        renderHeader: _interface, //渲染头部
        renderContent: _interface, //渲染内容
        renderBtn: _interface, //渲染按钮内容 
        renderSelectBoxText: _interface, //渲染按钮内容 
        renderStyle: _interface, //渲染样式
        //表格
        isSelected: _interface, //是否选中
        dataHeadType: _interface, //表头类型判断
        datagridType: _interface, //列内容类型判断(含链接判断)
        setRowStateAll: _interface, //设置选中的行
        setRowState: _interface, //设置选中的行
        sortData: _interface, //排序
        //V数据流
        updateSelectedList: _interface, //更新选择项 
        updateSelectboxActiveList: _interface, //更新selectbox展开
        updateAllState: _interface, //更新所有 
        //checkbox 
        selectAll: _interface, //全选
        selectRow: _interface, //选择行 
        setCheckedState: _interface, //设置选中状态
        //data
        clrData: _interface, //清楚表格
        setData: _interface, //设置整个数据源
        ajaxData: _interface, //ajax设置整个数据源
        //selectbox 
        setSelectboxState: _interface, //设置Selectbox开关 
        setSelectboxIndex: _interface, //设置Selectbox选择的index 
        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.data) {
                vmOpts.data = toDatagridData(vmOpts.data, vmOpts.tableConfig);
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //组件用的VM 
            //--------------------------------------------------------------------------
            //自身的VM
            //======= 内部事件 START =======//
            /**doc
             * @description {排序事件 todo 未完成}
             * @param {ev} {动作类型}
             * @param {idx} {点击的列index}
             * @returns {} 
             */
            vm.clickAll = function (ev) {
                //  vm.selectAll();
                // ev.stopPropagation();
            }
            vm.clickRow = function (ev, idx) {
                // vm.selectRow(ev,idx);
                //  ev.stopPropagation(); 
            }
            vm.clickHead = function (ev, head) {
                //非排序字段不能点
                if (!head.dataId) return false;
                //按钮自身逻辑
                //第一次点击改field
                if (head.dataId !== vm.field) {
                    vm.field = head.dataId;
                    vm.trend = 1;
                } else {
                    //第二次点击为改trend
                    vm.trend = vm.trend * -1;
                }
                //CM_SORT
                vm.sortData();
                ev.stopPropagation();
            }
            //按钮事件
            vm.clickButton = function (ev, y, x) {
                if (typeof vm.tableConfig[x].onClick === "function") {
                    //传model
                    vm.tableConfig[x].onClick(vm, vm.data[y], y);
                    ev.stopPropagation();
                }
            };
            //复选框事件
            vm.clickSelectbox = function (ev, y, x) {
                vm.data[y].selectboxActive = !vm.data[y].selectboxActive;
                vm.setSelectboxState(y, vm.data[y].selectboxActive);
                ev.stopPropagation();
            };
            //复选框选择点事件
            vm.clickSelectboxItem = function (ev, y, index, key, value) {
                //选择index
                vm.data[y].selectboxIndex = index;
                //选呢value
                vm.data[y][key] = value;
                console.log(vm.data[y]);
                // vm.setSelectboxIndex(y, index);
                //close box
                vm.setSelectboxState(y, false);
                ev.stopPropagation();
            };
            //======= 内部事件 END =======//
            //======= 内部接口 START =======//
            /**doc
             * @description {事件触发器}
             * @param {ev} {动作类型}
             * @param {type} {事件类型}
             * @returns {} 
             */
            //全选
            vm.selectAll = function (ev) {
                vm.selectedAll = !vm.selectedAll;
                vm.setRowStateAll(vm.selectedAll);
            };
            //选择行;
            vm.selectRow = function (ev, i) {
                vm.data[i].selected = !vm.data[i].selected;
                vm.setRowState(i, vm.data[i].selected);
            };
            //清理表格;
            vm.clrData = function () {
                vm.data = [];
                vm.updateAllState();
                //data.forEach(function (item, i) {
                //    vm.removeRowByID(item.id,'userid');
                //});
            };
            //排序data
            vm.sortData = function () {
                //find排序函数
                //默认排序
                var ori = function (aa, bb) {
                    var result = aa[vm.field] > bb[vm.field] ? 1 : -1
                    return result
                };
                //优先外部排序 
                var heads = vm.tableConfig.filter(function (head, i) {
                    return head.sort
                });
                if (heads[0]) {
                    ori = heads[0].sort;
                }
                //开始排序
                vm.data.sort(function (a, b) {
                    return ori(a, b) * vm.trend;
                })
            }
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "selected":
                        if (typeof vm.onSelected == "function") {
                        //    vm.onSelected(ev, vm);
                        }
                        break;
                    case "changed":
                        if (typeof vm.onChanged == "function") {
                         //   vm.onChanged(ev, vm);
                        }
                        break;
                    default: break;
                }
            }
            /**doc
             * @description {渲染表格头部}
             * @returns {String} {表格头部HTML}
             */
            vm.renderHeader = function () {
                return vm.$headerContent;
            }
            /**doc
             * @description {渲染表格单元格内容}
             * @param {y} {行index}
             * @param {x} {列index}
             * @returns {String} {表格单元格内容HTML}
             */
            vm.renderContent = function (y, x) {
                return vm.data[y][vm.tableConfig[x].dataId];
            }
            /**doc
             * @description {渲染按钮文本}
             * @param {y} {按钮所在行index}
             * @param {x} {按钮所在列index}
             * @returns {String} {按钮文本HTML}
             */
            vm.renderBtn = function (y, x) {
                return vm.tableConfig[x].label;
            }
            /**doc
             * @description {渲染选择框文本}
             * @param {y} {按钮所在行index}
             * @param {x} {按钮所在列index}
             * @returns {String} {按钮文本HTML}
             */
            vm.renderSelectBoxText = function (y, x, opts) {
                //获取box-index
                // var index = vm.selectboxIndexList[y] 
                var index = vm.data[y].selectboxIndex
                //渲染文字
                return index > -1
                           ? opts[index].text
                           : '请选择';
            }
            /**doc
             * @description {渲染表格样式}
             * @returns {String} {样式HTML}
             */
            vm.renderStyle = function () {
                var styleHtml = "";
                vm.name='datagrid'+new Date().getTime()
                if (vm.name) {
                    styleHtml += "<style>";
                    for (var i = 0; i < vm.tableConfig.length; i++) {
                        vm.tableConfig[i].width && (styleHtml += "." + vm.name + " .col-" + i + "{width:" + vm.tableConfig[i].width + "}");
                    }
                    styleHtml += "</style>";
                }
                return styleHtml;
            }
            /**doc
             * @description {判断行是否选中}
             * @param {idx} {要判断的行index}
             * @returns {Boolean} {是否选中}
             */
            vm.isSelected = function (idx) {
                return vm.data[idx].selected;
            }
            /**doc
             * @description {判断数据表格表头类型}
             * @param {x} {要判断的列index}
             * @returns {String} {返回$headTypeList内对应的值 默认 [data:显示文本]}
             */
            vm.dataHeadType = function (x) {
                return vm.$headTypeList[vm.tableConfig[x].type] || "data";
            }
            /**doc
             * @description {判断数据表单元格类型}
             * @param {y} {要判断的行index}
             * @param {x} {要判断的列index}
             * @returns {String||Boolean} {[false:数据] [true:带连接的数据] [数字:$typeList内对应的值]}
             */
            vm.datagridType = function (y, x) {
                var type = vm.$typeList[vm.tableConfig[x].type] || 0;
                if (type !== 0) {
                    return type;
                } else if (vm.tableConfig[x].tdlink && vm.data[y].tdlink) {
                    return true;
                } else {
                    return false;
                }
            }
            /**doc
             * @description { data.*.selected-->selectedList 到视图的单向数据流更新}
             * @returns {} 
             */
            vm.updateSelectedList = function () {
                //可wrap个throttle
                setTimeout(function () {
                    //更新单个 
                    vm.selectedList = [];
                    avalon.each(vm.data, function (i, item) {
                        vm.selectedList[i] = item.selected;
                    });
                    //再更新全选
                    var foo = vm.data.every(function (item) {
                        return item.selected
                    });
                    if (foo) {
                        vm.selectedAll = true;
                    } else {
                        vm.selectedAll = false;
                    }
                }, 0)
            }
            /**doc
            * @description { data.*.SelectboxActive-->SelectboxActiveList 到视图的单向数据流更新}
            * @returns {} 
            */
            vm.updateSelectboxActiveList = function () {
                //可wrap个throttle 
                setTimeout(function () {
                    //更新
                    vm.selectboxActiveList = [];
                    avalon.each(vm.data, function (i, item) {
                        vm.selectboxActiveList[i] = item.selectboxActive;
                    });
                }, 0)
            }
            ///**doc
            //* @description { data.*.SelectboxIndex-->SelectboxIndexList 到视图的单向数据流更新}
            //* @returns {} 
            //*/
            //vm.updateSelectboxIndexList = function () {
            //    //可wrap个throttle 
            //    setTimeout(function () {
            //        //更新
            //        vm.selectboxIndexList = [];
            //        avalon.each(vm.data, function (i, item) { 
            //            console.log(item.selectboxIndex)
            //            vm.selectboxIndexList[i] = item.selectboxIndex;
            //        });
            //    }, 0)
            //}
            /**doc
            * @description { data.*.x-->x 所有的视图的单向数据流更新}
            * @returns {} 
            */
            vm.updateAllState = function () {
                //可wrap个throttle
                vm.updateSelectedList();//select选中
                vm.updateSelectboxActiveList();//selectbox展开
                //  vm.updateSelectboxIndexList();//selectbox 选项
            }
            //======= 内部接口 END =======//
            //======= 外部接口 START =======//
            /**doc
             * @description {获取选择的列}
             * @returns {数组} {返回index数组}
             */
            vm.getSelectedRow = function () {
                //用$model会有bug..没seleted数据的
                var r = vm.data.filter(function (item, i) {
                    return item.selected
                });
                return r;
            } 
            /**doc
             * @description {设置行状态,选中或者不选中}
             * @param {trIdx} {要选中的行index 特殊:[true:全选][false:全不选],此时第二个参数可不传}
             * @param {check} {是否选中 [true:选中][false:不选中]}
             * @returns {vm} {当前调用的vm对象} 
             */
            vm.setRowStateAll = function (checked) {
                if (checked === true) { //全选
                    avalon.each(vm.data, function (i, item) {
                        if (!item.selected) {
                            item.selected = true;
                        }
                    });
                } else if (checked === false) { //全不选
                    avalon.each(vm.data, function (i, item) {
                        if (item.selected) {
                            item.selected = false;
                        }
                    });
                }
                vm.updateAllState();
                return vm;
            };
            vm.setRowState = function (i, state) {
                vm.data[i].selected = state;
                vm.updateAllState();
                return vm;
            }
            /**doc
             * @description  {移除行}
             * @param {trIdx} {要移除的行的行号}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.removeRow = function (y) {
                avalon.Array.removeAt(vm.data, y);
                avalon.Array.removeAt(vm.selectedList, y);
                vm.updateAllState();
                return vm;
            }
            vm.removeRowByID = function (value,id) {
                //获取ID键名 
                var key = id || 'ID';
                var r=vm.data.filter(function (item,i) {
                    return item[key] === value;
                });
                r = r[0];
                if (r) {
                    var y = vm.data.indexOf(r);
                    vm.removeRow(y);
                }
                return vm;
            }
            /**doc
             * @description {插入行}
             * @param { [newData] } {要插入的新行的数据}
             * @param {append} {是否追加[true:追加,添加到末行][不传或者false:则默认插入到首行]}
             * @returns {vm} {当前调用的vm对象} 
             */
            vm.insertRow = function (newData, append) {
                //todo 接受item转为[item]
                vm.setData(newData, false, append);
                return vm;
            }
            /**doc
            * @description {替换行}
            * @param { [newData] } {要替换的新的数据}
            * @returns {vm} {当前调用的vm对象} 
            */
            vm.replaceRow = function (newData) {
                //todo 接受item转为[item]  , | filter实现
                vm.setData(newData, true);
                return vm;
            }
            //设置Selectbox开关
            vm.setSelectboxState = function (i, state) {
                vm.data[i].selectboxActive = state;
                vm.updateAllState();
                return vm;
            };
            vm.setSelectboxIndex = function (i, index) {
                vm.data[i].selectboxIndex = index;
                //  vm.updateAllState();,因为是render(),不用自己更新
                return vm;
            };
            /**doc
            * @description {设置新数据源的通用函数}
            * @param {data} {新数据源}
            * @param {replace} {替换或者新增}
            * @param {append} {如果新曾可以指定头尾}
            * @returns {vm} {当前调用的vm对象} 
            */
            vm.setData = function (data, replace, append) { 
                var newData = toDatagridData(data, vm.tableConfig);
                if (replace) {
                    //替换新数据
                    vm.clrData();
                    vm.data = newData;
                } else {
                    //新增数据
                    avalon.each(newData, function (i, item) {
                        if (append) {
                            //添加到末尾
                            vm.data.push(item);
                        } else {
                            //添加到末尾
                            vm.data.unshift(item);
                        }
                    });
                }
                //整理
                if (vm.field) {
                    vm.sortData();
                }
                vm.updateAllState();
                return vm;
            }
            /**doc
            * @description {ajax获取数据源}
            * @param {} {}
            * @returns {vm} {当前调用的vm对象} 
            */
            vm.ajaxData = function () {
                //data ajax
                var getDataDef = $.Deferred();
                var config = vm.dataGetConfig;
                $.ajax({
                    url: config.url,
                    type: "GET",
                    async: true,
                    complete: function (result) {
                        console.log(result);
                        getDataDef.resolve(result);
                    }
                });
                //获取data更新 
                getDataDef.then(function (r) {
                    //mock ajax 
                    var r2 = []
                    for (var i = 0; i < 20; i++) {
                        var newid=Math.floor( Math.random()*100000 )
                        r2.push(
                            {
                                NewsID: newid,
                                classify: "农业新闻" + i,
                                title: "论VR的重要性",
                                tdlink: "#!/Home/NewDetails",
                                createTime: "2016年3月16日 13:21:42",
                                task: 100002
                            }
                        );
                    }
                    //设置data
                    vm.replaceRow(r2);
                })
            }
            //======= 外部接口 END =======//
            //======= 观测方法 START =======//
            /**
             * @description {数据源更换监听} 
             */
            //vm.$watch("data", function (newVal, oldVal) {
           //     if (newVal) {
            //    }
           // });
            /**
             * @description {item长度监听,即push,removeAt等}
             */
           // vm.$watch("data.length", function (newVal, oldVal) {
                //在push shift后要重新监听 日他哥,这鸡毛通配符就是当时遍历一遍   
                // setTimeout(function () {
                //    vm.updateSelectedList();
                // vm._trigger({ newVal: newVal, oldVal: oldVal }, "length");
                //  }, 50);
           // });
            /**
             * @description {单选监听}
             */
            //vm.$watch("data.*.selected", function (newVal, oldVal) {
                //只监听当前已存在的.. 
                // setTimeout(function () {
                //       vm.updateSelectedList();
                //      vm._trigger({ newVal: newVal, oldVal: oldVal }, "selected");
                //  }, 50);
            //});
            //======= 观测方法 END =======//
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            console.log("ready");
            //外部的一些操作 不知道写哪里  
            //ajax 这个ajax应当属于init(),可以wrap
            if (vm.dataGetConfig) {
                vm.ajaxData();
            }
            //CM_SORT 这个是对应静态数据的sort 跟construct里面的操作分离开了..不知道怎么合并
            if (vm.field) {
                vm.sortData();
            }
        }
    });
    var widget = avalon.components["mc:datagridtest"];
    widget.regionals = {};
});
//=== Js 原生扩展 START ===//
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
//=== Js 原生扩展 END ===//