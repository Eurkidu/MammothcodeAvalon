/**
 * Created by WangMing on 15/12/9.
 */
var gulp=require('gulp');
var plugins = require('gulp-load-plugins')();
var webpack = require('webpack');
var del=require('del');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpackconfig = require('./webpack.config'); 
/**
 *  清理生产目录文件
 */
gulp.task('clean', function(cb) {
  del(['./dist/*','./dist/*.*']).then( function(paths){
    console.log('删除文件和文件夹成功\n', paths.join('\n'));
    cb();
  });
});

/**
 *  执行webpack打包
 */
gulp.task('webpack',['clean'], function(cb) {
  webpack(webpackconfig, cb)
});

/**
 *  压缩css文件
 */
gulp.task('style',function() {
  gulp.src('./dist/style.css')
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'));
});

/**
 *  压缩js文件
 */
gulp.task('script',function(){
  gulp.src('./dist/*.js')
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

/**
 *  压缩js文件后的去debug,alert console
 */
gulp.task('strip',function(){
  gulp.src('./dist/build.js')
    .pipe(rename({suffix:'.strip.min'}))
	.pipe(plugins.stripDebug()) 
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

/**
 *  观察
 */
 var paths = {
		scripts: ['src/ass/**/*.js'],
		html:['src/ass/**/*.html'],
		style:['src/ass/**/*.css']
};	 
gulp.task('watch', function () {
  gulp.watch([paths.scripts,paths.html,paths.style],['webpack']);
});

gulp.task('default', ['webpack'], function(cb) {
  gulp.start('script')
});