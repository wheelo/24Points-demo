/**
 * @file server: Webpack Dev Server
 * @author Erik Peng<wheelo@163.com>
 */

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var WebpackDevServer = require('webpack-dev-server');
var chalk = require('chalk');
var compiler = webpack(config);

var bird = require('birdv3');
var globalApp = {};


var app = new WebpackDevServer(compiler, {
    inline: false, // 实时刷新
    hot: true, // hot update
    noInfo: false,
    // historyApiFallback: true,  // 无刷新更改地址栏
    stats: {
        chunks: false,
        chunkModules: false,
        hash: false,
        colors: {level: 2, hasBasic: true, has256: true, has16m: false}
    },
    watchOptions: {
        aggregateTimeout: 180,
        poll: true
    },
    // compress: true,
    quiet: config.dashboard,
    lazy: false,
    setup: function(app) {
        globalApp = app;
    }
});


// opn
compiler.plugin('done', function () {
    process.nextTick(function () {
        if (config.open) {
            var open = require('open');
            open(config.openUrl);
        }
        globalApp.use(bird('./bird/birdfile'));
    });
});


if (config.dashboard) {
    var Dashboard = require('webpack-dashboard');
    var DashboardPlugin = require('webpack-dashboard/plugin');
    var dashboard = new Dashboard();
    compiler.apply(new DashboardPlugin(dashboard.setData));
}


app.listen(config.listenPort, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(chalk.bold.green('Listening at http://localhost:' + config.listenPort + '/'));
});