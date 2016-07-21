
//todata
toListAddData = function (data, cullOrigin) {
    var r = [];
    avalon.each(data, function (i, item) {
        item.selected = false;
        item.checked = item.checked || false;
        if (cullOrigin) {
            if (!item.checked) {
                r.push(item);
            }
        } else {
            r.push(item);
        }

    });

    return r;
};
//todo 搜索只有indexof,全拼音后台没给 这也没做
define(['avalon', 'text!./mc.listDataAdd.html', 'css!./mc.listDataAdd.min.css', 'mcButton', 'underscore'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:listdataadd", {
        //外部参数
        data: [],//数据源 [text,id,checked,key] todo-->inside
        dataConfirmConfig: null,//提交参数
        ajax: false,//内置ajax开罐
        idName: "id",//id name
        textName: "text",//显示 name
        keyName: "key", //key name 
        cullOrigin: false,
        //外部事件
        onInit: _interface, //初始化接口
        onDataChange: _interface, //数据改变
        //外部接口 
        setData: _interface, //设置数据源
        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        allLen: { left: 0, right: 0 },//全部 
        addedList: [],//本次操作记录 ,todo
        deledList: [],
        seletedLen: { left: 0, right: 0 }, //在选中
        selectedAll: { left: false, right: false },
        originData: [],
        diffData: [],
        leftObj: {},//左右列表
        rightObj: {},//
        q: { left: "", right: "" },//搜索参数
        r: null,//最终输出结果存储
        $skipArray: ['data', 'r', 'originData', 'diffData'],
        //内部事件 

        //内部接口
        _trigger: _interface, //内部触发器
        genGroup: _interface, //生成所有组 
        selectItem: _interface, //先选中
        selectAll: _interface, //全选
        addItem: _interface, //添加选中到左右  
        confirm: _interface, //提交 
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.data) {
                vmOpts.data = toListAddData(vmOpts.data, vmOpts.cullOrigin);
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象 
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //内部事件


            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "data":
                        if (typeof vm.onDataChange == "function") {
                            vm.onDataChange(vm.r, vm.originData, vm.diffData);
                        }
                        break;
                    default: break;
                }
            }
            var genGroup = function (str) {
                var str = 'left';
                var flag = false;

                //生成组
                var r = {};
                vm.allLen[str] = vm.seletedLen[str] = 0;
                var foo = true;
                vm.data.forEach(function (item, i) {
                    //对应组 
                    if (item.checked === flag) {
                        //q,如果有,去掉不符合
                        var qStr = vm.q[str].trim();
                        if (qStr && item[vm.textName].indexOf(qStr) < 0) {
                            return false;
                        }
                        var key = item[vm.keyName];
                        r[key] = r[key] || [];
                        r[key].push(item);
                        //其他更新
                        //all
                        vm.allLen[str] += 1;
                        //selected
                        if (item.selected) {
                            vm.seletedLen[str] += 1;
                        } else {
                            foo = false;
                        }
                    }
                });
                if (foo && vm.allLen[str] > 0) {
                    vm.selectedAll[str] = true;
                } else {
                    vm.selectedAll[str] = false;
                }

                vm.leftObj = r;

                var str = 'right';
                var flag = true;
                //生成组
                var r = {};
                var foo = true;
                vm.allLen[str] = vm.seletedLen[str] = 0;
                vm.data.forEach(function (item, i) {
                    //对应组 
                    if (item.checked === flag) {
                        //q,如果有,去掉不符合
                        var qStr = vm.q[str].trim();
                        if (qStr && item[vm.textName].indexOf(qStr) < 0) {
                            return false;
                        }
                        var key = item[vm.keyName];
                        r[key] = r[key] || [];
                        r[key].push(item);
                        //其他更新
                        //all
                        vm.allLen[str] += 1;
                        //selected
                        if (item.selected) {
                            vm.seletedLen[str] += 1;
                        } else {
                            foo = false;
                        }
                    }
                });
                if (foo && vm.allLen[str] > 0) {
                    vm.selectedAll[str] = true;
                } else {
                    vm.selectedAll[str] = false;
                }
                vm.rightObj = r;
            };
            vm.genGroup = _.throttle(genGroup, 200);


            vm.selectItem = function (id) {
                var r = vm.data.filter(function (item, i) {
                    return item[vm.idName] === id;
                });
                //更新生成组
                if (r[0]) {
                    r[0].selected = !r[0].selected;
                    //改全选
                    vm.genGroup();
                }
            }
            vm.selectAll = function (str) {
                var flag;
                if (str === 'left') {
                    flag = false;
                } else {
                    flag = true;
                }
                vm.selectedAll[str] = !vm.selectedAll[str];
                var selected = vm.selectedAll[str];
                avalon.each(vm.data, function (i, item) {
                    ///对应左右列表
                    if (item.checked === flag) {
                        item.selected = selected;
                    }
                })

                //更新生成组
                vm.genGroup();

            }
            vm.addItem = function (flag, str) {
                //生成组
                if (vm.seletedLen[str] < 1) return false;
                vm.data
                    .filter(function (item) {
                        return item.selected && (item.checked === flag)

                    })
                .forEach(function (item) {
                    item.selected = false;
                    item.checked = !flag;
                    //addedlist
                    //if (flag) {
                    //    //从右到左,取消
                    //    vm.addedList.remove();
                    //    vm.deledList.push();
                    //} else {
                    //    //从左到右,增加
                    //}
                });
                //更新生成组
                vm.genGroup();
            }
            vm.confirm = function () {
                //ajax 
                var def = $.Deferred();
                if (vm.ajax) {
                    var config = vm.dataConfirmConfig;
                    var param = $.extend({}, config.data.$model);
                    $.ajax({
                        url: config.url,
                        type: "POST",
                        async: true,
                        data: param,
                        complete: function (result) {
                            console.log(result);
                            def.resolve(result);
                        }
                    });
                } else {

                    var r = [[], []];
                    avalon.each(vm.data, function (i, item) {
                        item.checked
                        ? r[1].push(item)
                        : r[0].push(item)
                    });
                    def.resolve(r);
                }
                //获取data更新,[ [],[] ]
                def.then(function (r) {
                    vm.r = r;
                    //diff
                    //直接diff[0]处,2次diff就可以了 
                    var diff = [[], []];
                    var oriLeft = [];
                    avalon.each(vm.originData, function (i, item) {
                        item.checked
                        ? 0
                        : oriLeft.push(item);
                    });
                    var oriLeftPure = oriLeft.map(function (item) {
                        return item[vm.idName];
                    });
                    var rLeftPure = r[0].map(function (item) {
                        return item[vm.idName];
                    });
                    var tl = _.difference(oriLeftPure, rLeftPure);
                    var tr = _.difference(rLeftPure, oriLeftPure);
                    tl.forEach(function (t) {
                        var r = _.find(vm.originData, function (oriItem) {
                            return oriItem[vm.idName] === t
                        })
                        r ? diff[1].push(r)
                        : 0
                    })
                    tr.forEach(function (t) {
                        var r = _.find(vm.originData, function (oriItem) {
                            return oriItem[vm.idName] === t
                        })
                        r ? diff[0].push(r)
                        : 0
                    })
                    //不能减少的模式
                    if (vm.cullOrigin) diff[0] = [];
                    vm.diffData = diff;
                    vm._trigger({}, 'data');
                })
            }
            //外部事件 
            //外部接口 
            vm.setData = function (data) {
                vm.originData = data.map(function (item) {
                    return _.clone(item);
                })
                vm.data = toListAddData(data, vm.cullOrigin);
                vm.genGroup();
            }

            //观测方法
            //注意:ms-duplex与ms-input不能用在同一元素上。用watch..
            //todo 拼音,要有必须后端.分词算法库太大
            vm.$watch('q.*', function (newV, oldV) {
                //输入就清完selected 
                avalon.each(vm.data, function (i, item) {
                    item.selected = false;
                });
                vm.genGroup();
            });
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            //传入数据需要更新.. 
            vm.genGroup();
        }
    });

    var widget = avalon.components["mc:listdataadd"];
    widget.regionals = {};
})