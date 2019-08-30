const proxy = require("http-proxy-middleware")

module.exports = (app) => {
    app.use(proxy("/api",
        {
            target: "http://api9.wochu.cn",
            changeOrigin: true,
        }))
    app.use(proxy("/client",
        {
            target: "http://api9.wochu.cn",
            changeOrigin: true
        }))
    // app.use(proxy("/v2",
    //     {
    //         target: "http://api.growingio.com",
    //         changeOrigin: true
    //     }))
}

// https://api.growingio.com/v2
