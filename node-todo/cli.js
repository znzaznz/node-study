const { program } = require('commander');
const api = require('./index')

program
    .command('add')
    .description('add a task')
    .action((source,commendObj) => {
        //进行添加
        api.add(commendObj.args).then(()=>{
            console.log('添加成功')
        },()=>{
            console.log('添加失败');
        })
    })

program
    .command('clear')
    .description('clear all tasks')
    .action((source,commendObj) => {
        //进行删除
        api.clear()
    });

program.version('0.0.1','-v,--version').parse(process.argv)
