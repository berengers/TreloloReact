import React from 'react'
import { connect } from 'react-redux'

const Headerbar = ({ currentBoard }) => {
  const { name } = currentBoard

  return (
    <div className="headerbar-a5738b70">
      <h2>{name}</h2>
    </div>
  )
}

const mapStateToProps = ({ currentBoard }) => ({ currentBoard })

export default connect(mapStateToProps)(Headerbar)