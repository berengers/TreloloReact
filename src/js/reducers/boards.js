import { RECEIVE_BOARDS, ADD_BOARD } from '../const'



export function boards(state=[], action) {
  switch (action.type) {
    case RECEIVE_BOARDS:
      return [...action.payload.boards]
    case ADD_BOARD:
      return [...state, action.payload.board]
    default:
      return state
  }
}