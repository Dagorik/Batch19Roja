class Largometraje{
    constructor(tiempo){
        this.tiempo = tiempo
    }

    getTiempo(){
        return this.tiempo
    }
}


class Pelicula extends Largometraje {
    constructor(tiempo,genero){
        super(tiempo)
        this.genero = genero
    }

}

class Documental extends Largometraje {
    constructor(tiempo,director){
        super(tiempo)
        this.director = director
    }

}

class Deportes extends Largometraje{
    constructor(tiempo,juego){
        super(tiempo)
        this.juego = juego
    }
}

class Cine{
    constructor(largometraje){
        this.largometraje = largometraje
    }

    reproducirLargometraje(){
        return `El largometraje va a durar ${this.largometraje.getTiempo()}`
    }
}

var doc = new Documental("90 min","El perro")
var pel = new Pelicula("120 min","Tron")
var dep = new Deportes("95 min","Real madrid vs barsa")

var cine = new Cine(pel)
var rep = cine.reproducirLargometraje()
console.log(rep)

