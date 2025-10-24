const {Command} =require("commander");
const fs = require('fs');
const program=new Command();

program.name('counter')
    .description('cli to do file based tasks')  
    .version('0.8.0');

program.command('add-todo')
    .description('Add the to-do ')
    .argument('<value>','add the to do')
    .action((value) => {
        let value1=value;
        console.log(value1)
    })
program.command('delete-todo')
    .description('Delete a to do')
    .argument('<value>','delete a to do')
    .action((file) => {
    })


program.parse();