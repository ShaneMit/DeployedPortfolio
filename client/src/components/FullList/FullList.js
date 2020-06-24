import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

const FullList = () => {

  const { 
    items, 
    handleUpdateItem,
    handleDeleteItem
  } = useContext(ItemContext)

  return (
    <Paper>
      <List>
        {
          items.map(item => (
            <Item
              key={item._id}
              item={item}
              handleUpdateItem={handleUpdateItem}
              handleDeleteItem={handleDeleteItem} />
          ))
        }
      </List>
    </Paper>
  )
}

export default FullList
