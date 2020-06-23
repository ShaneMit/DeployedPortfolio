import { createContext } from 'react'

const ItemContext = createContext({
  item: '',
  items: [],
  handleInputChange: () => { },
  handleAddItem: () => { }
})

export default ItemContext
