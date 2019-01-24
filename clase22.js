function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}
Persona.prototype.soyAlto = function(){
  return this.altura > 1.60
}

var dani = new Persona('Dani', 'Orozco',1.72)
var aleja = new Persona('Aleja', 'Orozco',1.65)

dani.soyAlto()
aleja.soyAlto()
