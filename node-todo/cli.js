#!/usr/bin/env node

const program = require('commander');
const api = require('./index')
const {off} = require("commander");

program
    .command('add')
    .description('add a task')
    .action(async (...args) => {
        const arguments = args.slice(0,args.length - 1)
        // //进行添加
        try{
            const res = await api.add(arguments)
            console.log(res);
        }catch (e){
            console.log(e);
        }
    })

program
    .command('clear')
    .description('clear all tasks')
    .action((...args) => {
        //进行删除
        api.clear()
    });

if (process.argv.length === 2){
    api.showAll()
}

program.version('0.0.1','-v,--version').parse(process.argv)

