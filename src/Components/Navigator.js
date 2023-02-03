import React from 'react'
import '../styles/navigator.css'

import AppBar from '@mui/material/AppBar'
import { Toolbar,Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <AppBar className='appbar' position="fixed">
        <Toolbar>
            <Link to='/' className='link'>
                <Typography className='title'>Pokédex</Typography>
            </Link>
            <Link to='/pokemon/fav' className='link'>
                <Typography className='title'>Favorites</Typography>
            </Link>
        </Toolbar>
            
    </AppBar>
  )
}

export default Navigator