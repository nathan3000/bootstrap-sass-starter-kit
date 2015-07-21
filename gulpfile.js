var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	bootstrapDir: './bower_components/bootstrap-sass',
	sassDir: './sass',
	cssDir: './dist/css',
	fontsDir: './dist/fonts'
}

gulp.task('css', function() {
	return gulp.src(config.sassDir + '/application.scss')
		.pipe(sass({includePaths: [config.bootstrapDir + '/assets/stylesheets']
	}))
		.pipe(gulp.dest(config.cssDir));
});

gulp.task('fonts', function() {
	return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
		.pipe(gulp.dest(config.fontsDir));
});

gulp.task('watch', function() {
	gulp.watch(config.sassDir + '/**/*.scss', ['css']);
})

gulp.task('default', ['css', 'fonts']);