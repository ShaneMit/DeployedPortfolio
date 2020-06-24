import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  done: {
    backgroundColor: 'green'
  },
  notDone: {
    backgroundColor: 'gray'
  }
}))

const Item = props => {
  const classes = useStyles()
  return (
    <ListItem>
      <ListItemAvatar
        onClick={() => props.handleUpdateItem(props.item._id, props.item.isDone)} >
        <Avatar className={props.item.isDone ? classes.done : classes.notDone} >
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.item.text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => props.handleDeleteItem(props.item._id)} >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Item
