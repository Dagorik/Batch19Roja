const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

function createUser(name,last_name,biografia,age){
    const URI = 'authors/'
    var URL = URL_BASE + URI
    let jsonSend = {
        "name":name,
        "last_name":last_name,
        "nacionalidad":"MX",
        "biography":biografia,
        "gender":"M",
        "age":age
    }
    return new Promise((resolve,reject) =>{
        request.post({url:URL,form:jsonSend},(err,status,body) =>{
            status.statusCode == 201 
            ? resolve(JSON.parse(body)) 
            : reject("Error") 
        });
    });
}


function patchUser(id,age){
    const URI = `authors/${id}/`
    var URL = URL_BASE + URI
    let jsonSend = {
        "age":age
    }
    return new Promise((resolve,reject) =>{
        request.patch({url:URL,form:jsonSend},(err,status,body) =>{
            status.statusCode == 200 
            ? resolve(JSON.parse(body)) 
            : reject("Error") 
        });
    });
}

createUser("PRUEBA","prueba2","ESTA ES UNA PRUEBA",21)
    .then(user => {
        console.log("---->",user)
        return patchUser(user.id,45)
    })
    .then(modifyUser => console.log(modifyUser))
    .catch(err => console.log(err))
