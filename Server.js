const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const chalk = require('chalk');


app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
    res.send("Yo hello ASAP_3 nice to meet ya");
})

app.post('/ping' , (req,res) => {

    try{
        const {name,email,phNumner} = req.body;
        if(!name || !email){
            return res.status(400).json({message : "All input fields are required"});
        }
    
        const len = phNumner.length;
        if(len<10 || len>10){
            return res.status(400).json({message : "Invalid phNumber"});
        }
        else{
            return res.status(201).json({message:"Successfull"});
        }
    }

    catch(e){
        console.log(chalk.red("Failure",e));
    }
} )

app.listen(port, (req,res) => {
    console.log(chalk.blue(`Server is running Successfully at http://localhost:${port}`))
})