import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const longitud = cart.length

  console.log(longitud)

  const comision = "React en Coderhouse"

  return (

    <CartContext.Provider value={{ cart, setCart, comision, longitud }}>

      {children}


    </CartContext.Provider>

  )
}

export default ShoppingCartProvider
