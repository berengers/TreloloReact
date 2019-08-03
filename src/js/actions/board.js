import uuid from 'uuid/v4'
import { push } from 'connected-react-router'

import { RECEIVE_BOARD, RECEIVE_LISTS } from '../const'

const boards = [
  {
    id: 0,
    name: 'Trelolo Project',
    lists: [
      {
        id: 21,
        title: "Backlog",
        items: [
          { id: 1,
            title: "Test Coverage",
            description: "It's a full description what i need"
          },
          {
            id: 2,
            title: "Learn english",
            description: ""
          }
        ]
      },
      {
        id: 34,
        title: "Sprint",
        items: [
          {
            id: 3,
            title: "Make an API",
            description: "An API in .Net Core"
          },
          {
            id: 4,
            title: "Refacto Navbar",
            description: "A lot of things to do for have a beautiful navbar and full responsive"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: 'Travels',
    lists: []
  }
]


export function getBoard(id) {
  return dispatch => {
    setTimeout(() => {
      const { lists, ...boardLessLists } = boards.find(el => el.id === id)
      dispatch({ type: RECEIVE_BOARD, payload: { board: boardLessLists } })
      dispatch({ type: RECEIVE_LISTS, payload: { lists: lists } })
    },2000)
  }
}

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