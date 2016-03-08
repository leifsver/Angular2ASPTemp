var path = require('path');

var appRoot = 'src/';
var outputRoot = 'wwwroot/scripts/';
var tempRoot = 'temp/';
var tempTs = tempRoot + '/ts/';
var bowerComponentsRoot = 'bower_components/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    style: 'resources/**/*.css',
    output: outputRoot,
    temp: tempRoot,
    tempTs: tempTs,
    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',
    bowerComponentsRoot: bowerComponentsRoot
};
