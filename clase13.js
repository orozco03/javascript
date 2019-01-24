var dani = {
  nombre: 'dani',
  apellido: 'orozco',
  edad: 18,
  peso: 47
}

console.log(`Al Inicio del año ${dani.nombre} Pesa ${dani.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso =  persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_AÑO; i++){
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(dani)
  }else if (random < 0.5) {
    adelgazar(dani)
  }

}

console.log(`Al final del año ${dani.nombre} Pesa ${dani.peso}kg`)
