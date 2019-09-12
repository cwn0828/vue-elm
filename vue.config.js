module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        // 是否热更新的启动
        hotOnly: false,
        // 配置跨域的方式
        // 1.前端代理：proxy形式
        // 2.服务器代理(熟悉后端语言)：编写写后端代码与前端在同一服务器下
        // 3.后端根据IP地址设置访问白名单
        // 4.JSONP，后端需要做callback的设定
        proxy: { // 配置跨域
            '/v1': {
                target: 'https://elm.cangdu.org/v1',
                xhrFields: { withCredentials: true }, crossDomain: true,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            },
            '/v2': {
                target: 'https://elm.cangdu.org/v2',
                xhrFields: { withCredentials: true }, crossDomain: true,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/v2': ''
                }
            },
            '/img': {
                target: 'https://elm.cangdu.org/img',
                xhrFields: { withCredentials: true }, crossDomain: true,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/img': ''
                }
            },
        },
        before: app => { }
    }
}
