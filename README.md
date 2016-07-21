 

## 使用方法
注意事项

 
1. `npm install` 
	确保安装了node,及全局安装了gulp和webpack
2. npm run build, build之前确保每个组件正确(该全局全局,该define define)
3. dist中,有3个版本,自行选择
4.首页处需要依赖外部avalon.shim,avalon自带加载器不是很好配,直接用requirejs,之后把build引用进去即可
4.1 因为换了加载器,注意原来state中js路径和原来不一样(默认requirejs指向页面html位置)
5.后续所有js确保一定依赖(mcLib)
5.1 页面js define(mcLib) ;方便点可以直接在入口,index.js处require(mcLib,()=>{ code here})
 


tip

 
1.全局库目前外部前置,如avalon,(external配置)
2.内部高频组件可配,就不需要每个组件依赖个avalon,颗粒度还行 (provider Plugn配置)

工作流
	
	因为webpack自带strip不来...webpack--gulp strip--gulp ugly


## 效果截图

![](http://7xp11v.com1.z0.glb.clouddn.com/15-12-9/90700504.jpg)


![](http://7xp11v.com1.z0.glb.clouddn.com/15-12-9/98172742.jpg)


## 关于ie8的兼容问题
1. ajax在低版本ie下默认会从缓存读取，需要加上对应的时间戳，直接在avalon.ajax的请求配置的`cache`设置为`false`
2. 需要取vm的值的情况下请使用vm的`$model`属性
3. 数组的增加和获取长度请使用`pushArray`和`size`
4. 不要直接定义`data:{}`然后给data动态增加属性,不要过多的嵌套
5. oniui的分页控件在数据获取之后再设置，否则ie8下面不出现
6. 验证控件的异步问题，将逻辑写在`validationVM.validateAll`的验证成功的方法中
7. 绑定下拉框的数据获取，只需要select的绑定的对象的值
8. 使用oniui最好使用1.4.7版本的avalon，解决了光标和下拉联动的问题

 
