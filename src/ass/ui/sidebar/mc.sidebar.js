toSideBarData = function (data) {
    var result = [];
    //has checked end
    avalon.each(data, function (i, item) {
        result.push(item);
        item.select = item.select || false;
        item.children = item.children || [];
        //递归赋值 
        if (item.children.length) {
            item.children = toSideBarData(item.children);
        }
    });
    return result;
};

define(['avalon', 'text!./mc.sidebar.html', 'css!./mc.sidebar.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:sidebar", {
        //外部属性
        active: 0, //表示当前激活项
        padding: 0, //panel-body 的 padding
        //外部参数
        sidebarList: [],
        //内部属性
        isInit: true,
        extend: {},
        $allPanel: null,
        $allPanelBody: null,
        //view接口
        onInit: _interface, //必须定义此接口
        changeData: _interface,
        renderContent: _interface,
        clickPanel: _interface,
        _trigger: _interface,
        setActive: _interface,
        getActive: _interface,
        setSelect: _interface,
        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.data) {
                if (typeof (vmOpts.data) === 'function') {
                    vmOpts.data = vmOpts.data();
                }
                vmOpts.data = toSideBarData(vmOpts.data);
            }
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = "";
        },
        $init: function (vm, elem) {
            //内部方法
            vm._trigger = function (ev, type) {
                switch (type) {
                    case 'changed':
                        if (typeof vm.onChanged == 'function') {
                            vm.onChanged(ev, {
                                "setActive": vm.setActive,
                                "getActive": vm.getActive
                            });
                        }
                        break;
                    default: break;
                }
            }
            //接口方法
            vm.renderContent = function (idx) {
                return vm['content' + idx];
            }
            vm.changeData = function (newData) {
                //trans
                vm.sidebarList = toSideBarData(newData);
            }
            vm.clickPanel = function (ev, idx) {
                avalon.log(idx);
                if (idx != vm.active) { //判断点击的是否是当前项
                    //非当前项
                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
                    vm.active = idx;
                } else {
                    //当前项
                    vm.$allPanelBody.eq(idx).slideUp(300); //收起当前项
                    vm.active = -1; //激活项置为-1
                }
            }
            //对外方法
            vm.setActive = function (idx) {
                if (idx != vm.active) { //判断是否是当前项
                    //非当前项
                    vm.$allPanelBody.eq(vm.active).slideUp(300); //收起上一项
                    vm.$allPanelBody.eq(idx).slideDown(300); //展开当前项
                    vm.active = idx;
                }
            }
            vm.getActive = function () {
                return vm.active;
            }
            vm.setSelect = function (href) {
                //todo find
                vm.sidebarList.forEach(function (pat) {
                    //todo remove
                    _.each(pat.children, function (child) {
                        child.select = false;
                    });
                    //remove end
                    _.find(pat.children, function (child) {
                        if (child.href.toLowerCase().indexOf(href.toLowerCase()) > -1) {
                            child.select = true;
                            return false;
                        }
                    })
                    console.log(vm.sidebarList)
                })
            }
            
            //观测方法
            vm.$watch('sidebarList', function (newVal, oldVal) {
                setTimeout(function() {
                    vm.$allPanelBody = $(".mc-accordion-cotar .panel-body"); //缓存$allPanelBody
                    //vm.$allPanelBody.eq(vm.active).slideDown(0); //展开当前项
                }, 500);
            });

        },
        $ready: function (vm, elem) {
            //初始化操作
            //vm.$allPanel = $(elem);
            vm.$allPanelBody = $(elem).find(".panel-body"); //缓存$allPanelBody
            vm.$allPanelBody.eq(vm.active).slideDown(0); //展开当前项
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            //if (typeof vm.panels[vm.active].fun == 'function') {
            //    vm.panels[vm.active].fun({}, vm);
            //}
        }
    });

    var widget = avalon.components["mc:sidebar"];
    widget.regionals = {};
});