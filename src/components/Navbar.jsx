import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Badge, InputBase, Avatar} from '@mui/material'
import { makeStyles } from '@mui/styles'
import {alpha } from '@mui/material/styles';
import {Cancel, Mail, Notifications, Search } from '@mui/icons-material'
const useStyles = makeStyles(theme => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%'
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none !important',
        }
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    icons: {
        display: (props) => (props.open ? 'none' : 'flex'),
        alignItems: 'center',
    },
    badge: {
        marginRight: theme.spacing(2)
    },
    cancel: {
        [theme.breakpoints.up('sm')]: {
            display: 'none !important',
        }
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
  return (
    <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.logoLg}>Take your time</Typography>
            <Typography className={classes.logoSm}>WasingTime</Typography>
            <div className={classes.search}>
                <Search  />
                <InputBase className={classes.input} placeholder='Search...' />
                <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={4} color='error' className={classes.badge}>
                    <Mail />
                </Badge>
                <Badge badgeContent={3} color='error' className={classes.badge}>
                    <Notifications />
                </Badge>
                <Avatar alt="Remy Sharp" src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/35062779_185765585470400_881351332366123008_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=19026a&_nc_ohc=ifRSTnwAAhQAX8ZlGCo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8NDk2buJO-hT-ysmiCskk5bXZqu8om3KZdOAa9uxcbqg&oe=6250F72A" />
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar