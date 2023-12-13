import React, { useState } from 'react'

import { ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ItemCount = () => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <ButtonGroup size='md' isAttached variant='outline'>
      <IconButton onClick={decrement} icon={<MinusIcon />} />
      <Button>{counter}</Button>
      <IconButton onClick={increment} icon={<AddIcon />} />
    </ButtonGroup>
  )
}

export default ItemCount