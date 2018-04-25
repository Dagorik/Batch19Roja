const mongoose = require('mongoose');
mongoose.connect('mongodb://prueba:123456@ds259079.mlab.com:59079/cinta-roja');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const alumnoSchema = new Schema({
    alumno:ObjectId,
    name: String,
    last_name: String,
    email: String,
    phone: String,
    city: String,
},{
    versionKey: false
});


var Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;