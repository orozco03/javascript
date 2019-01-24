var dani = {
  nombre: 'dani',
  apellido: 'orozco',
  edad: 18,
  peso: 47
}

console.log(`Al Inicio del año ${dani.nombre} Pesa ${dani.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso =  persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = dani.peso - 3
var dias = 0

while (dani.peso > META) {

 if (comeMucho()) {
   aumentarDePeso(dani)
 }
 if (realizaDeporte()) {
   adelgazar(dani)
 }
 dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${dani.nombre} adelgazo 3kg`)
