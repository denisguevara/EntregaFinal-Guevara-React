import { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount'
import '../styles/ItemDetail.css'
import { CartContext } from '../context/CartContext';
import ToastCustom from './ToastCustom';



const ItemDetail = ({ producto }) => {

  // Contador para ver items seleccionados
  const [count, setCount] = useState(1)
  // Constante para manejar el Toast
  const [show, setShow] = useState(false);
  // Context para manejar el estado del carrito
  const { cart, setCart } = useContext(CartContext)

  // Sumar al carrito
  const handleAgregarCarrito = () => {
    count < producto.stock && setCount(count + 1)
  };

  // Restar al carrito
  const handleQuitarCarrito = () => {
    count > 1 && setCount(count - 1)
  };

  // Agregar productos al carrito
  const handleAddToCart = () => {
    setShow(true)
    const productoAgregado = { ...producto, count }
    
    const newCart = [...cart]

    const inTheCart = newCart.find((item) => item.id === productoAgregado.id)


    if (inTheCart) {
      inTheCart.count += count
      setCart(newCart)
    } else {
      setCart([...cart, productoAgregado])
    }

  }

  // Manejar el cierre del custom Toast
  const handleCloseToast = () => {
    setShow(false);
  };


  return (
    <div className='container-card'>

      <ToastCustom
        count={count}
        showCustom={show}
        onClose={handleCloseToast}
        tituloToast={'Producto agregado'}
        bodyToast={`Has agregado ${count} productos al carrito`}
        background={'secondary'}
      />


      <Card style={{ width: '20rem' }} className='centrar-item'>
        <Card.Img variant="top" src={`../src/assets/${producto.imagen}.jpg`} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <span>Stock : {producto.stock}</span> <br />
            <span>Precio : {producto.precio} USD</span>
          </Card.Text>
          <ItemCount
            handleSumar={handleAgregarCarrito}
            handleRestar={handleQuitarCarrito}
            addToCart={handleAddToCart}
            count={count}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail