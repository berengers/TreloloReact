import React, { useState } from 'react'
import { connect } from 'react-redux'

const ModalItem = ({ item, board }) => {
  
  item.comment = "comment de base"

  const [values, setValues] = useState({
    description: { content: item.description, edit: false },
    comment: { content: item.comment, edit: false }
  })


  const { description, comment } = values

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: { content: e.target.value, edit: true } })
  }

  const shortCut = (e) => {
    if (e.keyCode === 13) {
      saveInput(e)
    }
  }

  const saveInput = (e) => {
    disableInput(e)
  }

  const enableInput = (name) => {
    setValues({ ...values, [name]: { content: values[name].content, edit: true } })
  }

  const disableInput = (e) => {
    setValues({ ...values, [e.target.name]: { content: item[e.target.name], edit: false } })
  }

  return (
    <div className="modal-item-d152e7b8">
      <div className="wrapper">
        <div className="row">
          <h2>{item.title}</h2>
          <span>in list {board.name}</span>
        </div>
        <div className="row">
          <h3>Description</h3>
          {description.edit ?
            <React.Fragment>
              <textarea name="description" value={description.content} onChange={handleChange} onKeyDown={shortCut} />
              <button name="description" className="button button-valid" onClick={saveInput}>Save</button>
              <button name="description" className="button button-transparent" onClick={disableInput} >
                X
              </button>
            </React.Fragment>
            :
            <React.Fragment>
              <p name="description" onClick={() => enableInput("description")}>
                {item.description}
              </p>
            </React.Fragment>
          }
        </div>
        <div className="row">
          <h3>Add Comment</h3>
          {comment.edit ?
            <React.Fragment>
              <textarea name="comment" value={comment.content} onChange={handleChange} onKeyDown={shortCut} />
              <button name="comment" className="button button-valid" onClick={saveInput}>Save</button>
              <button name="comment" className="button button-transparent" onClick={disableInput} >
                X
              </button>
            </React.Fragment>
            :
            <React.Fragment>
              <p name="comment" onClick={() => enableInput("comment")}>
                {comment.content}
              </p>
            </React.Fragment>
          }
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