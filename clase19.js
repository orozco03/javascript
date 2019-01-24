var dani = {
  nombre: 'Dani',
  apellido: 'Orozco',
  altura: 1.90
}

var maicol = {
  nombre: 'Maicol',
  apellido: 'Castañeda',
  altura: 1.50
}

var johan = {
  nombre: 'Johan',
  apellido: 'Orozco',
  altura: 1.88
}

var paola = {
  nombre: 'Paola',
  apellido: 'Gil',
  altura: 1.53
}

const esAlta = ({ altura }) => altura > 1.8


var personas = [dani, maicol, johan, paola]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona =>({
    ...persona,
    altura: persona.altura * 100

})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms);
