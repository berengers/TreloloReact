import { RECEIVE_BOARD } from '../const'

const defaultBoard = {
  id: null,
  name: ""
}

export function currentBoard(state=defaultBoard, action) {
  switch (action.type) {
    case RECEIVE_BOARD:
      return action.payload.board
    default:
      return state
  }
}