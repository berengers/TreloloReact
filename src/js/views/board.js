import React from 'react'
import { connect } from 'react-redux'

const Board = ({ currentBoard }) => {

  const { id, name, lists } = currentBoard
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {
          lists.map(list => (
            <div key={list.id}>
              <h4>{list.name}</h4>
              {
                list.items.map(item => (
                  <div key={item.id}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                ))
              }
            </div>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToprops = ({ currentBoard }) => ({ currentBoard })

export default connect(mapStateToprops)(Board)