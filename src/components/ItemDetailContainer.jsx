import { useParams } from 'react-router-dom'
import '../styles/ItemDetailContainer.css'
import ItemDetail from './ItemDetail.jsx'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const { prods } = useContext(CartContext)

  var productoEncontrado = prods.find((producto) => producto.id === id)

  return (
    <div className='container-item'>
      <ItemDetail
        producto={productoEncontrado}
      />
    </div>
  )
}

export default ItemDetailContainer