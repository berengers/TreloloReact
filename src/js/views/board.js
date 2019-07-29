import React from 'react'
import { connect } from 'react-redux'

import Headerbar from '../components/headerbar'
import ModalItem from '../components/modalItem'
import List from '../components/list'
import CreateList from '../components/createList'

const Board = ({ currentBoard, lists }) => {

  const { id, name } = currentBoard

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