import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, categoria, descripcion, precio, stock, imagen }) => {
  return (
    <div className='container-Item'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={`../src/assets/${imagen}.jpg`} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item