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

   console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(dani)
imprimirNombreEnMayusculas(aleja)
//imprimirNombreEnMayusculas({ nombre: 'pepito' })


function cumpleanos(persona){
  return{
    ...persona,
    edad:persona.edad + 1
  }
}
