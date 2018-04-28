const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Alumno = require('./mongooseClient')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Create students
app.post('/api/v1/user/create',(req,res)=>{
    const {name,last_name,age} = req.body
    let newAlumno = Alumno({
        name,
        last_name,
        age
    });
    newAlumno.save((err,alumno)=>{
        if (err) throw err;
        res.status(201).send(alumno);
    });
});

//Todos los usuarios
app.get('/api/v1/user',(req,res)=>{
    Alumno.find().exec().then(alumnos => {
        res.send(alumnos)
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//Traer un usuario por su id
app.get('/api/v1/user/:uid',(req,res)=>{
    const {uid} = req.params
    Alumno.findById(uid).exec().then(alumno =>{
        res.send(alumno)
    }).catch(err =>{
        res.status(404).send(err)
    });
});

app.delete('/api/v1/user/:uid',(req,res)=>{
    const {uid} = req.params
    Alumno.findByIdAndRemove(uid).exec().then(
        alumno => res.send({message:'Alumno borrado'})
    ).catch(err=> res.send(err));
});
//Actualizar por partes
app.patch('/api/v1/user/:uid',(req,res)=>{
    const {uid} = req.params
    Alumno.findByIdAndUpdate(uid,req.body,(err,student)=>{
        Alumno.findById(uid).exec()
        .then(studet1 =>res.send(studet1))     
    }).catch( err => res.send(err));
});

//Busqueda por nombre
//api/v1/find?nombre=Oscar
app.get('/api/v1/find',(req,res)=>{
    const {name} = req.query
    Alumno.find({name}).exec()
        .then(alumnos => res.send(alumnos))
        .catch(err => res.send(err))
});

app.put('/user/:uid', (req,res) => {
    const {uid} = req.params
    Alumno.findByIdAndUpdate(uid,{$set:req.body}).exec().then(
        (alumno) => res.send(alumno)
    ).catch(
        (err) =>  res.send(err)
    )
})


app.listen(3000,()=>{
    console.log('Server on 3000')
});