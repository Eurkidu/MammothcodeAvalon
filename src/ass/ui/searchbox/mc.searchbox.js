define(["avalon", "text!./mc.searchbox.html", "css!./mc.searchbox.min.css"], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:searchbox", {
        //#region 外部参数
        mcstyle: "", //风格
        disabled: false, //是否禁用
        placeholder: "请输入要搜索的数据",

        //搜索类型配置项
        $search_type_opt: {},
        //#endregion

        //#region 外部事件
        /**doc
         * @description {初始化接口}
         * @param {vm} {组件的vm}
         * @param {elem} {组件的elem}
         */
        onInit: _interface, //初始化接口
        /**doc
         * @description {当按钮点击时触发事件}
         * @param {ev} {事件类型,js触发的话为空对象}
         * @param {elem} {组件的elem}
         */
        onSearch: null, //当按钮点击时触发事件
        onCleanSearch: null, //全部数据按钮点击时触发事件
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        search: _interface, //搜索
        cleanSearch: _interface, //清除搜索
        getSearchData: _interface, //获取搜索数据data
        setSearchData: _interface, //设置搜索数据data
        //#endregion

        //#region 内部属性
        isInit: true,
        extend: {},
        $searchType: "", //搜索类型
        $searchData: {}, //搜索data
        $searchTypeVm: null, //搜索类型下拉选择框vm
        $searchIptVm: null, //搜索内容输入框vm
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件
        changeSearchType: _interface, //搜索类型改变事件
        getSearchTypeVM: _interface, //获取搜索类型下拉选择框的vm
        getSearchIptVM: _interface, //获取搜索输入框的vm
        doSearch: _interface, //搜索事件
        doGetAll: _interface, //全部数据事件
        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        setSearchType: _interface, //设置搜索类型
        //#endregion

        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options;
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //#region 外部事件
            vm.isDisable = function () {
                return vm.disabled;
            }
            //#endregion

            //#region 外部接口
            /**doc
             * @description {搜索接口,触发onSearch回调}
             * @returns {} 
             */
            vm.search = function () {
                vm._trigger({}, "search");
            }
            /**doc
             * @description {不搜索显示全部数据}
             * @returns {} 
             */
            vm.cleanSearch = function () {
                vm.$searchTypeVm.setSelectByIndex(0); //搜索类型返回第0个
                vm.$searchIptVm.setData(""); //清空搜索框数据
                vm._trigger({}, "cleanSearch");
            }
            /**doc
             * @description {获取待搜索的数据}
             * @returns {object} {结构key:value} 
             */
            vm.getSearchData = function () {
                vm.$searchData = {};
                vm.$searchData[vm.$searchType] = vm.$searchIptVm.getValue();
                return vm.$searchData;
            }
            /**doc
             * @description {设置搜索数据}
             * @param {newData} {object} {结构key:value,key对应搜索类型下拉选择框的可选项,value对应搜索输入框的值}
             * @returns {} 
             */
            vm.setSearchData = function(newData) {
                vm.$searchData = {};
                vm.$searchData = newData;
                //同步new到view,只赋值newData里的第一对键值
                $.each(newData, function (key, val) {
                    vm.setSearchType(key);
                    vm.$searchIptVm.setValue(val);
                    return false;
                });
            }
            //#endregion

            //#region 内部事件
            vm.getSearchTypeVM = function(_vm,elem) {
                vm.$searchType = _vm.getValue();
                vm.$searchTypeVm = _vm;
            }
            vm.changeSearchType = function (ev, _vm) {
                vm.$searchType = _vm.getValue();
                vm.$searchIptVm.setData(""); //清空搜索框数据
            }
            vm.getSearchIptVM = function (_vm, elem) {
                vm.$searchIptVm = _vm;
            }
            vm.doSearch = function(ev) {
                vm.search();
            }
            vm.doGetAll = function (ev) {
                vm.cleanSearch();
            }
            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "search":
                        if (typeof vm.onSearch == "function") {
                            vm.onSearch(ev, vm, _this);
                        }
                        break;
                    case "cleanSearch":
                        if (typeof vm.onCleanSearch == "function") {
                            vm.onCleanSearch(ev, vm, _this);
                        }
                        break;
                    default: break;
                }
            }
            vm.setSearchType = function(val) {
                vm.$searchTypeVm.setValue(val);
            }
            //#endregion
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:searchbox"];
    widget.regionals = {};
})