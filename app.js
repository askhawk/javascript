const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('./public'));



app.get('/', (req, res) => {
    res.status(200).send('<h2>home page</h2>');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
})




app.listen(process.env.HTTP_PORT, ()=> {
    console.log(`Application running on post ${process.env.HTTP_PORT}...`);
})