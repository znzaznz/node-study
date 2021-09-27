//在这里提供所有的功能
const home = process.env.HOME || require('os').homedir();
const p = require('path')
const inquirer = require('inquirer');
const db = require('./db')
const dbPath = p.join(home,'.todo')

module.exports.add = (title)=>{
    return new Promise(async (resolve, reject)=>{
        if (title.length === 0) reject('增加的变量不能为空')
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
        resolve(`添加${title}成功`)
    })
}

module.exports.clear = async (title = '')=>{
    await db.write([],dbPath)
}

module.exports.showAll = async ()=>{
    // //读取forEach
    const list = await db.read(dbPath)

    inquirer
        .prompt({
            type:'list',
            message:'请问您要做什么？',
            name:'ways',
            default:'展示所有操作',
            choices:[...list.map((i,index)=>{
                return `${i.title}`
            }),'创建任务','返回']
        })
        .then((answers) => {
            console.log(answers.ways);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(1);
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log(2);
                // Something else went wrong
            }
        });
}