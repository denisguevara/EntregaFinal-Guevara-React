import { useContext } from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import '../styles/CartWidget.css'

import { CartContext } from '../context/CartContext';

const cartWidget = () => {

  const { cart, setCart } = useContext(CartContext)

  const cantidadCarrito = () => {
    return cart.reduce((acc, producto) => acc + producto.count, 0)
  }

  return (
    <div className='carrito'>
      <span className='icono-carrito'>
        <i><FaCartShopping /></i>
      </span>
      <span className="texto-carrito">{cantidadCarrito()}</span>
    </div>
  )
}

export default cartWidget