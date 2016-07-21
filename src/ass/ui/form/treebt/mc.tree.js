
//todata expand checked semiChecked wait children 
toTreeData = function (data, dynamic, impData, idName, pidName, isLeafName, disableImp, disableNonImp, disableLeaf, patTrace, _vm) {
    //has checked data 
    if (impData && impData.length) {
        data.forEach(function (oriItem) {
            var compObj = {};
            compObj[idName] = oriItem[idName]
            var r = _.findWhere(impData, compObj);
            //找到 选中原来 移除这个
            if (r) {
                oriItem.checked = true;
                if (disableImp) {
                    oriItem.disabled = true;
                }
                //index 
                var rI = impData.indexOf(r);
                impData.splice(rI, 1);
            } else {
                //只减不增
                //todo 忘记加ori disable什么用了= =
                if (disableNonImp) {
                    oriItem.disabled = true;
                }
            }
        })
    }


    var result = [];
    //has checked end
    avalon.each(data, function (i, item) {
        if (_vm.onPushStart && _vm.onPushStart(item) === false) {
            //avalon.Array.remove(data, item);
            return true;
        } else {
            result.push(item);
        }
        item.expand = item.expand || false;
        item.checked = item.checked || false;
        item.disabled = item.disabled || false;
        item.active = false;//点击后生效,对于所有节点可选且单选很有用
        item.semiChecked = false;
        //trace,全路径 
        patTrace = patTrace || [];
        var _trace = _.clone(patTrace);
        _trace.push(item[idName]);
        item.$trace = _trace;
        //disable 只增 只减
        if (disableImp && item.checked) {
            item.disabled = true;
        }
        if (disableNonImp && !item.checked) {
            item.disabled = true;
        }



        //IsLeaf

        item.wait = item.wait || dynamic;
        if (isLeafName) {
            item.wait = !item[isLeafName];
            //disable isleaf 
            if (disableLeaf && item[isLeafName]) item.disabled = true;
        }
        item.children = item.children || [];
        //递归赋值 
        if (item.children.length) {
            item.children = toTreeData(item.children, dynamic, impData, idName, pidName, isLeafName, disableImp, disableNonImp, disableLeaf, item.$trace, _vm);
        }
        //item.checked = item.checked || false;
    });
    return result;
};
 
