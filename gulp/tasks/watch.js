var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        
        online: true,
        tunnel: true,
        logLevel: "debug",
        server: {
           baseDir: "./app"
        }
        
        
    });
    watch('./app/index.html', function(){
       browserSync.reload();
    })
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');

    })

})
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});