/**
 * @file bird配置文件
 * @author Erik Peng<pengxiaolong@baidu.com>
 */


var npath = require('path');

module.exports = {
    // bird 的名称, 该名称也会作为 demo server 的一个信息传过去
    name: '24Points',

    middleware: true,

    // 默认的 静态资源 rootC
    root: '../../src/client',
    // root: npath.resolve(__dirname),

    // 目标后端, 默认为不设置
    useServer: 'serverA',

    // 所有预设的 servers
    servers: {
    },

    mockRoot: '.',
    defaultIndex: 'index.html',

    routes: [
        {test: '/mock/info', mock: 'mock/info.js'},
        {test: '/ws123/'},
        {test: '/', static: '/'}
    ],
    // 是否打印出debug信息
    debug: false,
    shouldSendDemo: '',
    demos: {}
};