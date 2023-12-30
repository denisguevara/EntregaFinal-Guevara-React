import React from 'react'
import Item from './Item.jsx'
import '../styles/ItemList.css'


const ItemList = ({ productosFiltrados }) => {


  return (
    <div className='container-itemList'>
      {
        productosFiltrados.map((p) => {
          return (
            <div key={p.id}>
              <Item
                nombre={p.nombre}
                id={p.id}
                descripcion={p.descripcion}
                precio={p.precio}
                categoria={p.categoria}
                stock={p.stock}
                imagen={p.imagen}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList