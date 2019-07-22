import { ADD_BOARD } from '../const'

const defaultBoards = [
  {
    id: 0,
    name: 'Movies'
  },
  {
    id: 1,
    name: 'Travels'
  }
]


export function boards(state=defaultBoards, action) {
  switch (action.type) {
    case ADD_BOARD:
      return [...state, action.payload.board]
    default:
      return state
  }
}