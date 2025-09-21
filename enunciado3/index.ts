function repetirNombre(nombre: string, cantidad: number): string[] {
  const nombres: string[] = []
  for (let i = 0; i < cantidad; i++) {
    nombres.push(nombre)
  }
  return nombres
}

const resultado: string[] = repetirNombre("Gerson Adalid Murillo", 3)
console.log(resultado)
