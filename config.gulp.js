module.exports = function() {
    var client = './app/';
    var root = './';
    var temp = './.tmp/';
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var config = {
        alljs: [
            './app/**/*.js',
            './*.js'
        ],
        scss: './app/styles/style.scss',
        temp: temp,
        css: temp + 'style.css',
        js: [
            client + '**/*.module.js',
            client + '**/*.js',
            '!' + client + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],
        bower: bower,
        client: client,
        index:  './index.html',
        root:root
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
