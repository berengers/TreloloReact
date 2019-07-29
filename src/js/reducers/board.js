const defaultBoard = {
  id: 456,
  name: "Holidays"
}

export function currentBoard(state=defaultBoard, action) {
  switch (action.type) {
    case "":
    default:
      return state
  }
}