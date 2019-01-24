var dani = {
  nombre: 'dani',
  apellido: 'orozco',
  edad: 28
}

var aleja = {
  nombre: 'aleja',
  apellido: 'gil',
  edad: 19
}

function imprimirNombreEnMayusculas(persona){
  var {nombre} = persona
  var {edad} = persona
   console.log('Hola, me llamo' + ' ' + nombre.toUpperCase() + ' ' + 'y tengo' + ' ' + edad + ' ' + 'años')
}

imprimirNombreEnMayusculas(dani)
imprimirNombreEnMayusculas(aleja)
//imprimirNombreEnMayusculas({ nombre: 'pepito' })
