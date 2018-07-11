const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
// 拷贝资源
function copyfile(src, dist) {
	gulp.src(src)
	.pipe(gulp.dest(dist));
}

//拷贝不需预处理的文件
gulp.task('staticCopy', () =>
	{
        copyfile('./assets/images/*', '../src/assets/images/');
        copyfile('./pages/**/*.js', '../src/pages/');
		copyfile('./pages/**/*.html', '../src/pages/');
		copyfile('./assets/css/swiper.min.css', '../src/assets/css/');
		copyfile('./assets/css/dropload.css', '../src/assets/css/');
		copyfile('./assets/css/jquery-weui.min.css', '../src/assets/css/');
		copyfile('./assets/js/swiper.min.js', '../src/assets/js/');
		copyfile('./assets/js/dropload.min.js', '../src/assets/js/');
		copyfile('./assets/js/city-picker.min.js', '../src/assets/js/');
		copyfile('./assets/js/jquery-weui.min.js', '../src/assets/js/');
		copyfile('./assets/js/clipboard.min.js', '../src/assets/js/');
	}
);

//合并公共js文件
gulp.task('concatJS', () =>
    gulp.src(['./assets/js/jquery.min.js', './assets/js/we.js'])
    .pipe(concat('lib.min.js'))
    .pipe(gulp.dest('../src/assets/js/'))
);

//处理scss
gulp.task('sass', function(done) {
	gulp.src('./pages/**/*.scss')
	.pipe(sass())
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest('../src/pages/'))
	.pipe(minifyCss({
		keepSpecialComments: 0
	}))
	.pipe(rename({
		extname: '.min.css'
	}))
	.pipe(gulp.dest('../src/pages/'))
	.on('end', done);
});
gulp.task('staticSass', function (done) {
	gulp.src('./assets/css/common.scss')
	.pipe(sass())
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest('../src/assets/css'))
	.pipe(minifyCss({
		keepSpecialComments: 0
	}))
	.pipe(rename({
		extname: '.min.css'
	}))
	.pipe(gulp.dest('../src/assets/css'))
	.on('end', done);
})

//监测更改
gulp.task('watch', function() {	
	gulp.watch(['./pages/**/*.html '], ['staticCopy']);
	gulp.watch(['./pages/**/*.js'], ['staticCopy']);
	gulp.watch(['./pages/**/*.scss', 'assets/css/common.scss'], ['sass']);
});

gulp.task('default', ['staticCopy', 'staticSass', 'sass', 'concatJS', 'watch']);