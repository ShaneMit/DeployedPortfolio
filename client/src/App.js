import React, { useState, useEffect } from 'react'
import ItemContext from './utils/ItemContext'
import Form from './components/Form'
import FullList from './components/FullList'
import Navbar from './components/Navbar'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import ItemAPI from './utils/ItemAPI'

const {
  getItems,
  createItem,
  updateItem,
  deleteItem
} = ItemAPI

const App = () => {

  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    createItem({
      text: itemState.item,
      isDone: false
    })
      .then(({ data }) => {
        items.push(data)
        setItemState({ ...itemState, items, item: '' })
      })
      .catch(err => console.error(err))
  }

  itemState.handleUpdateItem = (id, isDone) => {
    updateItem(id, {
      isDone: !isDone
    })
      .then(() => {
        const items = JSON.parse(JSON.stringify(itemState.items))
        items.forEach(item => {
          if (item._id === id) {
            item.isDone = !isDone
          }
        })
        setItemState({ ...itemState, items })
      })
      .catch(err => console.error(err))
  }

  itemState.handleDeleteItem = id => {
    deleteItem(id)
      .then(() => {
        const items = JSON.parse(JSON.stringify(itemState.items))
        const itemsFiltered = items.filter(item => item._id !== id)
        setItemState({ ...itemState, items: itemsFiltered })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getItems()
      .then(({ data }) => {
        setItemState({ ...itemState, items: data })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <ItemContext.Provider value={itemState}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <FullList />
        </Grid>
      </Grid>
    </ItemContext.Provider>
  )
}

export default App
