import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import '../styles/Cart.css'
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Cart = () => {

  const { cart, setCart } = useContext(CartContext)
  const [formData, setFormData] = useState({});

  const precioTotal = () => {
    return cart.reduce((acc, producto) => acc + producto.precio * producto.count, 0)
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email !== formData.confirmemail) {
      Swal.fire({
        title: '¡Error!',
        text: 'Los campos de email no coinciden',
        icon: 'error',
        confirmButtonColor: '#0d6efd',
      });
    } else {
      const pedido = {
        cliente: formData,
        productos: cart,
        total: precioTotal()
      }


      const pedidosRef = collection(db, 'pedidos')
      addDoc(pedidosRef, pedido).then((doc) => {
        Swal.fire({
          title: '¡Muchas gracias por tu compra!',
          text: `El id de tu compra es: ${doc.id}`,
          icon: 'success',
          confirmButtonColor: '#0d6efd',
        });
        vaciarCarrito()
      })
    }

  };


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>

      {
        cart.map((p) => (
          <div key={p.id} style={{ width: '80%', margin: '0 auto' }}>
            <Card style={{ marginBottom: '15px' }}>
              <Card.Body>
                <Row>
                  {/* Imagen a la izquierda */}
                  <Col md={3}>
                    <Card.Img src={`../src/assets/${p.imagen}.jpg`} style={{ width: '100%', height: 'auto' }} />
                  </Col>

                  {/* Contenido a la derecha */}
                  <Col md={9}>
                    <Row style={{ height: '100%' }}>
                      {/* Columna 1 */}
                      <Col>
                        <Card.Title>Producto</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.titulo}</Card.Text>
                        </div>
                      </Col>

                      {/* Columna 2 */}
                      <Col>
                        <Card.Title>Precio</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.precio} USD</Card.Text>
                        </div>
                      </Col>

                      {/* Columna 3 */}
                      <Col>
                        <Card.Title>Cantidad</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.count}</Card.Text>
                        </div>
                      </Col>

                      {/* Columna 4 */}
                      <Col>
                        <Card.Title>Total</Card.Title>
                        <div className='centrarText'>
                          <Card.Text>{p.precio * p.count} USD</Card.Text>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>


        ))
      }

      {
        cart.length > 0 ?
          <div className='contenedor-formulario' style={{ width: '80%', margin: '0 auto', border: '1px solid black', padding: '15px' }}>
            <div className='total-boton mb-3'>
              <h2>Total de la orden: {precioTotal()} USD</h2>
              <Button variant="danger" onClick={vaciarCarrito}>Vaciar carrito</Button>
            </div>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
                <Form.Control type="text" placeholder="Nombre" required onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="apellido" label="Apellido" className="mb-3">
                <Form.Control type="text" placeholder="Apellido" required onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="telf" label="Teléfono" className="mb-3">
                <Form.Control type="number" placeholder="Teléfono" required onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="E-mail" className="mb-3">
                <Form.Control type="email" placeholder="Email" required onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel controlId="confirmemail" label="Confirmar e-mail" className="mb-3">
                <Form.Control type="email" placeholder="Confirmar email" required onChange={handleChange} />
              </FloatingLabel>
              <Button variant="success" type="submit">
                Proceder a la compra
              </Button>
            </Form>
          </div>
          :
          <div className='contenedor-carrito-vacio'>
            <h2>El carrito está vacio</h2>
            <Link to={'/'}>
              <Button variant="primary">Ir a comprar</Button>
            </Link>
          </div>
      }

    </div>
  )
}

export default Cart