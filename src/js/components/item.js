import React from 'react'
import { connect } from 'react-redux'

import { getItem } from '../actions/item'

const descriptionIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M24 3h-24v-2h24v2zm-12 3h-12v2h12v-2zm12 5h-24v2h24v-2zm-12 5h-12v2h12v-2zm12 5h-24v2h24v-2z"/></svg>

const Item = ({ dispatch, item }) => {
  return (
    <div className="item-79edc7b4" onClick={() => dispatch(getItem(item.id))}>
      <div>{item.title}</div>
      {item.description &&
        <div className="description-icon">
          {descriptionIcon}
        </div>
      }
    </div>
  )
}

export default connect()(Item)