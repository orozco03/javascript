var signo = prompt('¿Cual es tu signo?')

switch (signo) {
  case 'acuario':
     console.log('Los astros se alinearán esta semana, propiciando un cambio significativo en el trabajo, pero Acuario deberá tomar hoy ciertas decisiones para llegar a sus objetivos más ambiciosos, tanto profesionales como económicos, enero será un periodo muy prospero para Acuario en su carrera.')
    break;
  case 'piscis':
    console.log('La tensión personal que está viviendo Piscis en este momento podría afectar hoy su desempeño laboral, por ello, será importante tener paciencia y dejar a un lado los problemas')
    break;
  case 'cancer':
    console.log('Surgirá esta semana un viaje inesperado de trabajo que Cáncer no podrá aplazar, deberá empezar a priorizar algunos asuntos y tener todo muy bien planificado si quiere expandirse hacia nuevos horizontes, será una experiencia en la cual, Cáncer adquirirá más confianza si actúa con decisión en sus habilidades.')
    break;
  case 'aries':
    console.log('Con la razón y la lógica gobernando las inquietudes profesionales de Aries, provocara muchos cambios a finales de enero en el trabajo, que serán positivos si mantiene una actitud decisiva')
    break;
  case 'tauro':
    console.log('Tener cierta motivación en lo que hace, hará que hoy Tauro sea más productivo en el trabajo, fluirá la creatividad que le permitirá tener una mejor perspectiva de futuro');
    break;
  case 'geminis':
    console.log('La experiencia y la actitud positiva de Géminis ante las dificultades que se presenten hoy en el trabajo, ayudarán a superar con éxito un problema que no deja progresar con mayor eficacia');
    break;
  case 'leo':
    console.log('Antes de finalizar enero, los astros propiciarán un encuentro con alguien que ayudará a Leo reincorporarse al mercado laboral con un nuevo proyecto cuyas expectativas son muy prometedoras para despuntar en su carrera');
    break;
  case 'virgo':
    console.log('La energía de los astros acelerará algunos asuntos pendientes que Virgo solo estaba posponiendo, esto provocará que, a finales de enero');
    break;
  case 'libra':
    console.log('La segunda quincena de enero, será el mejor periodo para que Libra invierta ese dinero que tiene preparado para nuevas propuestas con gran futuro');
    break;
  case 'escorpion':
    console.log('Se aproximan nuevas circunstancias en el trabajo que provocarán una mejoría económica para Escorpio en el primer trimestre del año');
    break;
  case 'sagitrio':
    console.log('El éxito y satisfacción en la vida profesional de Sagitario, dependerá de la ambición y motivación que mantenga en el trabajo');
    break;
  case 'capricornio':
    console.log('Capricornio conocerá hoy a una persona importante para el progreso de su carrera, será una oportunidad que no deberá desaprovechar que le hará adquirir nuevas experiencias');
    break;
  default:
    console.log('No es un signo zodiacal valido');
    break;
}
