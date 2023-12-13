import React from 'react'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { category } = useParams()
  const productos = [
    { id: 1, nombre: "Producto A", description: "Descripcion de Producto A", stock: 5, category: "cat1" },
    { id: 2, nombre: "Producto B", description: "Descripcion de Producto B", stock: 10, category: "cat2" },
    { id: 3, nombre: "Producto C", description: "Descripcion de Producto C", stock: 20, category: "cat3" },
    { id: 4, nombre: "Producto D", description: "Descripcion de Producto D", stock: 15, category: "cat1" },
    { id: 5, nombre: "Producto E", description: "Descripcion de Producto E", stock: 25, category: "cat1" },
    { id: 6, nombre: "Producto F", description: "Descripcion de Producto F", stock: 30, category: "cat3" },
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  const filteredProducts = productos.filter((producto) => producto.category === category)

  return (
    <Center p='1rem'>

      <ItemList
        productos={filteredProducts}
      />
    </Center>
  )
}

export default ItemListContainer