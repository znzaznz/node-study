//在这里提供所有的功能
const home = process.env.HOME || require('os').homedir();
const p = require('path')
const db = require('./db')
const dbPath = p.join(home,'.todo')

module.exports.add = async (title = 'add')=>{
    //面向接口编程
    const read  = await db.read(dbPath)
    //读取之前的任务
    title.map(item=>(
        read.push({
            title:item,
            done:false
        })
    ))
    //往里面添加一个title
    await db.write(read,dbPath)
}

module.exports.clear = async (title = '')=>{
    await db.write([],dbPath)
}

module.exports.showAll = async ()=>{
    //读取forEach
    const list = await db.read(dbPath)
    //打印forEach
    list.map(i=>{
        console.log(i);
    })
}