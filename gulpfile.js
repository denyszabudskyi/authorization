const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const spritePNG = require('./gulp/tasks/spritePNG');
const serve = require('./gulp/tasks/serve');

const development = gulp.parallel(pug2html, script, styles, imageMinify);

gulp.task('default', gulp.series(
    clean,
    development,
    serve
));

const production = gulp.parallel(pug2html, script, styles, imageMinify);

gulp.task('build', gulp.series(
    clean,
    production
));
