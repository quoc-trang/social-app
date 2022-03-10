import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid } from '@mui/material'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { makeStyles } from '@mui/styles'
import CreatePost from './components/CreatePost'
const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
})

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      dipslay: 'none',
    },
  },
}))

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item lg={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item lg={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item lg={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <CreatePost />
    </ThemeProvider>
  )
}

export default App
