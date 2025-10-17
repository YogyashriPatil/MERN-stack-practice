// const fs=require('fs');

// function main(filename) {
//     console.log(process.argv)
//     fs.readFile(filename, "utf8",function (err,data){
//         let total = 0;
//         for(let i=0;i<data.length;i++)
//         {
//             // console.log(data[i])
//             if(data[i] === " "){
//                 total++;
//             }
//         }
//         console.log(total+1)
//     })
// }
// main("a.txt")


const {Command} =require("commander");
const fs = require('fs');
const program=new Command();

program.name('counter')
    .description('cli to do file based tasks')  
    .version('0.8.0');

program.command('count')
    .description('count the number of lines in a file')
    .argument('<file>','file to count')
    .action((file) => {
        fs.readFile(file,'utf-8', (err,data) => {
            if(err) {
                console.log(err);
            }
            else {
                const lines = data.split(' ').length;
                console.log(`there are ${lines} lines in ${file}`)
            }
        })
    })
program.command('countline')
    .description('count the number of lines in a file')
    .argument('<file>','file to count')
    .action((file) => {
        fs.readFile(file,'utf-8', (err,data) => {
            if(err) {
                console.log(err);
            }
            else {
                const lines = data.split('\n').length;
                console.log(`there are ${lines} lines in ${file}`)
            }
        })
    })


program.parse();