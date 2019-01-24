var dani = {
  nombre: 'dani',
  apellido: 'orozco',
  edad: 18,
  ingeniero: true,
  cocinero: true,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero === true) {
    console.log('Ingeniero')
  }

  if (persona.cocinero === true) {
    console.log('Cocinero')
  }

  if (persona.dj === true) {
    console.log('DJ')
  }

  if (persona.guitarrista === true) {
    console.log('Guitarrista')
  }

  if (persona.drone === true) {
    console.log('Piloto de Drone')
  }
}


imprimirProfesiones(dani)


const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){

  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  }else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(dani)
