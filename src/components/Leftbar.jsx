import { Camera, Home, List, Logout, Person, Phone, PlayCircleFilledOutlined, Settings, StorefrontOutlined, Tag } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7'
    },
    top: 0,
    position: 'sticky'
  },
  icon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px !important'
    }
  },
  item: {
    display: 'flex',
    color: theme.palette.primary.main,
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    transition: '.3s',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      padding: 5,
      color: 'white'
    },
    userSelect: 'none',
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    fontWeight: 'bold !important',
  }
}))

const Leftbar = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text} >Home</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text} >Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text} >Lists</Typography>
      </div>
      <div className={classes.item}>
        <Camera className={classes.icon} />
        <Typography className={classes.text} >Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleFilledOutlined className={classes.icon} />
        <Typography className={classes.text} >Videos</Typography>
      </div>
      <div className={classes.item}>
        <Phone className={classes.icon} />
        <Typography className={classes.text} >Apps</Typography>
      </div>
      <div className={classes.item}>
        <Tag className={classes.icon} />
        <Typography className={classes.text} >Collections</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontOutlined className={classes.icon} />
        <Typography className={classes.text} >Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text} >Settings</Typography>
      </div>
      <div className={classes.item}>
        <Logout className={classes.icon} />
        <Typography className={classes.text} >Logout</Typography>
      </div>
    </Container>
  )
}

export default Leftbar