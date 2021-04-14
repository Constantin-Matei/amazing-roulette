import React from 'react'
import Slot from '../slot'
import { StyledBoard } from './board.style'

const Board = () => {
  return (
    <StyledBoard side={350}>
      <Slot/>
    </StyledBoard>
  )
}

export default Board
