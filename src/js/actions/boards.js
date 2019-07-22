import uuid from 'uuid/v4'
import { push } from 'connected-react-router'

export function createBoard(board) {
  return dispatch => {
    const newBoard = {
      id: uuid(),
      name: board.name
    }
    dispatch(addBoard(newBoard))
    dispatch(push(`/board/${newBoard.id}`))
  }
}

export function addBoard(board) {
  return {
    type: "ADD_BOARD",
    payload: {
      board
    }
  }
}