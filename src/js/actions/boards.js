import { RECEIVE_BOARDS } from '../const'


const boards = [
  {
    id: 0,
    name: 'Movies'
  },
  {
    id: 1,
    name: 'Travels'
  }
]

export function getBoards() {
  return dispatch => {
    dispatch({ type: RECEIVE_BOARDS, payload: { boards: boards } })
  }
}