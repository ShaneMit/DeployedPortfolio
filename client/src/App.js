import React, { useState, useEffect } from 'react'
import ItemContext from './utils/ItemContext'
import Form from './components/Form'
import FullList from './components/FullList'
import Navbar from './components/Navbar'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

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
    axios.post('/api/items', {
      text: itemState.item,
      isDone: false
    })
      .then(({ data }) => {
        items.push(data)
        setItemState({ ...itemState, items, item: '' })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get('/api/items')
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
