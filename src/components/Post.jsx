import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Card, CardActionArea, CardActions, CardMedia, Typography } from '@mui/material'
const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(3),
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
    },
    title: {
        color: theme.palette.primary.main
    },
    description: {
        color: theme.palette.primary.main
        
    }
}))

const Post = () => {
    const classes = useStyles()
  return (
    <Card className={classes.card} >
        <CardActionArea>
            <CardMedia className={classes.media} image="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title='my post'/>
            <Typography className={classes.title} gutterBottom variant='h2'>My first post</Typography>
            <Typography className={classes.description} variant='body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
        </CardActionArea>
        <CardActions>
            <Button variant='outlined' color='primary'>Share</Button>
            <Button variant='outlined' color='primary'>Learn more</Button>
        </CardActions>
    </Card>
  )
}

export default Post