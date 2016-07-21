define(["avalon", "text!./mc.upload.html", "css!./mc.upload.min.css", 'mcSwitch'], function (avalon, template) {
    avalon.filters.uri = function (str) {

        var r = '';
        try {
            var arr = str.split('/');
            var long = arr[arr.length - 1].split('.');
            long[0] = long[0].substring(1, 10);
            r = long.join('.');
        } catch (e) {
            console.info(str);
        }
        return r
    }
    var _interface = function () { };
    //todo 配置要上传的 fileType 不是在传一个文件以后判断文件扩展名来判断
    //todo 单图上传，多图上传合并，看情况是否使用JQ插件
    avalon.component("mc:upload", {
        //#region 外部参数
        uploadFormId: McAvalon.util.genId("_uploadForm"), //上传的form
        label: "", //提示文字
        labelSize: 0,
        tip: "",
        mult: false, //多图上传,默认关闭
        fileSrc: "", //图片路径
        fileSrcList: [], //多图上传图片路径
        fileSize: null, //文件大小
        uploadType: "default", //后台上传图片的分类类型
        fileType: "", // 当前的类型
        allowFileType: "img",//允许文件类型    默认图片  --img video audio office
        mcstyle: "", //风格
        size: "normal", //small large
        width: 200, //宽度,默认200px
        disabled: false, //是否禁用
        //外链
        allowOuter: false,//允许
        isOuter: false,//是否 
        //表单相关
        formName: "", //表单data的key,输入框name
        readonly: false, //是否只读，只读就无法更改上传的图片，不显示上传按钮
        fJudge: "", //绑定的判断字段
        fState: "", //绑定的判断字段对应的状态,可以对应多个状态,用","分隔
        //#endregion

        //#region 外部事件
        onInit: _interface, //初始化接口
        onClick: null, //当按钮点击时触发事件
        //#endregion

        //#region 外部接口
        isDisable: _interface, //是否禁用
        submit: _interface, //上传
        reset: _interface, //重置
        //表单相关
        getValue: _interface, //供表单组件调用返回数据
        setValue: _interface, //供表单组件调用设置数据
        //#endregion

        //buildin 
        //switch,text
        getSwitchVM: _interface, // 
        outerChanged: _interface, // 
        getOuterTextVM: _interface, // 
        $outerTextVM: {},
        $outerSwitchVM: {},
        setOuter: _interface, // 
        //builin end


        //#region 内部属性
        //对应格式
        $fileTypeFormat: {
            img: ['.jpg', '.png'],
            video: [".rm", ".rmvb", ".wmv", ".avi", ".mpg", ".mpeg", ".mp4"],
            audio: [".mp3", ".wma", ".wav", ".amr"],
            office: [".doc", ".docx", ".pdf", ".ppt", ".pptx"]
        },
        isInit: true,
        extend: {},
        $jQuploadForm: $({}), //上传图片的表单的jQuery对象
        s_upload: false, //状态-是否正在上传的
        lindex: -1, //布局中的序号
        trindex: -1, //表格中的行号 [特殊] - 仅在表格中生效
        tdindex: -1, //表格中的列号 [特殊] - 仅在表格中生效
        //#endregion

        //#region 内部事件
        fileChange: _interface, //上传input change事件
        doDel: _interface, //多图上传 删除 事件
        //#endregion

        //#region 内部接口
        _trigger: _interface, //内部触发器
        getRealUrl: _interface, //获取.多种URL
        getFormat: _interface, //获取对应格式
        setRealUrl: _interface, //设置.多种URL
        judgeOuter: _interface, //判断是否外链
        delImg: _interface, //删除图片
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
            //buildin
            vm.getOuterTextVM = function (_vm, elem) {
                vm.$outerTextVM = _vm
            }
            vm.getSwitchVM = function (_vm, elem) {
                vm.$outerSwitchVM = _vm
            }
            vm.outerChanged = function (e, _vm) {
                vm.isOuter = _vm.isActive()
            }

            vm.setOuter = function (_val) {
                var val = _val ? 1 : 0;
                vm.$outerSwitchVM.setValue(val);
            }
            //builin end

            //#region 外部事件
            vm.isDisable = function () {
                return vm.disabled;
            }
            //#endregion

            //#region 外部接口
            vm.submit = function (_fileType) {
                //UpAudioFileByMvc
                var url = "/Home/UpdateImg/";
                //get url
                if (_fileType === 'office')
                    url = "/Home/UpOfficFileByMvc/";
                else if (_fileType === 'video')
                    url = "/Home/UpVideoFileByMvc/";
                else if (_fileType === 'audio')
                    url = "/Home/UpAudioFileByMvc/";
                vm.s_upload = true;
                //get params,response
                var ssFn = {};
                if (_fileType === 'img') {
                    ssFn = function (response) {
                        vm.s_upload = false;
                        console.log(response);
                        var result = JSON.parse(response);
                        if (vm.mult) { //多图
                            vm.fileSrcList.push(result.url);
                        } else {
                            vm.fileSrc = result.url;
                        }
                        //closeLoading();
                    }
                } else {
                    ssFn = function (response) {
                        vm.s_upload = false;
                        console.log(response);
                        var result = JSON.parse(response);
                        vm.fileSize = result.sizeList[0];
                        vm.fileSrc = result.URLList[0];
                        //closeLoading();
                    }
                }
                //showLoading();
                vm.$jQuploadForm.ajaxSubmit({
                    url: url,
                    type: "POST",
                    data: {
                        "type": vm.uploadType
                    },
                    timeout: 600000, //超时时间：10mins
                    async: true,
                    success: ssFn
                });
            }
            vm.getValue = function () {
                if (vm.mult) { //多图上传
                    return vm.fileSrcList.join(",");
                }
                return vm.getRealUrl();
            }
            vm.setValue = function (val, isReadonly) {
                //isReadonly 传值的时候才赋值判断
                isReadonly !== undefined && (vm.readonly = isReadonly ? true : false);
                if (vm.mult) { //多图上传
                    if (val !== "") {
                        vm.fileSrcList = val.split(",");
                    } else {
                        vm.fileSrcList = [];
                    }
                } else {
                    //先清
                    vm.$outerTextVM.setValue("");
                    //fix bug 相等时会有问题
                    if (vm.fileSrc === val) {
                        var n = val;
                        //todo change filetype
                        var all = n.split('.');
                        var _f = '.' + all[all.length - 1];
                        vm.fileType = vm.getFormat(_f);
                        //todo change svm active ,setvalue,有点冗余问题不大 
                        vm.judgeOuter(n)
                        ? vm.$outerSwitchVM.setValue(1)
                        : vm.$outerSwitchVM.setValue(0)

                        //todo change svm active ,setvalue,有点冗余问题不大 
                        vm.judgeOuter(n)
                        ? vm.$outerTextVM.setValue(n)
                        : 0
                    }
                    // if (val !== vm.fileSrc) {
                    vm.fileSrc = val;
                    // }
                }
            }
            //#endregion

            //#region 内部事件
            vm.fileChange = function (ev, _this) {
                console.log(_this.files);
                if (!vm.s_upload) {
                    //todo check file type
                    if (_this.files && _this.files.length) {
                        var all = _this.files[0].name.split('.');
                        var _f = '.' + all[all.length - 1];
                        var f = vm.getFormat(_f);
                        if (f && vm.allowFileType.indexOf(f) > -1)
                            vm.submit(f);
                        else {
                            alert("不支持所传格式");
                        }
                    } else if (_this.value) { //IE
                        //todo ie check
                        vm.submit();
                    }
                }
            }
            //多图上传时删除图片
            vm.doDel = function (ev, idx) {
                vm.delImg(idx);
            }
            //#endregion

            //#region 内部接口
            vm._trigger = function (ev, type, _this) {
                switch (type) {
                    case "click":
                        if (typeof vm.onClick == "function") {
                            vm.onClick(ev, vm, _this);
                        }
                        break;
                    case "url":
                        if (typeof vm.onClick == "function") {
                            vm.onChanged(ev, vm, _this);
                        }
                        break;
                    case "outer":
                        if (typeof vm.onClick == "function") {
                            vm.onOuter(ev, vm, _this);
                        }
                        break;
                    default: break;
                }
            }
            //删除图片
            vm.delImg = function (idx) {
                avalon.Array.removeAt(vm.fileSrcList, idx);
            }
            //get url by text, or filesrc
            vm.getRealUrl = function () {
                if (!vm.isOuter)
                    //内
                    return vm.fileSrc
                else
                    //外
                    return vm.$outerTextVM.getValue();
            }
            //get format
            vm.getFormat = function (_f) {
                //_f  .mp3  
                var r = '';
                for (key in vm.$fileTypeFormat) {
                    if (vm.$fileTypeFormat[key].indexOf(_f) > -1) {
                        r = key;
                        // return false;
                    }
                }
                return r
            }
            //判断
            vm.judgeOuter = function (url) {
                return url.indexOf('http') > -1
            }
            //设置到text或者 
            vm.setRealUrl = function (url) {

                if (vm.judgeOuter(url)) {
                    //outer
                    vm.$outerTextVM.setValue(url, vm.readonly);
                } else {
                    //

                }
                vm.fileSrc = url;
            }
            //#endregion
            //观测方法
            vm.$watch('fileSrc', function (n, o) {
                //todo change filetype
                var all = n.split('.');
                var _f = '.' + all[all.length - 1];
                vm.fileType = vm.getFormat(_f);
                //todo change svm active ,setvalue,有点冗余问题不大 
                vm.judgeOuter(n)
                ? vm.$outerSwitchVM.setValue(1)
                : vm.$outerSwitchVM.setValue(0)

                //todo change svm active ,setvalue,有点冗余问题不大 
                vm.judgeOuter(n)
                ? vm.$outerTextVM.setValue(n)
                : 0

                vm._trigger({}, 'url')
            });
            vm.$watch('isOuter', function (n, o) {
                vm._trigger({}, 'outer')
            });
        },
        $ready: function (vm, elem) {
            vm.$jQuploadForm = $(elem).find("#" + vm.uploadFormId); //获取表单的jQuery对象
            //初始化操作
            vm.onInit(vm, elem); //调用外部初始化函数
            vm.isInit = false;
        }
    });

    var widget = avalon.components["mc:upload"];
    widget.regionals = {};
})