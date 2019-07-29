import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { boards } from './boards.js'
import { currentBoard } from './board.js'
import { lists } from './lists'
import { currentItem } from './item'

export default (history) => combineReducers({
  router: connectRouter(history),
  boards,
  currentBoard,
  lists,
  currentItem
})