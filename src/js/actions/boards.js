export function addBoard(board) {
  return {
    type: "ADD_BOARD",
    payload: {
      board
    }
  }
}