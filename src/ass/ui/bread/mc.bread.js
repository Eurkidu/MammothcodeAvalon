define(['avalon', 'text!./mc.bread.html', 'css!./mc.bread.min.css'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:bread", {
        //外部参数
        data: [],
        padding: 15,

        //外部事件
        onInit: _interface, //初始化接口

        //外部接口

        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号
        $scrollBody: $({}), //滚动层

        //内部事件
        btnClick: _interface,
        clickDialog: _interface,

        //内部接口
        _trigger: _interface,

        //默认配置
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            var options = avalon.mix(hooks, vmOpts, elemOpts);
            return options; //返回VM的定义对象
        },
        $dispose: function (vm, elem) {
            elem.innerHTML = elem.textContent = "";
        },
        $init: function (vm, elem) {
            //======= 内部事件 START =======//

            //======= 内部事件 END =======//

            //======= 内部接口 START =======//
            /**
             * 事件触发器
             * @param {} ev 动作类型
             * @param {} type 事件类型
             * @returns {} 
             */
            vm._trigger = function (ev, type) {
                switch (type) {
                    default: break;
                }
            }
            //======= 内部接口 END =======//

            //======= 外部接口 START =======//
            
            //======= 外部接口 END =======//
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:bread"];
    widget.regionals = {};
});