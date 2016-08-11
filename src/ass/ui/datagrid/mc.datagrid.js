define(["avalon", "text!./mc.datagrid.html", "css!./mc.datagrid.min.css", "mcCheckbox", "mcButton"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:datagrid", {
        //外部参数
        title: "", //数据表名 //del - 有表头slot 代替
        name: null, //样式名 - 防止动态生成的style冲突
        tableConfig: [], //表格配置项 [headTxt - 标题信息][dataId - 绑定列id][width - 列宽][type - 列类型]
        data: [], //数据源
        minWidth: 0, //最小宽度
        sortActive: true, //排序激活项 //todo 实现排序
        //tbody: false,

        dataGridState: 0, //表格状态, [0 - 数据加载中][1 - 有数据(显示数据)][2 - 无数据]

        $checkBoxAllVm: null,
        getCheckBoxAllVm: _interface,
        $childCheckBoxVm: [],
        $CheckBoxBaseIndex: -1,
        getChildCheckBoxVm: _interface,
        $childButtonVm: [],
        $buttonBaseIndex: -1,
        getChildButtonVm: _interface,
        selectAll: _interface,
        selectRow: _interface,
        setSwitch: _interface,
        clickSwitch: _interface,
        setSelect: _interface,
        changeSelect: _interface,
        clickButton: _interface,


        formName: "", //表单setValue使用
        bindSize: "", //跟linearlayout布局大小层绑定的class名

        allHasWidth: true, //每列是否指定了列宽
        otherOffset: 0, //其他外部偏移（跟linearlayout内部包括的relativelayout的padding有关,暂定待修改,relativelayout跟滚动结合）
        scrollContentOffset: 37, //滚动内容偏移值（跟样式有关系）
        extendOffset: 0,

        //外部事件
        onInit: _interface, //初始化接口
        onSelected: null, //行选中事件
        onChanged: null, //改变事件(include 行选中,行取消选中)
        onClickRow: null, //行点击事件（不论是否有复选框,当点击行的时候触发事件）

        //外部接口
        getData: _interface, //获取表格数据
        setData: _interface, //设置表格数据
        getSelectedRow: _interface, //获取选中列
        getSelectedValue: _interface, //获取选中列数据(返回数组)
        setRowState: _interface, //设置指定列的状态
        setRowSelected: _interface, //设置选中的列
        removeRow: _interface, //移除列
        insertRow: _interface, //插入列
        deleteRow: _interface, //删除列

        //内部属性
        isInit: true,
        extend: {},
        selected: [], //选中项
        lindex: -1, //布局中的序号
        $headerContent: "", //数据表头部内容
        $headTypeList: { //标题类型列表
            "checkbox": 1
        },
        $typeList: { //列表类型列表
            "checkbox": 1,
            "btn": 2,
            "img": 3,
            "time": 4,
            "switch": 5,
            "selectbox": 6,
            "icon": 7,
            "html": 8
        },
        $datagridBody: null, //datagrid body 的 jQuery 对象

        //内部事件
        sort: _interface, //排序接口
        clickRow: _interface, //行点击事件

        //内部接口
        _trigger: _interface, //内部触发器
        datagridRendered: _interface,
        hideDataGrid: _interface,
        renderHeader: _interface, //渲染头部
        renderContent: _interface, //渲染内容
        renderHref: _interface, //渲染链接
        renderBtn: _interface, //渲染按钮内容
        renderStyle: _interface, //渲染样式
        isSelected: _interface, //是否选中
        dataHeadType: _interface, //表头类型判断
        datagridType: _interface, //列内容类型判断(含链接判断)
        updateSelected: _interface, //更新选择项
        updateChildVm: _interface, //更新子项vm方法
        removeChildVm: _interface, //移除子项vm方法
        addChildVm: _interface, //添加子项vm
        //表单设置数据接口
        setValue: _interface,

        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            //if (vmOpts.tableConfig != undefined) {
            //    //初始化slot标签页内容用属性
            //    for (var i = 0; i < vmOpts.tableConfig.length; i++) {
            //        hooks['content' + i] = '';
            //    }
            //}

            //根据data设置表格状态
            if (vmOpts.data) {
                if (vmOpts.data.length) {
                    hooks.dataGridState = 1; //有数据
                } else {
                    hooks.dataGridState = 2; //无数据
                }
            } else {
                hooks.dataGridState = 0; //异步加载数据
            }

            //没有设置name的话动态生成一个
            vmOpts.name || elemOpts.name || (hooks.name = McAvalon.util.genId("datagrid"));

            if (vmOpts.data) {
                vmOpts.data = toDatagridData(vmOpts.data, hooks);
                //vmOpts.data = datagridData(vmOpts.data, function () {
                //    hooks.selected.push(false);
                //});
                //avalon.each(vmOpts.data, function (i, val) {
                //    hooks.selected.push(false);
                //    val.selected = false;
                //});
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            vm.$checkBoxAllVm = null,
            //全选按钮vm
            vm.getCheckBoxAllVm = function (_vm, elem) {
                vm.$checkBoxAllVm = _vm;
            },
            vm.$childCheckBoxVm = [],
            vm.$CheckBoxBaseIndex = -1,
            //获得子项checkBox的vm
            vm.getChildCheckBoxVm = function (_vm, elem) {
                //if (vm.$CheckBoxBaseIndex === -1) vm.$CheckBoxBaseIndex = _vm.tdindex;
                //vm.$childCheckBoxVm[_vm.tdindex - vm.$CheckBoxBaseIndex] || vm.$childCheckBoxVm.push(new Array());
                //vm.$childCheckBoxVm[_vm.tdindex - vm.$CheckBoxBaseIndex].push(_vm);
                //todo 修改tableChildVM的存储
                vm.data[_vm.trindex].$tableChildVM.checkboxVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
                    checkboxVM: []
                });
                vm.data[_vm.trindex].$tableChildVM.checkboxVM.push(_vm);
            },
            vm.$childButtonVm = [],
            vm.$buttonBaseIndex = -1,
            //获得子项checkBox的vm
            vm.getChildButtonVm = function (_vm, elem) {
                //if (vm.$buttonBaseIndex === -1) vm.$buttonBaseIndex = _vm.tdindex;
                //vm.$childButtonVm[_vm.tdindex - vm.$buttonBaseIndex] || vm.$childButtonVm.push(new Array());
                //vm.$childButtonVm[_vm.tdindex - vm.$buttonBaseIndex].push(_vm);
                //todo 修改tableChildVM的存储
                vm.data[_vm.trindex].$tableChildVM.ButtonVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
                    ButtonVM: []
                });
                vm.data[_vm.trindex].$tableChildVM.ButtonVM.push(_vm);
                //console.log(vm.data[_vm.trindex].$tableChildVM);
            },
            //全选
            vm.selectAll = function (ev, _vm) {
                if (_vm.isChecked()) { //全选
                    avalon.each(vm.data, function (i, val) {
                        avalon.each(val.$tableChildVM.checkboxVM, function (i, val) {
                            val.setChecked(true);
                        });
                    });
                    vm.setRowState(true);
                } else { //取消全选
                    avalon.each(vm.data, function (i, val) {
                        avalon.each(val.$tableChildVM.checkboxVM, function (i, val) {
                            val.setChecked(false);
                        });
                    });
                    vm.setRowState(false);
                }
            },
            //选择行
            vm.selectRow = function (ev, _vm) {
                if (_vm.isChecked()) { //选中
                    vm.setRowState(_vm.trindex, true);
                } else { //取消选中
                    if (vm.$checkBoxAllVm && vm.$checkBoxAllVm.isChecked()) { //如果全选按钮选中则取消其选择
                        vm.$checkBoxAllVm.setChecked(false);
                    }
                    vm.setRowState(_vm.trindex, false);
                }
            },
            //switch ini
            vm.setSwitch = function (_vm, elem) {
                var trIdx = _vm.trindex;
                var tdIdx = _vm.tdindex;
                var isReadonly = vm.tableConfig[tdIdx].readonly ? true : false;
                //todo 调用renderContent(或者和renderContent调用同一个底层函数,获取数据,传入trIdx和tdIdx)来获得数据
                _vm.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId], isReadonly);
                //todo 修改tableChildVM的存储
                vm.data[_vm.trindex].$tableChildVM.switchVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
                    switchVM: []
                });
                vm.data[_vm.trindex].$tableChildVM.switchVM.push(_vm);
            },
            //click switch
            vm.clickSwitch = function (ev, _vm) {
                if (typeof vm.tableConfig[_vm.tdindex].onClick === "function") {
                    vm.tableConfig[_vm.tdindex].onClick(vm, _vm);
                }
            },
            //selectbox config
            vm.$selectbox_opt = vm.$selectbox_opt,
            //selectbox ini
            vm.setSelect = function (_vm, elem) {
                var trIdx = _vm.trindex;
                var tdIdx = _vm.tdindex;
                var isReadonly = vm.tableConfig[tdIdx].readonly ? true : false;
                var tdSelectboxOpt = vm.tableConfig[tdIdx].$selectbox_opt; //当前列的选择框配置项
                _vm.data = tdSelectboxOpt && tdSelectboxOpt.data;
                //todo 调用renderContent(或者和renderContent调用同一个底层函数,获取数据,传入trIdx和tdIdx)来获得数据
                _vm.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId], isReadonly);
                //todo 修改tableChildVM的存储
                vm.data[_vm.trindex].$tableChildVM.selectboxVM || avalon.mix(vm.data[_vm.trindex].$tableChildVM, {
                    selectboxVM: []
                });
                vm.data[_vm.trindex].$tableChildVM.selectboxVM.push(_vm);
            },
            //change selectbox
            vm.changeSelect = function (ev, _vm) {
                if (typeof vm.tableConfig[_vm.tdindex].onClick === "function") {
                    vm.tableConfig[_vm.tdindex].onClick(vm, _vm);
                }
            },
            //按钮点击事件
            vm.clickButton = function (ev, _vm) {
                if (typeof vm.tableConfig[_vm.tdindex].onClick === "function") {
                    vm.tableConfig[_vm.tdindex].onClick(vm, _vm);
                }
            }

            //vm.datagridRendered = function (action, offset, length) {
            //    vm.tbody = true;
            //},

            //======= 内部事件 START =======//
            /**doc
             * @description {行点击事件}
             * @param {ev} {动作类型动作类型}
             * @param {trIdx} {点击的行index}
             * @returns {}
             */
            vm.clickRow = function (ev, trIdx) {
                //if (vm.data[trIdx].$tableChildVM.checkboxVM && vm.data[trIdx].$tableChildVM.checkboxVM[0]) {
                //    vm.data[trIdx].$tableChildVM.checkboxVM[0].clickCheckbox(ev); //触发当前行复选框点击事件
                //    ev.stopPropagation();
                //}
                vm._trigger(ev, "clickRow", trIdx);
                ev.stopPropagation();
                return vm;
            }
            /**doc
             * @description {排序事件 todo 未完成}
             * @param {ev} {动作类型}
             * @param {idx} {点击的列index}
             * @returns {} 
             */
            vm.sort = function (ev, idx) {
                if (typeof vm.tableConfig[idx].sort == "function") {
                    vm.data.sort(function (a, b) {
                        if (vm.sortActive) {
                            return vm.tableConfig[idx].sort(a, b);
                        } else {
                            return !vm.tableConfig[idx].sort(a, b);
                        }
                    });
                    vm.sortActive = !vm.sortActive;
                    ev.stopPropagation();
                }
            }
            //======= 内部事件 END =======//


            //======= 内部接口 START =======//
            /**doc
             * @description {事件触发器}
             * @param {ev} {动作类型}
             * @param {type} {事件类型}
             * @returns {} 
             */
            vm._trigger = function (ev, type, extend) {
                switch (type) {
                    case "selected":
                        if (typeof vm.onSelected == "function") {
                            vm.onSelected(ev, vm, extend);
                        }
                        break;
                    case "changed":
                        if (typeof vm.onChanged == "function") {
                            vm.onChanged(ev, vm, extend);
                        }
                        break;
                    case "clickRow":
                        if (typeof vm.onClickRow == "function") {
                            vm.onClickRow(ev, vm, extend);
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
             * @param {trIdx} {行index}
             * @param {tdIdx} {列index}
             * @returns {String} {表格单元格内容HTML}
             */
            vm.renderContent = function (trIdx, tdIdx) {
                var V = vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId];
                if (vm.tableConfig[tdIdx].type === "time") {
                    return (V >> 0) * 1000;
                } else if (vm.tableConfig[tdIdx].type === "img") {
                    if (V === null) return ""; //fix图片路径为null时,无法显示为空
                    if (V.indexOf(",") !== -1) {
                        //如果多图取第一张
                        return V.split(",")[0];
                    }
                    return V;
                } {
                    //oriV| filter 
                    if (vm.tableConfig[tdIdx].filter) {
                        V = vm.tableConfig[tdIdx].filter(V);
                    }
                    return V;
                }
                //if (vm['content' + idx] == '') {
                //    return vm.data[outIdx][vm.tableConfig[idx].dataId];
                //} else {
                //    //vm['content' + idx].childNodes[0].setAttribute('index', outIdx);
                //    $(vm['content' + idx].childNodes[0]).find('.' + vm.$tableElem).attr("tindex", outIdx);
                //    return vm['content' + idx].childNodes[0].outerHTML;
                //}
            }
            vm.renderHref = function (trIdx, tdIdx) {
                if (vm.data[trIdx]) {
                    var params = vm.tableConfig[tdIdx].$params;
                    var url = vm.tableConfig[tdIdx].tdlink;
                    if (params && params.length) {
                        url += "?";
                        $.each(params, function (i, val) {
                            if (i !== 0) url += "&";
                            url += val + "=" + vm.data[trIdx][val];
                        });
                    }
                    return url;
                }
            }
            /**doc
             * @description {渲染按钮文本}
             * @param {trIdx} {按钮所在行index}
             * @param {tdIdx} {按钮所在列index}
             * @returns {String} {按钮文本HTML}
             */
            vm.renderBtn = function (trIdx, tdIdx) {
                return vm.tableConfig[tdIdx].label;
            }
            /**doc
             * @description {渲染表格样式}
             * @returns {String} {样式HTML}
             */
            vm.renderStyle = function () {
                var styleHtml = "";
                if (vm.name) {
                    styleHtml += "<style>";
                    var allWidth = 0;
                    vm.allHasWidth = true;
                    for (var i = 0; i < vm.tableConfig.length; i++) {
                        var elWidth = vm.tableConfig[i].width >> 0;
                        if (elWidth) {
                            styleHtml += "." + vm.name + " .col-" + i + "{width:" + elWidth + "px}";
                            allWidth += elWidth;
                        } else {
                            vm.allHasWidth = false;
                        }
                    }
                    styleHtml += "." + vm.name + " .mc-datagrid-scroll-cotar{";
                    if (vm.allHasWidth) {
                        styleHtml += "width:" + allWidth + "px;";
                        vm.extendOffset = 18; //滚动条高度
                    }
                    styleHtml += "min-width:" + (vm.minWidth >> 0) + "px;";
                    styleHtml += "}";
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
             * @param {tdIdx} {要判断的列index}
             * @returns {String} {返回$headTypeList内对应的值 默认 [data:显示文本]}
             */
            vm.dataHeadType = function (tdIdx) {
                return vm.$headTypeList[vm.tableConfig[tdIdx].type] || "data";
            }
            /**doc
             * @description {判断数据表单元格类型}
             * @param {trIdx} {要判断的行index}
             * @param {tdIdx} {要判断的列index}
             * @returns {String||Boolean} {[false:数据] [true:带连接的数据] [数字:$typeList内对应的值]}
             */
            //todo 修改 带外链的数据显示，链接字段不一定是tdlink,要分离
            vm.datagridType = function (trIdx, tdIdx) {
                var type = vm.$typeList[vm.tableConfig[tdIdx].type] || 0;
                if (type !== 0) {
                    return type;
                } else if (vm.tableConfig[tdIdx].tdlink) {
                    return true;
                } else {
                    return false;
                }
            }
            /**doc
             * @description {更新选中项所对应的内部selected数组内容}
             * @param {newVal} {新值 [true:选中][false:未选中][新的selected数组,仅当全部更新时启用]}
             * @param {singleUpdate} {是否单个更新 [true:单个更新][不传或false全部更新]}
             * @param {idx} {要更新的行index}
             * @returns {} 
             */
            vm.updateSelected = function (newVal, singleUpdate, idx) {
                if (singleUpdate) { //单个更新
                    vm.selected.set(idx, newVal);
                } else {
                    vm.selected = newVal;
                }
            }
            /**doc
             * @description {更新数据表内组件的vm (添加行,删除行时)}
             * @param {idx} {要更新的起始行index,包含当前index的行}
             * @param {nbr} {变动值 (新增的行数,或删除的行数)}
             * @param {add} {是否添加 [true:添加][false:删除]}
             * @returns {} 
             */
            vm.updateChildVm = function (idx, nbr, add) {
                for (var i = idx; i < vm.data.length; i++) {
                    avalon.each(vm.data[i].$tableChildVM.checkboxVM, function (i, val) {
                        add ? val.trindex += nbr : val.trindex -= nbr;
                    });
                    avalon.each(vm.data[i].$tableChildVM.ButtonVM, function (i, val) {
                        add ? val.trindex += nbr : val.trindex -= nbr;
                    });
                }
            }
            //vm.updateChildVm = function (target, idx, add) {
            //    avalon.each(target, function (i, val) {
            //        for (var j = idx; j < val.length; j++) {
            //            add ? val[j].trindex++ : val[j].trindex--;
            //        }
            //    });
            //}
            /**doc
             * @description {移除数据表内组件的vm}
             * @param {idx} {移除的行的index}
             * @returns {} 
             */
            vm.removeChildVm = function (idx) {
                //todo 销毁子组件的vm
                vm.updateChildVm(idx + 1, 1);
            }
            //vm.removeChildVm = function (target, idx) {
            //    vm.updateChildVm(target, idx + 1);
            //    avalon.each(target, function (i, val) {
            //        avalon.Array.removeAt(val, idx);
            //    });
            //}
            /**doc
             * @description {添加数据表内组件的vm}
             * @param {nbr} {新增行数}
             * @returns {} 
             */
            vm.addChildVm = function (nbr) {
                vm.updateChildVm(0, nbr, true);
            }
            /**
             * 表单调用接口
             * @param {} val 
             * @returns {} 
             */
            vm.setValue = function (val) {
                vm.setData(val);
            }
            //======= 内部接口 END =======//


            //======= 外部接口 START =======//
            vm.getData = function () {
                return vm.data.$model;
            }
            //vm.hideDataGrid = function () {
            //    vm.tbody = false;
            //    console.log(213);
            //}
            vm.setData = function (data, callback) {
                //判断表格状态
                if (data.length) {
                    vm.dataGridState = 1; //有数据
                } else {
                    vm.dataGridState = 2; //无数据
                }

                //vm.hideDataGrid();
                setTimeout(function() {
                    vm.selected = [];
                    var newData = toDatagridData(data, vm);
                    //todo 优化数据diff
                    var newDataLength = newData.length;
                    var oldDataLength = vm.data.length;
                    var changeDataLength = Math.min(newDataLength, oldDataLength);
                    var i;
                    //替换记录
                    //debugger;
                    for (i = 0; i < changeDataLength; i++) {
                        //vm.data.set(i, newData[i]);
                        //普通数据替换
                        var oldItem = vm.data[i];
                        var newItem = newData[i];
                        for (k in newItem) {
                            if (newItem.hasOwnProperty(k)) {
                                //替换时不对$tableChildVM进行处理,否则会丢失之前的$tableChildVM
                                if (k !== "$tableChildVM") {
                                    //todo 优化赋值,进行diff处理,首先测试avalon框架是否有做diff优化处理
                                    oldItem[k] = newItem[k];
                                }
                            }
                        }
                        //特殊类型值变化（switch，selectbox）
                        var itemTableChildVM = oldItem.$tableChildVM;
                        //switch
                        itemTableChildVM.switchVM && $.each(itemTableChildVM.switchVM, function(i, val) {
                            //todo 调用内部的子组件内部的update方法去更新数据,先手动传
                            var trIdx = val.trindex;
                            var tdIdx = val.tdindex;
                            val.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId]);
                        });
                        //selectbox
                        itemTableChildVM.selectboxVM && $.each(itemTableChildVM.selectboxVM, function(i, val) {
                            //todo 调用内部的子组件内部的update方法去更新数据,先手动传
                            var trIdx = val.trindex;
                            var tdIdx = val.tdindex;
                            val.setValue(vm.data[trIdx] && vm.data[trIdx][vm.tableConfig[tdIdx].dataId]);
                        });
                    }
                    if (newDataLength > oldDataLength) {
                        //增加记录条数
                        //console.time("add");
                        vm.data.pushArray(newData.slice(oldDataLength, newDataLength));
                        //console.timeEnd("add");
                        //for (i = oldDataLength; i < newDataLength; i++) {
                        //    vm.data.set(i, newData[i]);
                        //    //vm.data.push(newData[i]);
                        //}
                    } else {
                        //减少记录条数
                        //console.time("remove");
                        vm.data.splice(newDataLength, oldDataLength);
                        //console.timeEnd("remove");
                        //for (i = newDataLength; i < oldDataLength; i++) {
                        //    avalon.Array.removeAt(vm.data, newDataLength);
                        //}
                    }
                    typeof callback === "function" && callback.call(this, vm);
                    //vm.data = newData;
                    //表格滚回顶部
                    //vm.$datagridBody.animate({ scrollTop: 0 }, 500);
                    vm.$datagridBody.scrollTop(0);
                }, 300);
            }
            /**doc
             * @description {获取选择的列}
             * @returns {数组} {返回index数组}
             */
            vm.getSelectedRow = function () {
                var s = [];
                avalon.each(vm.data, function (i, val) {
                    val.selected && s.push(i);
                });
                return s;
            }
            /**doc
             * @description {获取选择的列的值}
             * @returns {数组} {返回数据对象数组}
             */
            vm.getSelectedValue = function () {
                var d = [];
                avalon.each(vm.data, function (i, val) {
                    val.selected && d.push(val.$model);
                });
                return d;
            }
            /**doc
             * @description {设置行状态,选中或者不选中}
             * @param {trIdx} {要选中的行index 特殊:[true:全选][false:全不选],此时第二个参数可不传}
             * @param {check} {是否选中 [true:选中][false:不选中]}
             * @returns {vm} {当前调用的vm对象} 
             */
            vm.setRowState = function (trIdx, check) {
                var t = [];
                if (trIdx === true) { //全选
                    avalon.each(vm.data, function (i, val) {
                        if (!val.selected) {
                            //var t = deepCopy(val);
                            //t.selected = true;
                            val.selected = true;
                            //vm.selected.set(i, true);
                        }
                        t.push(true);
                    });
                    vm.updateSelected(t);
                } else if (trIdx === false) { //全不选
                    avalon.each(vm.data, function (i, val) {
                        if (val.selected) {
                            val.selected = false;
                            //vm.selected.set(i, false);
                        }
                        t.push(false);
                        //val.selected && (val.selected = false);
                    });
                    vm.updateSelected(t);
                } else { //单选
                    if (check) {
                        t = true;
                        vm.data[trIdx].selected = true;
                    } else {
                        t = false;
                        vm.data[trIdx].selected = false;
                    }
                    vm.updateSelected(t, true, trIdx);
                }
                return vm;
            }
            /**
             * 设置选中的列
             * @param {} selectedArr 
             * @returns {} 
             */
            vm.setRowSelected = function (selectedArr) {
                avalon.each(vm.data, function (i, val) {
                    avalon.each(val.$tableChildVM.checkboxVM, function (i, val) {
                        val.setChecked(false);
                    });
                });
                vm.setRowState(false);
                for (var i = 0; i < selectedArr.length; i++) {
                    if (vm.data[selectedArr[i]]) {
                        avalon.each(vm.data[selectedArr[i]].$tableChildVM.checkboxVM, function (i, val) {
                            val.setChecked(true);
                        });
                        vm.setRowState(selectedArr[i], true);
                    }
                }
            }
            /**doc
             * @description  {移除行}
             * @param {trIdx} {要移除的行的行号}
             * @returns {vm} {当前调用的vm对象}
             */
            vm.removeRow = function (trIdx) {
                //todo 取消全选按钮选中状态
                vm.removeChildVm(trIdx);
                avalon.Array.removeAt(vm.data, trIdx);
                //vm.$childButtonVm[trIdx].$dispose();
                //vm.removeChildVm(vm.$childCheckBoxVm, trIdx);
                //vm.removeChildVm(vm.$childButtonVm, trIdx);
                avalon.Array.removeAt(vm.selected, trIdx);
                //console.log(vm.$childButtonVm);
                //console.log(vm.selected);
                return vm;
            }
            /**doc
             * @description {插入行}
             * @param {newData} {要插入的新行的数据}
             * @param {append} {是否追加[true:追加,添加到末行][不传或者false:则默认插入到首行]}
             * @returns {vm} {当前调用的vm对象} 
             */
            vm.insertRow = function (newData, append) {
                newData = toDatagridData(newData); //转换为表格数据
                //todo 取消全选按钮选中状态
                if (append) { //添加到末尾
                    avalon.each(newData, function (i, val) {
                        vm.data.push(val);
                        vm.selected.push(false);
                    });
                } else { //添加到首行
                    avalon.each(newData, function (i, val) {
                        vm.data.unshift(val);
                        vm.selected.unshift(false);
                    });
                    vm.addChildVm(newData.length);
                    //vm.addChildVm(vm.$childCheckBoxVm);
                    //vm.addChildVm(vm.$childButtonVm);
                }
                return vm;
            }
            /**doc
             * @description {删除行}
             * @param {newData} {删除行后需要追加的新数据}
             * @param {trIdx} {要删除的行的index}
             * @returns {vm} {当前调用的vm对象} 
             */
            vm.deleteRow = function (newData, trIdx) {
                vm.removeRow(trIdx);
                vm.insertRow(newData, true);
                return vm;
            }
            //======= 外部接口 END =======//


            //======= 观测方法 START =======//
            /**
             * @description {数据源更换监听} 
             */
            vm.$watch("data", function (newVal, oldVal) {
                if (newVal) {
                    //var _this = this;
                    //datagridData(newVal, function () {
                    //    _this.selected.push(false);
                    //});
                    //avalon.each(newVal, function (i, val) {
                    //    _this.selected.push(false);
                    //    val.selected = false;
                    //});
                }
            });
            /**
             * @description {全选监听}
             */
            vm.$watch("selected", function (newVal, oldVal) {
                vm._trigger({ newVal: newVal, oldVal: oldVal }, "selected");
            });
            /**
             * @description {单选监听}
             */
            vm.$watch("selected.*", function (newVal, oldVal) {
                //等待vm.selected对象改变,延迟50毫秒触发回调 - 可能有BUG
                setTimeout(function () {
                    vm._trigger({ newVal: newVal, oldVal: oldVal }, "selected");
                }, 50);
            });
            //vm.$watch('active', function (newVal, oldVal) {
            //    if (newVal == -1 || oldVal == -1) return;
            //    vm._trigger({ newVal: newVal, oldVal: oldVal }, 'changed');
            //    if (typeof vm.panels[newVal].fun == 'function') {
            //        vm.panels[newVal].fun({ newVal: newVal, oldVal: oldVal }, vm);
            //    }
            //});
            //======= 观测方法 END =======//

        },
        $ready: function (vm, elem) {
            vm.$datagridBody = $(elem).find(".mc-tbody");
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            //if (typeof vm.panels[vm.active].fun == 'function') {
            //    vm.panels[vm.active].fun({}, vm);
            //}
            //注册布局大小变动事件
            McAvalon.$window.on("layout_resize", function (event, layoutSizeObj) {
                if (layoutSizeObj["mc_li" + vm.bindSize]) {
                    var vmHeight = layoutSizeObj["mc_li" + vm.bindSize].height;
                    var vmWidth = layoutSizeObj["mc_li" + vm.bindSize].width;
                    //宽度小于最小宽度时高度减去滚动条区域,每列指定了列宽则必定横向滚动条
                    //todo 每列指定了列宽的时候自动生成最小宽度
                    if (vm.allHasWidth || vmWidth < vm.minWidth) {
                        vm.extendOffset = 18;
                    } else {
                        vm.extendOffset = 0;
                    }
                    vm.$datagridBody.css("height", vmHeight - vm.otherOffset - vm.scrollContentOffset - vm.extendOffset);
                }
            });
            //触发布局初始化事件
            McAvalon.$window.trigger("layout_ini");
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:datagrid"];
    widget.regionals = {};

});