import { createContext } from 'react'

const ItemContext = createContext({
  item: '',
  items: [],
  handleInputChange: () => { },
  handleAddItem: () => { },
  handleUpdateItem: () => { },
  handleDeleteItem: () => { }
})

export default ItemContext
