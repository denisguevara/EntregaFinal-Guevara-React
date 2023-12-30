import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/ItemCount.css'

const ItemCount = ( { handleSumar, handleRestar, count, addToCart } ) => {
  
  return (
    <>
      <div className='centrar-itemCount'>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={handleSumar}>+</Button>
          <Button variant="secondary" onClick={handleRestar}>-</Button>
          <Button variant="secondary" onClick={addToCart}>
            Agregar <Badge bg="info">{count}</Badge>
          </Button>
        </ButtonGroup>
      </div>

    </>
  )
}

export default ItemCount