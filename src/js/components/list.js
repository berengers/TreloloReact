import React from 'react'

import Item from '../components/item'

const List = ({ list }) => {
  return (
    <div className="list-918a82e5">
      <h4>{list.title}</h4>
      <div className="items">
      {
        list.items.map(item => (
          <Item item={item} key={item.id}/>
        ))
      }
      </div>

    </div>
  )
}

export default List

