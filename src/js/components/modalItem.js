import React from 'react'
import { connect } from 'react-redux'

const ModalItem = ({ item, board }) => {
  return (
    <div className="modal-item-d152e7b8">
      <div className="wrapper">
        <div className="row">
          <h2>{item.title}</h2>
          <span>in list {board.name}</span>
        </div>
        <div className="row">
          <h3>Description</h3>
          <p onClick={}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentItem, currentBoard }) => ({
  item: currentItem,
  board: currentBoard
})

export default connect(mapStateToProps)(ModalItem)