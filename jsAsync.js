/*
console.log(1)
setTimeout(function callback(){
    console.log(2)
},3000)
console.log(3)
*/

//Cuello de botella
console.log(1)
setTimeout((error,resolve)=>{
    if(error) regresa mensaje de error al usuario

    pintar resolve.name
    console.log(2)
},3000)
for(var i = 0; i <9999999999; i++);
console.log(3)

