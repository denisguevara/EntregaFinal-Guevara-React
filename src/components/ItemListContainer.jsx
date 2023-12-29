import {React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase/config.js'

const ItemListContainer = () => {

  const { categoriaId } = useParams()
  const [productos, setProductos] = useState([])
  const { setProds } = useContext(CartContext)
  var productosFiltrados = []

  useEffect(() => {
    const productosRef = collection(db, 'productos')
    getDocs(productosRef).then((res) => {
      const productosData = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setProductos(productosData);
      setProds(productosData);
    });

    
  }, [categoriaId])


  //*si categoriaId es undefined muestra todos los productos
  if (categoriaId) {
    productosFiltrados = productos.filter((producto) => producto.categoria === categoriaId)
  } else {
    productosFiltrados = productos
  }


  return (
    <>
      <ItemList
        productosFiltrados = {productosFiltrados}
      />
    </>
  )
}

export default ItemListContainer