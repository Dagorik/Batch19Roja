const request = require('request');
/*
request.get("http://pokeapi.co/api/v2/pokemon/151",
                (error,response,body)=>{
                    console.log(error)
                    console.log(response.statusCode)
                    let respuesta = JSON.parse(body)
                    for(var i = 0; i < respuesta.stats.length;i++){
                        console.log("----------")
                        console.log(respuesta.stats[i].stat.name)
                    }
                });
*/

function peticionPromesa(){
    return new Promise((resolve,reject) =>{
        //El codigo que va a ir a la cola de JS
        request.get("http://pokeapi.co/api/v2/pokemon/33333",
                (err,response,body)=>{
                    if (response.statusCode == 200){
                        let json = JSON.parse(body)
                        resolve(json)
                    }else{
                        reject('Tuvimos un error!! :(')
                    }
        });
    });
}

peticionPromesa()
    .then(response => console.log(response))
    .catch(err => console.log(err))