//todo imp data,是未来展开,但已勾选的数据,只有bt模式下才有可能操作,(由于其勾选的特性可得知)..
//正常下除非是个全展开树,不过也就没imp的说法了..可以改名叫originData
define(['avalon', 'text!./mc.tree.html', 'css!./mc.tree.min.css','mcButton'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:treebt", {
        //buildin 相关
        $btn_opt: {},
        //外部参数
        data: [],//数据源 [text,id,checked,key] 
        textName: '',
        hasCheckbox: true,//是否有选择功能
        dynamic: true, //动态请求 
        clickEveryWhere: true,
        hideVir:false,
        //autoExpandFirst: false,  自展开 自行调用showItem
        //pre disable
        //todo lazy calc,要多加属性有点问题
        ajaxConfig: {},
        disableImp: false,
        disableNonImp: false,
        disableLeaf: false,//必须isleaf存在
        bt: true,
        barSelectMode: false, //单行选择模式,即点击单行跟点击checkbox相同,必定有checkbox,没有按钮,只有clickCheckbox事件,无foldClick事件
        isLR: false,
        notUpdate:false,
        idName: 'id',
        pidName: 'pid',
        virtualId: '',//虚拟顶部ID 
        virtualText: '全部',
        virtualClick: true,
        disableId:"",
        extraData:null,
        isLeafName: '',//默认无 自己指定,就有直接判断叶子功能
        hasButton: false,
        autoShow: null,
        //外部事件
        onInit: _interface, //初始化接口 
        onChecked: _interface, //选中
        onUnChecked: _interface, //选中
        onLeafClick: _interface, //叶子节点被点击
        onEveryClick: _interface, //叶子,父,所有节点被点击
        onDataChange: _interface, //ajax请求时返回data 
        onPushStart: _interface, //数据加入前
        onPushEnd: _interface, //数据加入后  都可return掉不加入
        //外部接口 
        setSelectById: _interface, //设置选中项  
        setUnCheckedById: _interface, //设置选中项  
        getSelect: _interface, //get选中项  
        initSelect: _interface, //clr选中项 
        initExpand: _interface, //clr展开
        initTree: _interface, //init
        showItem: _interface, //打开N层  
        getCheckedLeafData: _interface, //todo 获取叶子选中 
        setData: _interface,//
        getCheckedData: _interface,//获取选中数据.一维数组
        getImpCheckedData: _interface,//
        getAllCheckedData: _interface,//
        getDiffData: _interface,//
        disableRecById: _interface,// 禁用某节点以下
        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        impData: [],
        oriImpData: [],
        cacheData: null,
        $skipArray: ['impData', 'ajaxConfig', 'oriImpData', 'cacheData', 'extraData'],
        $tmpR: [],
        disableRecId: null,//禁用点击到自身及其以下
        tmpActive: {},
        //内部事件 
        clickCheckbox: _interface, //选中
        foldClick: _interface, //展开
        //内部接口
        _trigger: _interface, //内部触发器
        fold: _interface, //折叠
        unfold: _interface, //展开
        _fold: _interface, // 折叠或展开
        toggleFold: _interface, // 折叠或展开
        isLeaf: _interface, //是否叶子
        isSame: _interface,//比较函数,todo 配置
        _active: _interface,//比较函数,todo 配置
        hasCheckedChildren: _interface,//
        hasUncheckedChildren: _interface,//
        hasSemiCheckedChildren: _interface,//
        isSemiChecked: _interface,//
        _updateParents: _interface,//
        updateChecked: _interface,//
        _check: _interface,//
        _find: _interface,//
        find: _interface,//
        hasChildren: _interface,//
        uncheckImp: _interface,//
        setImpData: _interface,//
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.data) {
                if (typeof (vmOpts.data) === 'function') {
                    vmOpts.data = vmOpts.data();
                }
                vmOpts.data = toTreeData(vmOpts.data, vmOpts.dynamic, vmOpts.impData, vmOpts.idName,
                    vmOpts.pidName, vmOpts.isLeafName, vmOpts.disableImp, vmOpts.disableNonImp, vmOpts.disableLeaf, [], vmOpts);
            }
            //if (vmOpts.$btn_opt && vmOpts.$btn_opt.onClick) {
            //    //wrap 
            //    $btn_opt.onClick
            //}
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象 
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //内部事件
            vm.clickCheckbox = function (ev, item) {
                //禁用通常只禁用用户操作,不禁用API
                if (vm.disableId && (item[vm.idName] === vm.disableId)) {
                    return false;
                } 
                if (item.disabled) return false;
                //事件,true菜触发 
                if (!item.checked) {
                    vm._trigger({ target: item.$model }, 'checked')
                } else {
                    vm._trigger({ target: item.$model }, 'unchecked')
                }
                vm._check(item, !item.checked);
            }
            vm.foldClick = function (ev, item, targetType) {
                //todo click def
                var foldDef = $.Deferred();
                //2种交互 点文字,都可选 ,即所有节点都可选择
                if (item.wait !== 0) {
                    if (targetType === 'text' && vm.clickEveryWhere) {
                        //虚拟 不可点击,选择
                        if (!vm.virtualClick && vm.virtualId && (item[vm.idName] === vm.virtualId)) {
                            // return false;
                        }
                            //禁用某个ID
                        else if (vm.disableId && (item[vm.idName] === vm.disableId)) {
                         
                        }
                        else {
                            //单选模式,点文字
                            //禁用移动到自身目录,文件夹移动有用
                            if (vm.disableRecId) {
                                if (item.$trace.indexOf(vm.disableRecId) > -1) {
                                    alert('禁用移动到自身目录');
                                    return false;
                                }
                            }
                            if (!item.disabled)
                                vm._active(item);
                        }

                    } else {
                        //非单选,或者点的是图标 
                        if (!vm.isLeaf(item)) {
                            vm.toggleFold(item);
                        } else {
                            //叶子节点被点击
                            vm._trigger({ target: item.$model }, 'leaf');
                        }
                    }
                }
                return foldDef;
            }
            //内部接口
            //一波折叠..
            vm.fold = function (item) {
                vm._fold(item, false);
            }
            vm._fold = function (item, state) {
                item.expand = state;
            };

            vm.unfold = function (item, silence) {
                var def = $.Deferred();
                var dataDef = $.Deferred();
                if (item.wait) {
                    item.wait = 0;
                    //ajax获取数据 
                    var ppp = { All: 1 };
                    ppp[vm.ajaxConfig.key] = item[vm.idName];
                    //额外参数

                    ppp = $.extend(true, ppp, vm.ajaxConfig.extra);

                    Mc.Ajax({
                        url: vm.ajaxConfig.url,
                        data: ppp,
                        success: function (r) {
                            //fix pid
                            if (vm.isLR) {
                                r.data.forEach(function (_item) {
                                    _item[vm.pidName] = item[vm.idName];
                                });
                            }
                            if (r.data && r.data.length) {
                                var data = toTreeData(r.data, vm.dynamic, vm.impData, vm.idName, vm.pidName, vm.isLeafName, vm.disableImp, vm.disableNonImp, vm.disableLeaf, item.$trace,  vm );
                            }
                            //如果有数据
                            if (data && data.length) {
                                //插入
                                item.children.pushArray(data);
                                //自动更新所有上级的状态
                                vm._updateParents(vm.data, item.children[0]);
                                vm._trigger('data');
                                //extra 
                                if (vm.extraData && item[vm.idName] === vm.virtualId) {
                                    var extra = toTreeData(vm.extraData, vm.dynamic, vm.impData, vm.idName, vm.pidName, vm.isLeafName, vm.disableImp, vm.disableNonImp, vm.disableLeaf, item.$trace, vm);
                                    item.children.pushArray(extra); 
                                }


                            } else {
                                //没数据
                                //vm.fold(item);
                            }
                            item.wait = false;
                            dataDef.resolve();
                        }
                    });
                } else if (item.wait === false) {
                    dataDef.resolve();
                }
                //数据加载后
                dataDef.then(function () {
                    if (!silence) {
                        vm._fold(item, true);
                    }
                    def.resolve();
                })
                return def;
            }
            vm.toggleFold = function (item) {
                var exp = !item.expand; 
                if (exp) {
                    vm.unfold(item)
                } else {
                    vm.fold(item)
                }
            }
            vm._trigger = function (ev, type) {
                switch (type) {

                    case "beforeEvery":
                        if (typeof vm.onBeforeEveryClick == "function") {
                            return vm.onBeforeEveryClick(ev.target, vm) !== false ? true : false;
                        }
                        break;

                    case "data":
                        if (typeof vm.onDataChange == "function") {
                            vm.onDataChange(vm.r);
                        }
                        break;
                    case "leaf":
                        if (typeof vm.onLeafClick == "function") {
                            vm.onLeafClick(ev.target, vm);
                        }
                        break;
                    case "every":
                        if (typeof vm.onEveryClick == "function") {
                            vm.onEveryClick(ev.target, vm);
                        }
                        break;
                    case "checked":
                        if (typeof vm.onChecked == "function") {
                            vm.onChecked(ev.target);
                        }
                        break;
                    case "unchecked":
                        if (typeof vm.onUnChecked == "function") {
                            vm.onUnChecked(ev.target);
                        }
                        break;
                    default: break;
                }
                return true;
            }
            vm.isLeaf = function (item) {
                if (vm.isLeafName) {
                    return !!item[vm.isLeafName];
                }
                if (item.wait) return false;
                return !item.children || !item.children.length;
            }
            vm.isSame = function (item1, item2) {
                return item1[vm.idName] == item2[vm.idName];
            };
            vm._active = function (item) {
                if (vm._trigger({ target: item.$model }, 'beforeEvery')) {
                    //激活 
                    //由于单选 直接可操作tmp item,更加简洁
                    if (vm.tmpActive.active) vm.tmpActive.active = false;
                    item.active = true;
                    vm.tmpActive = item;
                    //every
                    if (!vm.isLeaf(item)) {
                        //vm.toggleFold(item); 不收缩,当做点击项
                        vm._trigger({ target: item.$model }, 'every');
                    } else {
                        //叶子节点被点击
                        vm._trigger({ target: item.$model }, 'leaf');
                        vm._trigger({ target: item.$model }, 'every');
                    }
                }
            };
            //未定义
            /**
            * 递归检查指定节点是否有选中状态的子节点，不检查当前节点状态
            * @param item {Object} 起始节点
            * @return {boolean}
            */
            vm.hasCheckedChildren = function (item) {
                return !!_.find(item.children, function (subItem) {
                    return subItem.checked || vm.hasCheckedChildren(subItem);
                });
            };
            /**
             * 递归检查指定节点是否有未选中状态的子节点，不检查当前节点状态
             * @param item {Object} 起始节点
             * @return {boolean}
             */
            vm.hasUncheckedChildren = function (item) {
                return !!_.find(item.children, function (subItem) {
                    return !subItem.checked || vm.hasUncheckedChildren(subItem);
                });
            };
            /**
             * 指定节点是否半选状态，但不检查当前节点。即：既有被选中的子节点，也有未选中的子节点
             * @param item {Object} 起始节点
             * @return {boolean}
             */
            vm.hasSemiCheckedChildren = function (item) {
                return vm.hasCheckedChildren(item) && vm.hasUncheckedChildren(item);
            };
            //alias
            vm.isSemiChecked = vm.hasSemiCheckedChildren;
            /**
             * 更新item的父级节点，重新检查它们的checked和semiChecked状态
             * @param items
             * @param item
             * @private
             */
            vm._updateParents = function (items, item) {
                if (vm.notUpdate) return false;
                if (vm.bt) return false;
                if (!vm.hasCheckbox) return false;
                avalon.each(items, function (i, subItem) {
                    //找到所属root下一级
                    if (vm.hasChildren(subItem, item)) {
                        // 先要递归更新子级，否则中间节点的状态可能仍然处于选中状态，会影响当前节点的判断
                        vm._updateParents(subItem.children, item);
                        subItem.checked = vm.hasCheckedChildren(subItem);
                        //半选中 todo,checked和semi可同时有,但样式semi优先
                        subItem.semiChecked = vm.isSemiChecked(subItem);
                    }
                });
            };
            //待用 
            vm.updateChecked = function (item) {
                vm._updateParents(vm.data, item);
            };
            //级联取消imp 从上往下
            vm.uncheckImp = function (item) {
                if (vm.impData.length) {
                    var childItem = _.find(vm.impData, function (impItem) {
                        return impItem[vm.pidName] == item[vm.idName]
                    });
                    if (childItem) {
                        //imp内级联
                        vm.uncheckImp(childItem);
                        var rIndex = vm.impData.indexOf(childItem);
                        vm.impData.splice(rIndex, 1)
                    }

                }
            },
            //返回checked data
            //todo $tmpR 去掉 
            vm.getCheckedData = function (items) {

                if (!items) {
                    items = vm.data.$model;
                    vm.$tmpR = [];
                }

                _.each(items, function (item) {
                    //递归子集
                    if (item.children && item.children.length) {
                        vm.getCheckedData(item.children)
                    }
                    if (item.checked) {
                        vm.$tmpR.push(item);
                    }
                })
                return vm.$tmpR;
            };
            //返回imp checked data
            vm.getImpCheckedData = function () {
                return vm.impData;
            };
            //返回imp 和 data全部选中的数据
            vm.getAllCheckedData = function () {
                var checkedData = vm.getCheckedData();
                var impCheckedData = vm.getImpCheckedData();
                var all = _.flatten([impCheckedData, checkedData], true);
                ////取ID
                //all=all.map(function (item) {
                //    return item[vm.idName];
                //})
                var allReal = []
                //去虚拟root
                if (vm.virtualId) {
                    allReal = _.filter(all, function (item) {
                        return item[vm.idName] !== vm.virtualId
                    });

                } else {
                    allReal = all;
                }

                return allReal;
            };
            //获取加减的数据 diff=[ [],[] ]
            vm.getDiffData = function () {
                var allCheckedData = vm.getAllCheckedData();

                //diff
                //直接diff[0]处,2次diff就可以了 
                var diff = [[], []];

                //先获取id
                var oriLeftPure = allCheckedData.map(function (item) {
                    return item[vm.idName];
                });
                var rLeftPure = vm.oriImpData.map(function (item) {
                    return item[vm.idName];
                });
                //id比较
                var tl = _.difference(oriLeftPure, rLeftPure);
                var tr = _.difference(rLeftPure, oriLeftPure);
                //根据结果id找回item
                tl.forEach(function (t) {
                    var r = _.find(allCheckedData, function (oriItem) {
                        return oriItem[vm.idName] === t
                    })
                    r ? diff[1].push(r)
                    : 0
                })
                tr.forEach(function (t) {
                    var r = _.find(vm.oriImpData, function (oriItem) {
                        return oriItem[vm.idName] === t
                    })
                    r ? diff[0].push(r)
                    : 0
                })
                return diff
            }
            vm._check = function (item, checked) {
                item.checked = checked;
                if (vm.bt) {
                    // 把当前节点的选中状态应用到所有下级,,,bt版本 只有全选 取消功能,并且狂级联取消imp一发
                    //要cancel imp:  非叶子 and  child为0,  :就是like叶子节点的父节点
                    if (!checked) {
                        //imp test
                        if ((!vm.isLeaf(item)) && item.children.length === 0) {
                            vm.uncheckImp(item);
                        }
                        //imp end
                        avalon.each(item.children, function (i, subItem) {
                            vm._check(subItem, false);
                        });
                    } else {
                        //选中 一路上到父,用outer实现
                        //outer找不到 直接找
                        //如果有父属性
                        //判非空,0,字符串都可以
                        if (item[vm.pidName]) {
                            var toFindTarget = {};
                            toFindTarget[vm.idName] = item[vm.pidName]

                            var pat = vm.find(toFindTarget);
                            if (pat && (!pat.checked)) {
                                vm._check(pat, true)
                            }
                        }
                    }
                } else {
                    // 把当前节点的选中状态应用到所有下级
                    if (!vm.notUpdate) {
                        avalon.each(item.children, function (i, subItem) {
                            vm._check(subItem, checked);
                        });
                        // 自动更新所有上级的状态
                        vm._updateParents(vm.data, item);
                    }
                }
            };
            vm._find = function (items, item) {
                if (!items)
                    return null;
                // 在子节点中查找
                for (var i = 0; i < items.length; ++i) {
                    var subItem = items[i];
                    // 如果找到了则直接返回
                    if (vm.isSame(subItem, item))
                        return subItem;
                    // 否则递归查找
                    var subResult = vm._find(subItem.children, item);
                    if (subResult)
                        return subResult;
                }
                return null;
            };
            /**
             * 查找指定的节点，会使用cbIsSame参数
             * @param item
             * @returns {Object}
             */
            vm.find = function (item) {
                return vm._find(vm.data, item);
            };
            /**
             * parent及其子节点中有没有指定的subItem节点
             * @param parent {Object}
             * @param subItem {Object|Array}
             * @returns {boolean}
             */
            vm.hasChildren = function (parent, subItem) {
                //wrap items
                //toString.call(subItem) === '[object Array]'
                var subItems = subItem.length >= 0 ? subItem : [subItem];
                return !!_.find(subItems, function (subItem) {
                    return vm._find(parent.children, subItem);
                });
            };
            //外部事件 
            //外部接口 
            vm.disableRecById = function (id) {
                vm.disableRecById = id;
            };
            vm.setSelectById = function (id) {
                var toTarget = {};
                toTarget[vm.idName] = id;
                var r = vm.find(toTarget)
                if (r)
                    vm._active(r)
            };
            vm.setUnCheckedById = function (id) {
                var toTarget = {};
                toTarget[vm.idName] = id;
                var r = vm.find(toTarget)
                if (r)
                    r.checked = false;
                    //vm._active(r)
            };
            vm.getSelect = function () {
                if (vm.tmpActive.active) {
                    return { text: vm.tmpActive.$model[vm.textName], val: vm.tmpActive.$model[vm.idName], trace: vm.tmpActive.$trace }
                } else {
                    return null;
                }

            };
            vm.initSelect = function () {
                if (!vm.hasCheckbox)
                    vm.tmpActive.active = false;
                else {
                    //todo clr checked
                }
            };
            vm.initExpand = function () {
                var _initExpand = function (data) {
                    data.forEach(function (item) {
                        vm.fold(item);
                        if (item.children.length) {
                            _initExpand(item.children)
                        }
                    });
                   
                };
                _initExpand(vm.data);
            };
            vm.initTree = function () {
                vm.initExpand();
                vm.initSelect();
            };
            vm.setData = function (data, impData) {
                if (impData) {
                    vm.setImpData(impData);
                }
                if (!data) {
                    var vRootItem = {}
                    vRootItem[vm.idName] = vm.virtualId;
                    vRootItem[vm.textName] = vm.virtualText;
                    vRootItem.wait = true;
                    vRootItem.$trace = [];
                    if (vm.isLeafName) {
                        vRootItem[vm.isLeafName] = 0;
                    }
                    data = [vRootItem];
                }
                vm.data = toTreeData(data, vm.dynamic, vm.impData, vm.idName, vm.pidName,
                    vm.isLeafName, vm.disableImp, vm.disableNonImp, vm.disableLeaf, [], vm);
                if (vm.autoExpandFirst) {
                    _.each(vm.data, function (item) {
                        vm.foldClick({}, item, 'icon')
                    })
                }
                return vm;
            };
            vm.setImpData = function (impData) {
                //保存 以DIFF,但不要保存V
                vm.oriImpData = impData.map(function (item) {
                    return _.clone(item);
                })
                //然后加V
                if (impData.length) {
                    //imp有length可知有 v root
                    var vRootItem = {}
                    vRootItem[vm.idName] = vm.virtualId;
                    vRootItem[vm.textName] = vm.virtualText;
                    if (vm.isLeafName) {
                        vRootItem[vm.isLeafName] = 0;
                    }
                    impData.push(vRootItem)
                }
                vm.impData = impData;
            };
            //展开n层
            vm.showItem = function (items, n, opt) {
                if (n < 1) { return false; }
                items = items || vm.data;
                items = _.isArray(items) ? items : [items];
                _.each(items, function (item) {
                    if (opt.force) {
                        //强制刷新  
                        var couldRef = false;
                        //直接以字段判断的特殊情况
                        if (vm.isLeafName) {
                            if (!item[vm.isLeafName]) {
                                couldRef = true;
                            }
                        } else {
                            couldRef = true;
                        }
                        if (couldRef) {
                            item.wait = true;
                            item.children = [];
                            //vm.fold(item);
                        }
                    }
                    vm.unfold(item, opt.silence).then(function () {
                        if (item.children.length) {
                            //展开后有数据
                            vm.showItem(item.children, --n, opt);
                        }
                    })
                })
            }
            //BUG 这一层之上必须存在,也不能说是BUG..
            vm.showItemById = function (id, n, opt) {
                var p = {};
                p[vm.idName] = id;
                var item = vm.find(p);
                if (item)
                    vm.showItem(item, n, opt);
            }
            //展开所有
            vm.showAllItem = function (items, opt) {
                vm.showItem(null, 100, opt);
            }
            //观测方法
            //注意:ms-duplex与ms-input不能用在同一元素上。用watch..
            //   vm.$watch('data', function (newV, oldV) {

            // });
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            console.log('ready  tree');
            vm.isInit = false;
            //传入数据需要更新..    
            if (vm.autoShow) {
                var opt = {
                    force: vm.autoShow.force,
                    silence: vm.autoShow.silence,
                };
                if (vm.autoShow.n)
                    vm.setData(null).showItem(null, vm.autoShow.n, opt);
                else
                    vm.setData(null).showAllItem(null, opt);
            }
        }
    });

    var widget = avalon.components["mc:treebt"];
    widget.regionals = {};
})