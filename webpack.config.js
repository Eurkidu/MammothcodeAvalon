/**
 * Created by WangMing on 15/12/9.
 */
 module.paths.push('C:/Users/eurki/AppData/Roaming/npm/node_modules');

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //将组件中的样式乖乖提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插入代码

//webpck插件
var plugins = [
  //提公用js到common.js文件中
  //new webpack.optimize.CommonsChunkPlugin('common.js'),
 // new HtmlWebpackPlugin({
  //  title: "avalon webpack gulp spa 实践",
  //  template: "tpl.html",//模版 可控释放的标签位置
  //  filename: "index.html",//生成地址
  //  hash: true
//  }),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true,
    disable: false//估计是dead code
  }),
  // 使用 ProvidePlugin 加载使用率高的依赖库
  new webpack.ProvidePlugin({
    "_": "underscore"
  }) 
];
var entry = ['./src/entry'], //入口 路由promise文件
  buildPath = "/dist/";
//编译输出路径
module.exports = {
  debug: true,
  entry: entry,
  output: {
    path: __dirname + buildPath,
    filename: 'build.js',
    //publicPath: '/content/debug/dist/',
    publicPath: '/content/dist/',
	library: 'mcLib',
	libraryTarget: 'umd',
	umdNamedDefine :true
  //  chunkFilename: "[name].chunk.[chunkhash:8].js" //给require.ensure用
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        "style-loader", "css-loader?sourceMap!cssnext-loader")
    },{
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: "file-loader?name=images/[name].[hash].[ext]"
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }, {
      test: /\.json$/,
      loader: 'json'
    }],
    preLoaders: [{
      test: /\.js$/,
      loader: "require-css-preloader"
    }]
  },
