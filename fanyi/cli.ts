import commander = require('commander');

const program = new commander.Command()

program.version('0.0.1')
    .name('fy')
    .usage('<english>') // 传递的参数

program.parse(process.argv)