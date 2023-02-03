import React, { useEffect,useState} from 'react'
import axios from 'axios'
import {Box,Grid} from '@mui/material'
import Pokemon from './Pokemon'
import '../styles/pokedex.css'

const Pokedex = () => {

    const [pokeData,setPokeData] = useState([])
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    
    

    useEffect(()=>{



         axios.get(url+"?limit=800").then((res)=>{
             console.log(res)
            if (res.status >=200 && res.status <300){
                const {results} = res.data
                const newPokemon = []
                
                results.forEach((x)=>{
                     axios.get(x.url).then((req)=>{
                        let data = req.data
                        let pokemonObject = {
                            id:data.id,
                            url:data.sprites.other.dream_world.front_default,
                            name:data.name
                        }
                        newPokemon.push(pokemonObject) 
                        setPokeData(prev=>[...newPokemon])
                    }
                   )}); 
                
            } 
        }) 
    },[])
  return (
    <Box>
        <Grid container justifyContent={'center'} className='pokedex-grid'>
        {pokeData.map((pokemon)=>(
            <Pokemon id={pokemon.id} name={pokemon.name} url={pokemon.url} key={pokemon.id} />
        ))}
        </Grid>
    </Box>
  )
}

export default Pokedex