import React from 'react'
import {Box,Grid} from '@mui/material'
import Pokemon from './Pokemon'
import {useSelector} from 'react-redux'

const FavoritePokemon = () => {
    const fav = useSelector((state)=>state.favorites)
    console.log(fav)
  return (
    <Box>
    <Grid container justifyContent={'center'} className='pokedex-grid'>
    {fav.map((x)=>(
        <Pokemon id={x} 
        name={x.name} 
        url={x.sprites.other.dream_world.front_default} 
        key={x.id} />
    ))}
    </Grid>
    </Box>
  )
}

export default FavoritePokemon