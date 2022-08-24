const express = require('express');
const colors  = require('colors');
const dotenv  = require('dotenv');
const pagerouts = require('./routes/pageroutes');





// express init
const app = express();


// dotenv file config

dotenv.config();


// get env file value

const port = process.env.SERVER_PORT || 4040 ;


// static folder

app.use(express.static('./public'));


// 

app.use(pagerouts);



// express server create

app.listen(port, (req , res) => {
    
    console.log(`server is raning on port ${port}`.bgGreen);
})