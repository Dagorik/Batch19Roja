const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send({mensaje:'Esta es mi primera API'})
});

app.get('/saludo',(req,res)=>{
    res.send({mensaje:'Hola'})
});

//Params
app.get('/user/:uid',(req,res)=>{
    //const uid = req.params.uid
    const {uid} = req.params
    res.send({id:uid})
});

//Query
app.get('/busqueda',(req,res)=>{
    const {q,color} = req.query
    res.send({busqueda:q,
            color:color})
});

//POST
app.post('/create/user',(req,res)=>{
    const {name, last_name} = req.body
    res.status(201).send({id:1,
            name,
        last_name})
});

app.listen(3000,() =>{
    console.log('Server corriendo en el puerto 3000')
});