class CuentaBancaria {
  titular: string
  saldo: number

  constructor(Titular: string) {
    this.titular = Titular
    this.saldo = 0
  }

  depositar(cantidad: number): void {
    if (cantidad <= 0) {
      console.error("El monto para depositar debe ser positivo")
      return
    }
    this.saldo = this.saldo + cantidad
    console.log("Depósito realizado. Saldo actual:", this.saldo)
  }

  retirar(Retiro: number): void {
    if (Retiro <= 0) {
      console.error("El monto para retirar debe ser positivo")
      return
    }
    if (Retiro > this.saldo) {
      console.error("No hay saldo suficiente para realizar el retiro")
      return
    }
    this.saldo = this.saldo - Retiro
    console.log("Retiro realizado. Saldo actual:", this.saldo)
  }

  consultarSaldo(): void {
    console.log(`El saldo actual de ${this.titular} es: ${this.saldo}`)
  }
}

const cuentaBancaria = new CuentaBancaria("Gerson Adalid Murillo")
cuentaBancaria.consultarSaldo()
cuentaBancaria.depositar(500)
cuentaBancaria.retirar(130)
cuentaBancaria.consultarSaldo()
