import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getBoard } from '../actions/board'
import Headerbar from '../components/headerbar'
import ModalItem from '../components/modalItem'
import List from '../components/list'
import CreateList from '../components/createList'

const Board = ({ dispatch, match, currentItem, lists }) => {

  useEffect(
    () => dispatch(getBoard(parseInt(match.params.id))), [match.params.id]
  )
  
  return (
    <div className="board-4f10ecaf">
      {currentItem.id || currentItem.id === 0 &&
        <ModalItem />
      }
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

const mapStateToprops = ({ currentItem, lists }) => ({ currentItem, lists })

export default connect(mapStateToprops)(Board)