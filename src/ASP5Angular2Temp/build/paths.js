var path = require('path');

var appRoot = 'src/';
var outputRoot = 'wwwroot/';
var tempRoot = 'temp/';
var tempTs = tempRoot + '/ts/';
var tempStyles = tempRoot + '/css/';
var bowerSrc = 'bower_components/';
var imgPaths = [
        'resources/img/**/*.*',
];

var cssPaths = [
    'resources/css/**/*.css',
    'resources/font-awesome/**/*.css',
    bowerSrc + 'bootstrap/dist/css/bootstrap.css'
];

var fontPaths = [
        'resources/font-awesome/fonts/*',
         'resources/fonts/*'
];

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    scss: 'resources/styles/**/*.scss',
    output: outputRoot + '/scripts',
    temp: tempRoot,
    tempTs: tempTs,
    tempStyles: tempStyles,
    imgPaths: imgPaths,
    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',
    npmSrc: './node_modules/',
    outputLibs: outputRoot + '/libs/',
    outputResources: outputRoot + '/resources/',
    outputStyles: outputRoot + '/resources/css',
    outputImages: outputRoot + '/resources/img',
    bowerSrc: bowerSrc,
    fontPaths: fontPaths,
    outputFonts: outputRoot + '/resources/fonts',
    css: cssPaths
};
