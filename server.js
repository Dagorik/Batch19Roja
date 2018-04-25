const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Alumno = require('./mongooseClient');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send({mensaje:'Esta es mi primera API'})
});


//Params
app.get('/user/:uid',(req,res)=>{
    //const uid = req.params.uid
    const {uid} = req.params
    Alumno.findById(uid).exec().then((alumno) => {
        res.send(alumno)
    }).catch((err) => {
        res.send(err)
    })
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
    var newAlumno = Alumno({
        name,
        last_name
    });

    newAlumno.save((err, alumno) =>{
        if (err) throw err;
        res.send(alumno)
    });
    
});


app.get('/user',(req,res) => {
    Alumno.find().exec().then((alumnos) => {
        res.send(alumnos)
    }).catch((err) => {
        res.send({error:err});
    })
})

app.put('/user/:uid', (req,res) => {
    const {uid} = req.params

    Alumno.findByIdAndUpdate(uid,{$set:req.body}).exec().then(
        (alumno) => res.send(alumno)
    ).catch(
        (err) =>  res.send(err)
    )
})


app.delete('/user/:uid', (req,res) => {
    const {uid} = req.params

    Alumno.findByIdAndRemove(uid).exec().then(
        (alumno) => res.send({"message":"Alumno borrado"})
    ).catch(
        (err) =>  res.send(err)
    )
})




app.listen(3000,() =>{
    console.log('Server corriendo en el puerto 3000')
});