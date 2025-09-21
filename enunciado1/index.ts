enum EstadoProducto {
  Disponible = "Disponible",
  Agotado = "Agotado",
  Descontinuado = "Descontinuado"
}

type IDProducto = string | number

interface Producto {
  id: IDProducto
  nombre: string
  precio: number
  estado: EstadoProducto
  descripcion?: string
}

function mostrarDetallesProducto(productoAMostrar: Producto): void {
  const ResumenProducto: string[] = [
    `ID: ${productoAMostrar.id}`,
    `Nombre: ${productoAMostrar.nombre}`,
    `Precio: ${productoAMostrar.precio}`,
    `Estado: ${productoAMostrar.estado}`
  ]
  if (productoAMostrar.descripcion) {
    ResumenProducto.push(`Descripción: ${productoAMostrar.descripcion}`)
  }
  console.log("Producto -> " + ResumenProducto.join(" | "))
}

const ProductoIdNum: Producto = {
  id: 1001,
  nombre: "Cafe molido especial",
  precio: 199.99,
  estado: EstadoProducto.Disponible,
  descripcion: "Presentacion de 500 gramos con tueste medio"
}

const ProductoIdTexto: Producto = {
  id: "SKU-12F1S43",
  nombre: "Cafe en grano",
  precio: 259.5,
  estado: EstadoProducto.Agotado
}

mostrarDetallesProducto(ProductoIdNum)
mostrarDetallesProducto(ProductoIdTexto)
