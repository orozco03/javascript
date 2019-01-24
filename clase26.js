
class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    var {nombre, apellido} = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) { v
      fn(nombre,apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.60
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    var {nombre, apellido} = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if (fn) {
      fn(nombre,apellido, true)
    }
  }
}

function responerSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah,no sabia que eras desarrollador/a`);
  }
}

var dani = new Persona('Dani', 'Orozco',1.72)
var aleja = new Desarrollador('Aleja', 'Orozco',1.65)

dani.saludar()
aleja.saludar(responerSaludo)
