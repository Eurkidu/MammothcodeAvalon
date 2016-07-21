define(["avalon", "text!./mc.datapagertest.html", "css!./mc.datapagertest.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:datapagertest", {
        //外部参数 
        allPageCount: 0, //总页码数
        selectboxWidth: 100, //默认展开后宽度  
        dropDisabled: false, //是否禁用selectbox
        pageSizeOpt: [{ text: 10, value: 10 }], //分页大小选项
        pageOpt: [{ text: 1, value: 1 }], //页数选项
        pageSize: 10,//分页大小
        dataGetConfig: {}, //分页ajax参数
        //外部事件
        onInit: _interface, //初始化接口 
        onDataChange: null, //推送数据
        //外部接口 
        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        curPage: 1,//当前页数
        pageList: [],//显示的页码块
        pageListMax: 10,//显示的页码块,偶数..奇没测过
        data: [],//temp数据源
        pageSelectboxVM: null,
        //内部事件
        clickSize: _interface, //选择分页大小 
        clickPage: _interface, //选择分页shu
        onPageChange: null, //当页码
        // onPageSizeChange: null, //当大小

        //内部接口
        _trigger: _interface, //内部触发器
        ajaxData: _interface, //获取data数据
        genePageList: _interface, //生成页码块
        genePageSelectbox: _interface, //生成页码框
        turnPage: _interface, //指定页
        nextPage: _interface, //后一页
        prevPage: _interface, //前一页
        firstPage: _interface, //diyi页
        lastPage: _interface, //最后页  
        $template: template,
        //$replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            var datapagerVM = avalon.define({
                $id: "datapager",
                $page_size_select_config: {
                    data: vm.pageSizeOpt,
                    width: vm.selectboxWidth
                },
                $page_select_config: {
                    data: vm.pageOpt,
                    width: vm.selectboxWidth
                },
                getPageSelectboxVM: function (__vm) { //用来重写onInit 获取页码选择框 vm
                    vm.pageSelectboxVM = __vm
                }
            });
            vm.clickSize = function (ev, _vm) {
                if (!vm.dropDisabled) {
                    //获取size
                    var idx = _vm.select,
                     size = vm.pageSizeOpt[idx].value;
                    //改变page
                    vm.pageSize = size;
                    ev.stopPropagation();
                }
            }
            vm.clickPage = function (ev, _vm) {
                if (!vm.dropDisabled) {
                    //获取page
                    var idx = _vm.select,
                     page = vm.pageSelectboxVM.data[idx].value;
                    //改变page
                    vm.turnPage(ev, page)
                    ev.stopPropagation();
                }
            }
            //内部接口
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "data":
                        if (typeof vm.onDataChange == "function") {
                             vm.onDataChange(vm.data.$model);
                        }
                        break;
                    case "size":
                       // if (typeof vm.onPageSizeChange == "function") {
                       //     vm.onPageSizeChange(ev, vm.pageSize);
                      //  }
                        break;
                    case "page":
                        if (typeof vm.onPageChange == "function") {
                            vm.onPageChange(ev, vm.curPage);
                        }
                        break;
                    default: break;
                }
            }
            //生成页码
            vm.genePageList = function () {
                vm.pageList = [];
                var half = Math.floor(vm.pageListMax / 2);
                //不够的情况
                if (true) {
                    for (var i = 0; i < vm.pageListMax; i++) {
                        vm.pageList.push(i + 1);
                    }
                } else {
                    //偏头
                    8.5
                    //便尾
                    //中间段 
                }
            }
            //生成页码
            vm.genePageSelectbox = function () {
                var r = [];
                var min = vm.pageListMax / 2 + 1;
                var max = vm.allPageCount - min;
                //bu够的情况
                if (vm.allPageCount <= vm.pageListMax) {
                    //全部页数1-所有列出
                    for (var i = 0; i < vm.allPageCount; i++) {
                        r.push(i + 1);
                    }
                } else {
                    if (vm.curPage <= min) {
                        //偏头    1-10列出
                        for (var i = 0; i < vm.pageListMax; i++) {
                            r.push(i + 1);
                        }
                    }
                        //便尾    allPageCount--< all-10
                    else if (vm.curPage >= max) {
                        for (var i = vm.allPageCount - vm.pageListMax; i < vm.allPageCount; i++) {
                            r.push(i + 1);
                        }
                    } else {
                        //中间段 
                        for (var i = vm.curPage - vm.pageListMax / 2 - 1, len = vm.curPage + vm.pageListMax / 2 - 1; i < len; i++) {
                            r.push(i + 1);
                        }
                    }
                } 
                // r--> {} data
                var rr = [];
                r.forEach(function (num, i) {
                    rr.push({ text: num, value: num })
                })
                vm.pageSelectboxVM.data = rr;
                vm.pageSelectboxVM.setSelectByValue( vm.curPage );
                //vm.pageList = r;
            }
            //跳转分页
            vm.nextPage = function (ev) {
                if (vm.curPage < vm.allPageCount) {
                    vm.turnPage(ev, vm.curPage + 1)
                }
            }
            vm.prevPage = function (ev) {
                if (vm.curPage > 2) {
                    vm.turnPage(ev, vm.curPage - 1)
                }
            }
            vm.turnPage = function (ev, p) {
                if (!vm.dropDisabled) {
                    vm.curPage = p;
                }
                
            }
            vm.firstPage = function (ev) {
                vm.turnPage(ev, 1);
            }
            vm.lastPage = function (ev, p) {
                vm.turnPage(ev, vm.allPageCount);
            } 
            
            //ajax 
            vm.ajaxData = function () {
                //data ajax
                var getDataDef = $.Deferred();
                var config = vm.dataGetConfig; 
                var param = $.extend({},{ page: vm.curPage, size: vm.pageSize }, config.data.$model);
                $.ajax({
                    url: config.url,
                    type: "GET",
                    async: true,
                    data: param,
                    complete: function (result) {
                        console.log(result);
                        getDataDef.resolve(result);
                    }
                });
                //获取data更新 
                getDataDef.then(function (r) {
                    //mock ajax 
                    r = {};
                    var data = []
                    for (var i = 0; i < 7; i++) {
                        data.push(
                            {
                                classify: "农业新闻" + i,
                                title: "论VR的重要性",
                                tdlink: "#!/Home/NewDetails",
                                createTime: "2016年3月16日 13:21:42",
                                task: 100002
                            }
                        );
                    }
                    r.data = data;
                    r.allPageCount = 56;
                    //设置data 
                    //vm下的data会带引用,watch等等影响,用$model
                    vm.data = r.data; 
                    vm.allPageCount = r.allPageCount;
                    //设置页码块 
                    vm.genePageSelectbox();
                })
            }
            //watch 观测 
            //分页数据改变
            vm.$watch("data", function (newVal, oldVal) { 
                  vm._trigger({}, "data");
            });
            //分页大小改变,跳一页,再ajax
            vm.$watch("pageSize", function (newVal, oldVal) { 
                vm.curPage = 1;
              //  vm._trigger({}, "size");
            });
            //页码改变
            vm.$watch("curPage", function (newVal, oldVal) { 
                vm.ajaxData(); 
                vm._trigger({}, "page");
            });
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            //todo auto 
            vm.ajaxData();
        }
    });
    var widget = avalon.components["mc:datapagertest"];
    widget.regionals = {};
})