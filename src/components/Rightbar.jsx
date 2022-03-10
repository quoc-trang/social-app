import React from 'react'
import { makeStyles } from '@mui/styles'
import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Typography, Link } from '@mui/material'
const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontSize: '18px',
    color: theme.palette.primary.main

  },
  link: {
    marginRight: '5px !important',
    color: '#555',
    fontSize: 16,
    marginLeft: 3
  }
}))
const Rightbar = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom sx={{fontWeight: 'bold'}}>
        Online friends
      </Typography>
      <AvatarGroup sx={{marginLeft: 0}} max={6}>
        <Avatar alt='John' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <Avatar alt='John' src='https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        <Avatar alt='John' src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <Avatar alt='John' src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <Avatar alt='John' src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <Avatar alt='John' src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <Avatar alt='John' src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        <Avatar alt='John' src='' />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom sx={{fontWeight: 'bold'}}>
        Gallery
      </Typography>
      <ImageList rowHeight={100} cols={4} >
        <ImageListItem>
          <img alt='' src='https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ImageListItem>
        <ImageListItem>
          <img alt='' src='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ImageListItem>
        <ImageListItem>
          <img alt='' src='https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ImageListItem>
        <ImageListItem>
          <img alt='' src='https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ImageListItem>
        <ImageListItem>
          <img alt='' src='https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom sx={{fontWeight: 'bold'}}>
        Categories
      </Typography>
      <Link underline='none' href="#" className={classes.link} variant='body2'>
        Sport
      </Link>
      <Link underline='none' href="#" className={classes.link} variant='body2'>
        Food
      </Link>
      <Link underline='none' href="#" className={classes.link} variant='body2'>
        Movie
      </Link>
      <Link underline='none' href="#" className={classes.link} variant='body2'>
        Science
      </Link>
    </Container>
  )
}

export default Rightbar