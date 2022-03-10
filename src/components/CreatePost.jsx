import React, {useState} from 'react'
import {makeStyles} from '@mui/styles'
import {Tooltip, Fab, Modal, Container,RadioGroup, TextField, MenuItem, FormLabel, FormControlLabel, Radio, Button, Snackbar, Alert} from '@mui/material'
import {Add} from '@mui/icons-material'
const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed !important',
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        position: 'absolute',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vw !important',
            heigth: '100vh !important'
        }
    },
    item: {
        margin: 10
    }
}))

const CreatePost = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
  return (
    <>
        <Tooltip title='Add' aria-label='add' onClick={() => setOpen(true)} >
            <Fab color='primary' className={classes.fab}>
                <Add />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete='off'>
                    <div className={classes.item}>
                        <TextField id='standard-basic' label='Tittle' size='small' style={{width: '100%'}} />
                    </div>
                    <div className={classes.item}>
                        <TextField multiline rows={4} id='standard-basic' label='Tell your story' size='small' style={{width: '100%'}} />
                    </div>
                    <div className={classes.item}>
                        <TextField select label='Visibility' value='Public' style={{width: '30%'}} >
                            <MenuItem value='Public'>Public</MenuItem>
                            <MenuItem value='Private'>Private</MenuItem>
                            <MenuItem value='Unlisted'>Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel>Who can comment?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel 
                                value='Everybody'
                                control={<Radio size='small' />}
                                label='Everybody'
                            />
                            <FormControlLabel 
                                value='My friends'
                                control={<Radio size='small' />}
                                label='My friends'
                            />
                            <FormControlLabel 
                                value='Nobody'
                                control={<Radio size='small' />}
                                label='Nobody'
                            />
                            <FormControlLabel 
                                value='Custom'
                                disabled
                                control={<Radio size='small' />}
                                label='Custom (Premium)'
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button onClick={() => setOpenAlert(true)} variant='outlined' color='primary' sx={{marginRight: 3}} >Create</Button>
                        <Button onClick={() => setOpen(false)} variant='outlined' color='error'>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
            <Alert color='success' onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Create post successful
            </Alert>
        </Snackbar>
    </>
  )
}

export default CreatePost