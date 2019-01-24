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

function imprimirNombreEnMayusculas({nombre}){
   console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(dani)
imprimirNombreEnMayusculas(aleja)
imprimirNombreEnMayusculas({ nombre: 'pepito' })
