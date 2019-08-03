import { RECEIVE_ITEM } from "../const";

const defaultItem = {
  id: null,
  title: "",
  description: ""
}

export function currentItem(state=defaultItem, action) {
  switch (action.type) {
    case RECEIVE_ITEM:
      return action.payload.item
    default:
      return state
  }
}