interface Usuario {
  nombre: string
  edad: number
  email?: string
}

function imprimirUsuario(usuario: Usuario): void {
  console.log("Nombre:", usuario.nombre)
  console.log("Edad:", usuario.edad)
  if (usuario.email) {
    console.log("Email:", usuario.email)
  } else {
    console.log("Email: no fue proporcionado")
  }
}

const usuario1: Usuario = {
  nombre: "Gerson Adalid Murillo",
  edad: 22
}

const usuario2: Usuario = {
  nombre: "Javier Perez",
  edad: 21,
  email: "pjavier@correo.com"
}

imprimirUsuario(usuario1)
imprimirUsuario(usuario2)
