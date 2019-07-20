const defaultBoards = [
  {
    id: 35,
    name: 'Movies'
  },
  {
    id: 12,
    name: 'Travels'
  }
]


export function boards(state=defaultBoards, action) {
  switch (action.type) {
    case "ADD_BOARD":
      return [...state, action.payload.board]
    default:
      return state
  }
}