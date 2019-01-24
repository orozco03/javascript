function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = 1.80
}

Persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

var dani = new Persona('Dani', 'Orozco')
var aleja = new Persona('Aleja', 'Orozco')

if (this.altura < 1.80 ) {
  console.log(`Hola,soy alto`);
}else {
  console.log(`Hola,no soy alto`);
}
