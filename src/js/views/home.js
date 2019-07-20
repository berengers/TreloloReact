import React from 'react'
import { connect } from 'react-redux'

import style from '../../css/home.scss'
import { addBoard } from '../actions/boards.js' 

const Home = ({ boards, dispatch }) => {
  
  const newBoard = () => {
    const board = { id: 456, name: 'natalia' }
    dispatch(addBoard(board))
  }

  return (
    <div className={style.home}>
      {
        boards.map((board, i) => <h2 key={i}>{board.name}</h2>)
      }
      <button onClick={newBoard}>1 more board</button>
    </div>
  )
}

const mapStateToProps = ({ boards }) => ({ boards })

export default connect(mapStateToProps)(Home)
