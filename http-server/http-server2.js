const http = require('http')

const server = http.createServer()

//server时候http.server的实例
server.on('request',(request,response)=>{
    //在http协议中，数据的获得从来都是流式的，所以无法一下子获取全部数据，只能用数组慢慢拼接
    const arr = []
    request.on('data',(e)=>{
        arr.push(e)
    })
    request.on('end',()=>{
        //此时获取到了整个传送的数据
        console.log(Buffer.concat(arr).toString());
    })
    response.statusCode = 404
    response.end('服务已开启')
})
//开启一个服务
server.listen(8888,()=>{
    console.log('您的服务已开启，请打开http://localhost:8888');
})