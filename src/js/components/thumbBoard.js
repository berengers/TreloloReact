import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ThumbBoard = ({ data }) => {
  return (
    <Link to={`/board/${data.id}`} className="thumb-board-9f507641" style={{backgroundImage: `url('https://picsum.photos/200/100?random=${data.id}')`}}>
      <span className="name">{ data.name }</span>
    </Link>
  )
}

ThumbBoard.prototype = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
}

export default ThumbBoard