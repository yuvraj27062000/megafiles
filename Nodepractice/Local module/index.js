
// const add = require("./add");
// const path  = require('path');

// const data = require("./data.json")

// const os = require('os')
// console.log("hello yuvraj singh chouhan")
// const sum = add(4)

// console.log(sum);

// let dirname = __dirname
// console.log('dirname  ',dirname);
// let filename = __filename
// console.log('filename  ', filename);
// let basename = path.basename(filename,'.js')
// console.log( 'basename  ',basename);
// let extention = path.extname(filename,'.js')
// console.log('extname  ' , extention);


// console.log(path.parse(__filename));

// // console.log(data);   

// console.log('start');

//  function innerfun(name) {
//     console.log(`my name is ${name}`)
// }

// function outerFun(innerfun) {
//     let name = "yuvraj";

//     innerfun(name);
// }

// outerFun(innerfun)
// console.log('end');
 




// event 


const eventEmitter = require('events')

const emiter = new eventEmitter()

emiter.on('login',(name)=>{
    console.log(`${name} is logined `);
})



emiter.emit('login', 'yuvraj')

emiter.addListener('logout',(name,time)=>{
    console.log(`${name} is logout after ${time} minutes `);
})



emiter.emit('logout','yuvraj', 20)
