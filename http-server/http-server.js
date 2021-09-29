//使用node快速开启一个服务器
//在node中专门提供了一个核心模块
const http = require('http')

const server = http.createServer()

//服务器提供服务
//注册require请求事件，执行回调函数
// request 请求对象
// response 响应对象
server.on('request', (request, response) => {
    const path = request.url
    console.log('收到客户端的请求了', path);
    // response有一个方法，write可以写多次，但是一定要写上end
    //此时服务器能力比较弱，无论输入什么，都只能输出自己定义的
    // if (path === '/'){
    //     response.write(`注册`)
    // }else{
    //     response.write('登录')
    // }
    // 一般只写一个end
    response.setHeader('Content-type','text/html;charset=UTF-8');
    let text;
    if (path === '/'){
        text = '注册'
    }else if (path === '/products'){
        text = {
            123:'213',
            'name':'登录'
        }
    } else{
        text = '登录'
    }
    //text只能是字符串
    response.end(JSON.stringify(text))
})

//绑定端口号，启动服务器
server.listen(8888, () => {
    console.log('服务器启动成功，可以访问http://localhost:8888/');
})