import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

const FullList = () => {

  const { items } = useContext(ItemContext)

  return (
    <Paper>
      <List>
        {
          items.map(item => <Item item={item} />)
        }
      </List>
    </Paper>
  )
}

export default FullList
