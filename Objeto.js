//Perro
class Perro{
    constructor(color,tamano,peso){
        this.color = color
        this.tamano = tamano
        this.peso = peso
    }
    //Metodos
    ladrar(){
        return 'Guaau'
    }

    getColor(){
        return this.color
    }

    setColor(newColor){
        this.color = newColor
    }
    
}

var ayudanteSanta = new Perro("Cafe","Grande","Gordo");
var pug = new Perro("Blanco","Prqueno","Gordo");

var x = pug.getColor()
console.log(x)










