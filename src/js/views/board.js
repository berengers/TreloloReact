import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getBoard } from '../actions/board'
import Headerbar from '../components/headerbar'
import ModalItem from '../components/modalItem'
import List from '../components/list'
import CreateList from '../components/createList'

const Board = ({ dispatch, match, currentBoard, lists }) => {

  const { id, name } = currentBoard

  console.log('match ---->', match)
  useEffect(
    () => dispatch(getBoard(parseInt(match.params.id))), []
  )
  
  return (
    <div className="board-4f10ecaf">
      <ModalItem />
      <Headerbar />
      <div className="lists">
        {
          lists.map(list => (
            <List list={list} key={list.id} />
          ))
        }
        <CreateList />
      </div>
    </div>
  )
}

const mapStateToprops = ({ currentBoard, lists }) => ({ currentBoard, lists })

export default connect(mapStateToprops)(Board)