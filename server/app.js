const express = require('express');
const graphHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
import "./App.css";
const app=express();
app.use(cors());
mongoose.connect('mongodb://localhost/grapql',{useUnifiedTopology:true,useNewUrlParser:true});
mongoose.connection.once('open',()=>{
    console.log('DB is connected');
})

app.use("/graphql",graphHTTP({

     schema,
     graphiql:true

}));

app.listen(4000,()=>{
    console.log('server is running on port 4000');
})