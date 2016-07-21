
//todata
toLetterListData = function (data, cullOrigin) {
    var r = [];
    avalon.each(data, function (i, item) {
        item.selected = false; 
        r.push(item); 

    });

    return r;
};
//todo 搜索只有indexof,全拼音后台没给 这也没做
define(['avalon', 'text!./mc.letterlist.html', 'css!./mc.letterlist.min.css', 'mcButton'], function (avalon, template) {
    var _interface = function () { };
    avalon.component("mc:letterlist", {
        //外部参数 
        idName: "id",//id name
        textName: "text",//显示 name
        keyName: "key", //key name  
        picName: "pic", //item小图片 name  
        hasPic:false,
        //外部事件
        onInit: _interface, //初始化接口
        onDataChange: _interface, //数据改变
        onClickBefore: _interface, //点击前
        //外部接口 
        setData: _interface, //设置数据源
        getSelect: _interface, //获取选中
        //内部属性
        isInit: true,
        extend: {},
        lindex: -1, //布局中的序号   
        tmpActive: null,
        $originData: [],
        data: null,//数据源 [text,id,selected,key]
        q:"",
        $skipArray: [''],
        //内部事件 
        
        //内部接口
        _trigger: _interface, //内部触发器  
        click: _interface, //内部触发器  
        select : _interface, //内部触发器  
        _select : _interface, //内部触发器  
        genGroup: _interface, //内部触发器  
        renderDataLen: _interface, //内部触发器  
        $template: template,
        $replace: true,
        $construct: function (hooks, vmOpts, elemOpts) {
            if (vmOpts.data) {
                vmOpts.data = toLetterListData(vmOpts.data, vmOpts.cullOrigin);
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
       
            //选中,该交互类radio
            vm.click = function (item) { 
                if (vm.onClickBefore(item,vm) === false) {
                    return false;
                }
                vm.select(item);
            }
            vm.select = function (item) {
                vm.tmpActive ? vm.tmpActive.selected = false : 0;
                vm._select(item, true);
                vm.tmpActive = item;
            }
            //选中基本方法
            vm._select = function (item, select) {
                item.selected = select; 
            }
            //生成q对应组
            //todo filter = gen + watch,就没必要写一堆gen,关键在于框架支持 | filter (var)
            var genGroup = function () { 
                var r = {};
                var q = vm.q.trim();
                //e.x{A:[ item ],B:[]  }..
                vm.$originData.forEach(function (item, i) {
                    if (q && item[vm.textName].indexOf(q) < 0) {
                        return false;
                    }
                    var key = item[vm.keyName];
                    r[key] = r[key] || [];
                    r[key].push(item);
                });
                vm.data = r;
            }
            vm.genGroup = _.throttle(genGroup, 250);
            vm.renderDataLen = function () {
                var data = vm.data.$model;
                var sum = 0;
                for (key in data) {
                    if (data[key] && data[key].length) {
                        sum += data[key].length;
                    }
                }


                return sum;
            }
            //外部事件 
            //外部接口 
            vm.setData = function (_data) {
                var data = toLetterListData(_data);
                vm.$originData = data;
                //vm.$originData = data.map(function (item) {
                //    return _.clone(item);
                //}) 
                vm.genGroup();
            }
            vm.getSelect = function () { 
                return  vm.tmpActive;
            }
            
            //观测方法
            //注意:ms-duplex与ms-input不能用在同一元素上。用watch.. 
            vm.$watch('q', function (newV, oldV) {
                //输入就清完selected 
                //avalon.each(vm.data, function (i, item) {
                //    item.selected = false;
                //});
                vm.genGroup();
            });
        },
        $ready: function (vm, elem) {
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
            vm.genGroup();
        }
    });

    var widget = avalon.components["mc:letterlist"];
    widget.regionals = {};
})