externals: {
avalon: 'avalon' //或者jquery:'jQuery'
},
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extension: ['', '.js', '.css'],
    //别名,重定向,省了写路径,挺好
    alias: {     
	  mcBase: path.join(__dirname, "./src/mc.base.js"), //base
	  underscore: path.join(__dirname, './src/underscore.js'),    
		mmRequest: path.join(__dirname, "./src/ass/ui/base/js/mmRequest.js"),
        mmPromise: path.join(__dirname, "./src/ass/ui/base/js/mmPromise.js"),
        mmHistory: path.join(__dirname, "./src/ass/ui/base/js/mmRouter/mmHistory.js"),
        mmRouter: path.join(__dirname, "./src/ass/ui/base/js/mmRouter/mmRouter.js"),
        mmState: path.join(__dirname, "./src/ass/ui/base/js/mmRouter/mmState.js"),
        //MCUI path
		
       	mcAccordion: path.join(__dirname, "./src/ass/ui/accordion/mc.accordion.js"), //手风琴
        mcSidebar: path.join(__dirname, "./src/ass/ui/sidebar/mc.sidebar.js"), //侧边栏
        mcSidepop: path.join(__dirname, "./src/ass/ui/sidepop/mc.sidepop.js"), //侧边弹出层
        mcDatagrid: path.join(__dirname, "./src/ass/ui/datagrid/mc.datagrid.js"), //数据表
        mcDatagridTest: path.join(__dirname, "./src/ass/ui/datagridtest/mc.datagridtest.js"), //数据表2
        mcPopmenu: path.join(__dirname, "./src/ass/ui/popmenu/mc.popmenu.js"), //弹出菜单
        mcPop: path.join(__dirname, './src/ass/ui/pop/mc.pop.js'), //提示框,确认框组件
        mcDialog: path.join(__dirname, './src/ass/ui/dialog/mc.dialog.js'),
        mcDialogTest: path.join(__dirname, './src/ass/ui/dialogtest/mc.dialogtest.js'),
        mcForm: path.join(__dirname, './src/ass/ui/form/mc.form.js'),
        mcNavbar: path.join(__dirname, './src/ass/ui/navbar/mc.navbar.js'),
        mcPanel: path.join(__dirname, './src/ass/ui/panel/mc.panel.js'),
        mcTab: path.join(__dirname, './src/ass/ui/tab/mc.tab.js'),
        mcSearchbox: path.join(__dirname, "./src/ass/ui/searchbox/mc.searchbox.js"), //搜索框
        mcTabs: path.join(__dirname, "./src/ass/ui/tabs/mc.tabs.js"), //tabs
        mcCheckbox: path.join(__dirname, "./src/ass/ui/form/checkbox/mc.checkbox.js"), //复选框
        mcCheckboxGroup: path.join(__dirname, './src/ass/ui/form/checkboxGroup/mc.checkboxgroup.js'),
        mcListdataAdd: path.join(__dirname, './src/ass/ui/form/ListdataAdd/mc.ListdataAdd.js'),//左右选择框
      //  mcTree: path.join(__dirname, './src/ass/ui/form/tree/mc.tree.js'),//树形
        mcTreeBt: path.join(__dirname, './src/ass/ui/form/treebt/mc.tree.js'),//树形2
        mcTreeSelect: path.join(__dirname, './src/ass/ui/form/treeSelect/mc.treeSelect.js'),//树形选择form
        mcButton: path.join(__dirname, "./src/ass/ui/form/button/mc.button.js"), //按钮
        mcDroplist: path.join(__dirname, "./src/ass/ui/droplist/mc.droplist.js"), //下拉展开列表
        mcDatapager: path.join(__dirname, "./src/ass/ui/datapager/mc.datapager.js"), //页码
        mcDatapagerTest: path.join(__dirname, "./src/ass/ui/datapagertest/mc.datapagerTest.js"), //页码test
        mcDatepicker: path.join(__dirname, './src/ass/ui/form/datepicker/mc.datepicker.js'), //日期选择
        mcPassword: path.join(__dirname, './src/ass/ui/form/password/mc.password.js'),
        mcRadiogroup: path.join(__dirname, './src/ass/ui/form/radio/mc.radiogroup.js'),
        mcRate: path.join(__dirname, './src/ass/ui/form/rate/mc.rate.js'),
        mcSelectbox: path.join(__dirname, "./src/ass/ui/form/selectbox/mc.selectbox.js"), //下拉选择框
        mcSpinner: path.join(__dirname, './src/ass/ui/form/spinner/mc.spinner.js'),
        mcSwitch: path.join(__dirname, './src/ass/ui/form/switch/mc.switch.js'), //开关组件
        mcText: path.join(__dirname, "./src/ass/ui/form/text/mc.text.js"), //输入行
        mcJsonadd: path.join(__dirname, "./src/ass/ui/form/jsonadd/mc.jsonadd.js"), //输入行
        mcUpload: path.join(__dirname, "./src/ass/ui/form/upload/mc.upload.js"), //上传组件
        mcEditor: path.join(__dirname, "./src/ass/ui/form/editor/mc.editor.js"), //文本编辑器组件
        mcTagadd: path.join(__dirname, "./src/ass/ui/form/tagadd/mc.tagadd.js"), //标签添加组件
        mcPagemodal: path.join(__dirname, "./src/ass/ui/pagemodal/mc.pagemodal.js"), //页面弹窗
        mcBread: path.join(__dirname, "./src/ass/ui/bread/mc.bread.js"), //面包屑
        mcIconselect: path.join(__dirname, "./src/ass/ui/form/iconselect/mc.iconselect.js"), //图标选择
        mcTextarea: path.join(__dirname, './src/ass/ui/form/textarea/mc.textarea.js'), 
		
        mcLetterList: path.join(__dirname, "./src/ass/ui/form/letterList/mc.letterList.js"),//左右选择框
        mcListSelect: path.join(__dirname, "./src/ass/ui/form/listselect/mc.listselect.js"),//左右选择框 
		
		    mcSelectadd: path.join(__dirname, "./src/ass/ui/form/selectadd/mc.Selectadd.js"), //选择添加组件
		
        //MCLayout path
        mcGrid: path.join(__dirname, "./src/ass/ui/layout/gridlayout/mc.gridlayout.js"), //网格布局
        mcLinear: path.join(__dirname, "./src/ass/ui/layout/linearlayout/mc.linearlayout.js"), //线性布局
        mcAbsolute: path.join(__dirname, "./src/ass/ui/layout/absolutelayout/mc.absolutelayout.js"), //绝对布局
        mcRelative: path.join(__dirname, "./src/ass/ui/layout/relativelayout/mc.relativelayout.js"), //相对布局
		
		
	 

    }
  },
  plugins: plugins,
  devtool: '#source-map' 
};
 