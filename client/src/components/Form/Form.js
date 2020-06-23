import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ItemContext from '../../utils/ItemContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  form: {
    minHeight: '200px',
    paddingTop: '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
  }
}))

const Form = () => {

  const classes = useStyles()

  const {
    item,
    handleInputChange,
    handleAddItem
  } = useContext(ItemContext)

  return (
    <Paper className={classes.form}>
      <form onSubmit={handleAddItem}>
        <TextField
          className={classes.input}
          label="Item"
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleInputChange} />
        <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>
      </form>
    </Paper>
  )
}

export default Form
