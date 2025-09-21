enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miércoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sábado = "Sábado",
  Domingo = "Domingo"
}

function esFinDeSemana(dia: DiaSemana): boolean {
  switch (dia) {
    case DiaSemana.Sábado:
    case DiaSemana.Domingo:
      return true
    default:
      return false
  }
}

console.log("¿Sábado es fin de semana?", esFinDeSemana(DiaSemana.Sábado))
console.log("¿Miércoles es fin de semana?", esFinDeSemana(DiaSemana.Miércoles))
