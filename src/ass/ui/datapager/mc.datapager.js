define(["avalon", "text!./mc.datapager.html", "css!./mc.datapager.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:datapager", {
        //外部参数
        autoAjaxFirst: true, //是否自动发起第一次请求
        active: false, //是否处于展开状态
        allCount: 0, //总条数
        width: 100, //默认展开后宽度
        mcstyle: 0, //外挂样式
        label: "", //展开按钮文字
        curPage: 1,//当前页数
        jumpPageIndex: 1,//跳转的pageIndex
        pageSize: 0, //每页条数
        disabled: false, //是否禁用

        $computed: {
            //总页数
            allPageCount: {
                set: _interface,
                get: function () {
                    return Math.ceil(this.allCount / this.pageSize);
                }
            },
            //数据开始位置
            dataStartIndex: {
                set: _interface,
                get: function () {
                    return this.pageSize * (this.curPage - 1) + 1;
                }
            },
            //数据结束位置
            dataEndIndex: {
                set: _interface,
                get: function () {
                    //判断是否为最后一页
                    if (this.curPage === this.allPageCount) {
                        return this.allCount;
                    } else {
                        return this.pageSize * this.curPage;
                    }
                }
            }
        },

        $page_size_opt: { //每页显示条数下拉选择框配置对象
            data: [
                {
                    text: "20", value: 20
                },
                {
                    text: "30", value: 30
                },
                {
                    text: "50", value: 50
                }
            ]
        },

        $ajaxTmpData: null, //ajax获取到的临时数据

        //ajax相关
        $ajaxConfig: {
            url: "",
            data: {},
            dataType: "json"
        },

        //外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当tab项点击时触发事件
        onDataChange: null, //当请求到新数据时触发事件
        onPageChange: null, //当页码改变时触发事件

        //外部接口
        isDisable: _interface, //是否禁用
        refreshPage: _interface, //刷新当前页数据
        addCondition: _interface, //添加请求条件(data),extend实现
        delCondition: _interface, //删除请求条件(data),需要传入要删除的条件的key
        changeCondition: _interface, //改变请求条件(data),只保留传入的条件以及pageSize和pageIndex

        //内部属性
        isInit: true,
        extend: {},
        $pageSelectVm: null, //下拉选择框对象vm
        $pageJumpVm: null, //获取输入页码的ipt的vm
        $ajaxData: null, //ajax获得的数据
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效

        //内部事件
        getSelectPageVM: _interface, //获取分页下拉选择框vm
        clickDrop: _interface, //下拉选择框点击事件
        getPageJumpVM: _interface, //获取输入页码的ipt的vm
        changePageSize: _interface, //分页大小改变事件

        getAjaxData: _interface, //获取上次ajax返回的数据
        setAjaxData: _interface, //设置ajax返回的数据

        getAllCount: _interface, //获取allCount
        setAllCount: _interface, //设置allCount

        ajaxData: _interface, //获取数据
        turnPage: _interface, //指定页
        nextPage: _interface, //后一页
        prevPage: _interface, //前一页
        jumpPage: _interface, //跳转页
        firstPage: _interface, //首页
        lastPage: _interface, //尾页  

        //内部接口
        _trigger: _interface, //内部触发器

        $template: template,
        //$replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            vmOpts.$ajaxConfig && (vmOpts.$ajaxConfig = $.extend(hooks.$ajaxConfig, vmOpts.$ajaxConfig));
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //var datapagerVM = avalon.define({
            //    $id: "datapager",
            //    $pageSelectVm: null,
            //    $page_size_opt: vm.$page_size_opt,
            //    getPageSelectVM: function(vm,elem) {
            //        datapagerVM.$pageSelectVm = vm;
            //    }
            //});
            //内部事件
            vm.clickDrop = function (ev) {
                if (!vm.disabled) {
                    vm.active = !vm.active;
                    vm._trigger(ev, "click");
                    ev.stopPropagation();
                }
            }
            vm.getSelectPageVM = function (_vm, elem) {
                vm.$pageSelectVm = _vm;
                vm.pageSize = _vm.getValue();
            }
            vm.getPageJumpVM = function (_vm, elem) {
                vm.$pageJumpVm = _vm;
            }
            vm.changePageSize = function (ev, _vm) {
                //bug 网速慢时不触发请求
                vm.pageSize = _vm.getValue();
            }
            //跳转分页
            vm.jumpPage = function (ev) {
                var jumpPage = vm.$pageJumpVm.getValue() >> 0;
                if (jumpPage > 0 && jumpPage <= vm.allPageCount) {
                    vm._changeCurPage(ev, jumpPage);
                }
            }
            vm.nextPage = function (ev) {
                if (vm.curPage < vm.allPageCount) {
                    vm._changeCurPage(ev, vm.curPage + 1);
                }
            }
            vm.prevPage = function (ev) {
                if (vm.curPage > 1) {
                    vm._changeCurPage(ev, vm.curPage - 1);
                }
            }
            vm.firstPage = function (ev) {
                vm._changeCurPage(ev, 1);
            }
            vm.lastPage = function (ev, p) {
                vm._changeCurPage(ev, vm.allPageCount);
            }
            //ajax 
            vm.ajaxData = function () {
                var config = vm.$ajaxConfig;
                if (config.url !== "") {
                    var param = $.extend(config.data, { "pageIndex": vm.curPage, "pageSize": vm.pageSize });
                    Mc.Ajax({
                        url: config.url,
                        data: param,
                        success: function (response) {
                            vm.setAjaxData(response);
                            vm.$pageJumpVm.setValue(vm.curPage); //设置跳转页码输入框页码
                            vm._trigger({}, "data");
                        }
                    });
                }
            }
            vm.getAjaxData = function () {
                return vm.$ajaxData;
            }
            vm.setAjaxData = function (val) {
                vm.$ajaxData = val;
            }

            //获取allCount
            vm.getAllCount = function () {
                return vm.allCount;
            }
            //设置allCount
            vm.setAllCount = function (val) {
                var newAllCount = val >> 0;
                if (newAllCount > 0) {
                    vm.allCount = newAllCount;
                }
            }

            vm.refreshPage = function() {
                vm.ajaxData();
            }
            vm.addCondition = function (newData) {
                vm.$ajaxConfig.data = $.extend(vm.$ajaxConfig.data, newData);
            }
            vm.delCondition = function (keyArray) {
                $.each(keyArray, function (i, val) {
                    console.log(val);
                    delete vm.$ajaxConfig.data[val];
                });
            }
            vm.changeCondition = function (newData) {
                vm.$ajaxConfig.data = newData;
            }
            vm.isDisable = function () {
                return vm.disabled;
            }

            //#region 内部接口
            /**
             * 内部事件触发器
             * @param {} ev 
             * @param {} type 
             * @returns {} 
             */
            vm._trigger = function (ev, type) {
                switch (type) {
                    case "data":
                        if (typeof vm.onDataChange == "function") {
                            vm.onDataChange(vm);
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
            //bug 尽量不要使用avalon的watch来监听触发事件,不靠谱...还是手动触发靠谱
            /**
             * 改变分页大小
             * @returns {} 
             */
            vm._changePageSize = function() {
                if (vm.curPage !== 1) {
                    vm.curPage = 1;
                }
                vm._changeCurPage({}, 1);
            }
            /**
             * 改变当前页
             * @param {} ev 
             * @param {} p 
             * @returns {} 
             */
            vm._changeCurPage = function (ev, p) {
                if (vm.curPage !== p) {
                    vm.curPage = p;
                    vm.ajaxData();
                    vm._trigger(ev, "page");
                }
            }
            //#endregion

            ////分页大小改变,跳一页,再ajax
            //vm.$watch("pageSize", function (newVal, oldVal) {
            //    vm.curPage = 1;
            //    //  vm._trigger({}, "size");
            //});
            ////页码改变
            //vm.$watch("curPage", function (newVal, oldVal) {
            //    vm.ajaxData();
            //    vm._trigger({ newVal: newVal, oldVal: oldVal }, "page");
            //});
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            if (vm.autoAjaxFirst) {
                vm.ajaxData(); //请求数据
            }
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:datapager"];
    widget.regionals = {};
})