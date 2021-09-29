const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', async (request,response)=>{
    const path = request.url
    //此时按照utf-8去解析结果，所以字体变回来了
    //content是告诉客户端我给你发的是什么东西
    response.setHeader('Content-type','text/html;charset=UTF-8')
    let resText = '';
    if (path === '/'){
        resText = '服务已经被启动'
    }else {
        //如果发送的是html格式的字符串，则也要告诉浏览器发送的是text/html的格式内容
        response.setHeader('Content-type','image/png')
        resText =  await http_function('./logo.png')
    }
    response.end(resText)
})

const http_function = (path)=>{
    return new Promise((resolve, reject) => {
        fs.readFile(path,(err,data)=>{
            if (err) return reject(err)
            resolve(data)
        })
    })
}

server.listen(10086,()=>{
    console.log('你的服务已被启动，请打开http://localhost:10086/xhs');
})