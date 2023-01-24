
const Express = require('express');

const cors = require('cors')

const app = Express();
app.use(cors());

app.use(Express.json()) 

const routes = require('./Routes')

app.use(routes)

 
 
let port = 4000;
app.listen(port, ()=>{
    console.log('my server is running on ',port,' port number');
})