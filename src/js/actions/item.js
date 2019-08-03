import { RECEIVE_ITEM } from "../const";

const item = {
  id: 0,
  title: "The title",
  description: "The big descrption very long"
}

export function getItem(id, title="") {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: SET_BASE_ITEM, payload: { item: { id, title } } })
      dispatch({ type: RECEIVE_ITEM, payload: { item } })
    }, 1000)
  }
}