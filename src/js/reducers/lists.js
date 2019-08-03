import { ADD_LIST, RECEIVE_LISTS } from '../const'


export function lists(state=[], action) {
  switch (action.type) {

    case RECEIVE_LISTS:
      return action.payload.lists

    case ADD_LIST:
      return [...state, action.payload.list]
  
    default:
      return state
  }
}