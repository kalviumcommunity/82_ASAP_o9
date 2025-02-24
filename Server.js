const express = require('express');
const app = express();
const port = 9000;
const chalk = require('chalk');

app.use(express.json());
app.get('/', (req,res) => {
    res.send("Yo hello ASAP_3 nice to meet ya");
})

app.post('/ping' , (req,res) => {
    console.log("Above app.get was not showing up in the webpage if i use get , so i used app.post")
} )

app.listen(port, (req,res) => {
    console.log(chalk.blue(`Server is running Successfully at http://localhost:${port}`))
})