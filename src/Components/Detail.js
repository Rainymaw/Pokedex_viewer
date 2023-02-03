import React from 'react'
import { Grid,Typography } from '@mui/material'

const Detail = ({title,data}) => {
  return (
    <Grid item md={2}>
        <Typography className='pokedex-text'>
         {title} <br />
        {data}
        </Typography>
    </Grid>
  )
}

export default Detail