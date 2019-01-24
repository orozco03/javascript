var dani = {
  nombre: 'Dani',
  apellido: 'Orozco',
  altura: '1.50'
}

var maicol = {
  nombre: 'Maicol',
  apellido: 'Castañeda',
  altura: '1.50'
}

var johan = {
  nombre: 'Johan',
  apellido: 'Orozco',
  altura: '1.70'
}

var paola = {
  nombre: 'Paola',
  apellido: 'Gil',
  altura: '1.53'
}


var personas = [dani, maicol, johan, paola]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`);
}
