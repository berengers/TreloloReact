import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { boards } from './boards.js'
import { currentBoard } from './board.js'

export default (history) => combineReducers({
  router: connectRouter(history),
  boards,
  currentBoard
})