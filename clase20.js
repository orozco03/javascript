var dani = {
  nombre: 'Dani',
  apellido: 'Orozco',
  altura: 1.90,
  cantidadDeLibros: 180
}

var maicol = {
  nombre: 'Maicol',
  apellido: 'Castañeda',
  altura: 1.50,
  cantidadDeLibros: 50
}

var johan = {
  nombre: 'Johan',
  apellido: 'Orozco',
  altura: 1.88,
  cantidadDeLibros: 70
}

var paola = {
  nombre: 'Paola',
  apellido: 'Gil',
  altura: 1.53,
  cantidadDeLibros: 30
}

const esAlta = ({ altura }) => altura > 1.8


var personas = [dani, maicol, johan, paola]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona =>({
    ...persona,
    altura: persona.altura * 100

})

var personasCms = personas.map(pasarAlturaACms)

//var acum = 0

//for (var i = 0; i < personas.length; i++) {
//    acum = acum + personas[i].cantidadDeLibros
//}

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);
