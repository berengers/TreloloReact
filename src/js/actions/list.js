import uuid from 'uuid/v4'
import { ADD_LIST } from '../const'

export function createList(title) {
  return dispatch => {
    const newlist = {
      id: uuid(),
      title,
      items: []
    }
    
    dispatch(addList(newlist))
  }
}

function addList(list) {
  return {
    type: ADD_LIST,
    payload: {
      list
    }
  }
}