const http = require('http')
const fs = require("fs");
const path = require('path')
const url = require('url')

const server = http.createServer()

server.on('request', (request, response) => {
    const publicDir = path.resolve(__dirname, 'public')
    const {method, url: p, headers} = request
    const newUrl = new url.URL(request.url, `http://${request.headers.host}/`).pathname
    switch (newUrl) {
        case '/html':
            response.setHeader('Content-type', 'text/html;charset=UTF-8')
            fs.readFile(path.resolve(publicDir, 'index.html'), (error, data) => {
                if (error) throw error
                response.end(data.toString())
            })
            break;
        case "/js":
            response.setHeader('Content-type', 'text/js;charset=UTF-8')
            fs.readFile(path.resolve(publicDir, 'index.js'), (error, data) => {
                if (error) throw error
                response.end(data.toString())
            })
            break;
        case "/css":
            response.setHeader('Content-type', 'text/css;charset=UTF-8')
            fs.readFile(path.resolve(publicDir, 'style.css'), (error, data) => {
                if (error) throw error
                response.end(data.toString())
            })
            break;
        default:
            response.end('-1')
    }
})

server.listen(8888, () => {
    console.log('服务器已经在http://localhost:8888启动');
})