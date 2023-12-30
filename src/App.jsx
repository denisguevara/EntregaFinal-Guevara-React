import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

const App = () => {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            {/* <ItemListContainer />
            <ItemDetailContainer /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/categoria/:categoraId" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          
          
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </>
    
  )
}

export default App