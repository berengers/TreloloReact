import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { createList } from '../actions/list'

const CreateList = ({ dispatch }) => {
  const [mode, setMode] = useState("button")

  return (
    <div className={"create-list-a404beb3 " + mode}>
      {mode === "button" ?
        <div onClick={() => setMode("form")}>+ Add another list</div>
        :
        <Form setMode={setMode} dispatch={dispatch}/>
      }
    </div>
  )
}

const cancelIcon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>

const Form = ({ setMode, dispatch }) => {

  const [title, setTitle] = useState("")
  const inputTitle = React.createRef()

  useEffect(() => {
    inputTitle.current.focus()
  })

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const keyDown = (e) => {
    if (e.keyCode === 13)
      addList()
  }

  const addList = () => {

    if(typeof title !== 'string' || !title.trim())
      return

    dispatch(createList(title.trim()))
    setTitle("")
  }
  
  return (
    <div onBlur={() => setMode("button")}>
      <input type="text" value={title} ref={inputTitle} placeholder="Enter list title..."
        onChange={handleChange} onKeyDown={keyDown} />
      <button className="button button-valid" onClick={addList}>Add List</button>
      <span className="button button-transparent cancel" onClick={() => setMode("button")}>{ cancelIcon }</span>
    </div>
  )
}


export default connect(null)(CreateList)