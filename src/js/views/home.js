import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getBoards } from '../actions/boards.js'
import { createBoard } from '../actions/board.js'
import ThumbBoard from '../components/thumbBoard.js'

const Home = ({ dispatch, boards }) => {

  useEffect(
    () => dispatch(getBoards()), []
  )
  
  const newBoard = () => {
    const name = window.prompt('Name of board')

    if (name) {
      const board = { name: name }
      dispatch(createBoard(board))
    }
  }

  return (
    <div className="home-44d18947">
      <div className="boards">
        {
          boards.map((board, i) => <ThumbBoard key={i} data={board} />)
        }
        <div onClick={newBoard} className="new-board">Create new board</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ boards }) => ({ boards })

export default connect(mapStateToProps)(Home)
