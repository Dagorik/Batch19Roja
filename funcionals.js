var data = [1,5,3,9,10,5]
const obj = [
    {data:"hola",nombre:"juana"},
    {data:"oli",nombre:"Panchito"},
    {data:"asd",nombre:"pedro"}]
/*
data.map((x,y,z) =>{
    console.log(x)
});
*/
var listaNueva = obj.map((x,y,z)=>{
    return x.nombre
});

var tasks = [
    {
      name     : 'Write for Envato Tuts+',
      duration : 120
    },
    {
      name     : 'Work out',
      duration : 60
    },
    {
      name     : 'Procrastinate on Duolingo',
      duration : 240
    }
  ];

var lista2 = tasks.filter((x,y,z)=>{
    return x.duration>90
});
console.log(lista2)