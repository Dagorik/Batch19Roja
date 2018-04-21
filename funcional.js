/*
Bajo el capó, map pasa tres argumentos a tu callback:

El item actual en el array
El indice en el array del elemento actual
El array entero al que estas mapeando.
*/
const obj = [{data:"hola",nombre:"juana"},{data:"oli",nombre:"juana"},{data:"asd",nombre:"pedro"}]
var newList = obj.map((x,y,z)=> {
    //console.log(y)
    //console.log(z)
    //console.log(x.nombre)
    return x.nombre
});

console.log(newList)

var tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];

var dificultd = tasks.filter((x,y,z)=>{
    
    return x.duration<120
});
console.log(dificultd)





