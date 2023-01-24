
const http = require('http');
const path = require('path');

const url = require('url')

// creating the server
// const data = {
//     "employee": { "name": "John", "age": 30, "city": "New York" }

// }

// const server = http.createServer((req, res) => {
//     // res.writeHead(200, "application/json");
//     res.writeHead(200, {'content-Type':'text/html'});


//     res.end('<h1>Hello world this is yuvraj singh chouhan</h1>')

//         //   res.end(JSON.stringify(data))

// })


const data = require('../Local module/data.json')


const server = http.createServer((req, res) => {
    let id = req.url
    console.log(id);
    const parseUrl = url.parse(req.url);

    const pathUrl = parseUrl.pathname;
    
    let dataId = pathUrl.split('')
    let intId  =parseInt(dataId[1])
    console.log('intId',intId);

    if (req.url === '/') {

        res.end("welcome");

    } else if (req.url === '/home') {

        res.end("this is the home page");

    } else if (req.url === '/home/data') {

        res.end(JSON.stringify(data));

    } else if (req.url === `/${intId}`) {

        const mydata = JSON.parse(data)
       
        const filterdata = mydata.filter((val) => val.id === intId);

        res.end(JSOn.stringify(filterdata))
    }
    else {
        res.end("Page not found");
    }

})






let port = 3000
server.listen(port, () => {
    console.log('my server is started on  ', port);
})