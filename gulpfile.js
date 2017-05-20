var gulp = require('gulp');
var connect = require('gulp-connect');
var psiNgrok = require('psi-ngrok');
var port = 8080;

var connectServer = function() {
  return connect.server({
    root: 'public',
    port: port
  });
};

function handleError(err) {
  console.log(err.toString());
  process.exit(-1);
}

gulp.task('pagespeed', function () {
  psiNgrok({
    pages: ['index.html'],
    port: port,
    onBeforeConnect: connectServer,
    onError: handleError,
    options: {
      threshold: 80
    }
  });
});

gulp.task('default', ['pagespeed']);
