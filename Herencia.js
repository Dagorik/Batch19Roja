class Animal{
    constructor(nombre,peso){
        this.nombre = nombre
        this.peso = peso
    }

    getNombre(){
        return this.nombre
    }

    comer(comida){
        return `${this.nombre} esta comiendo ${comida}`
    }
}


class Perro extends Animal{
    constructor(raza,nombre,peso){
        super(nombre,peso)
        this.raza = raza
    }

    getRaza(){
        return this.raza
    }
    
}

class Gato extends Animal{
    constructor(pelo,nombre,peso){
        super(nombre,peso)
        this.pelo = pelo
    }

    getPelo(){
        return this.pelo
    }
    
}
var pug = new Perro("Pug","Fido","10kg")
var x = pug.getRaza('Croquetas')
console.log(x)

var gato = new Gato("Cafe","Gato","1kg")
var x = gato.getPelo('Pescado')
console.log(x)