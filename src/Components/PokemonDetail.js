import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Detail from './Detail'
import { useParams } from 'react-router-dom'
import { Box, Typography,Grid, Button } from '@mui/material'
import '../styles/PokemonDetail.css'
import Favorite from '@mui/icons-material/Favorite'
import {useSelector,useDispatch} from 'react-redux'
import {toggleFav} from '../redux/slice'

const PokemonDetail = () => {


    const fav = useSelector((state)=>state.favorites)
    const dispatch = useDispatch()
    console.log(fav)
    const handleClick = (pokemon)=>{
        dispatch(toggleFav(pokemon))
    }


    const [ pokemon,setPokemon ] = useState([''])
    const {id} = useParams()

    useEffect(()=>{
        async function lol(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
            if (res.status >=200 && res.status <300){
                console.log("1. when data is fetched sucessfully: ", res.data);
                setPokemon(res.data);
                console.log("2. Just after setting state: ", pokemon);
            }
        }
        lol()   
    },[id])
    //Implement the redux store here
    


    const {name, sprites='',height='',weight='',types=[null]} = pokemon
	
  return (
    <Box>
        <Box className='pokedex' >
            <Typography variant='h1' className='pokedex-name'>
                {name}
            </Typography> 
            <img src={sprites.front_default} alt='aaaaaaa' className='pokedex-image' />
            <Box className='pokedex-info-container'>
                <hr className='separator' />
                <Grid container>
					<Button onClick={()=>handleClick(pokemon)} >Click here</Button>
                    <Detail title='Name' data={name} />
                    <Detail title='Height' data={height} />
                    <Detail title='Weight' data={weight} />
                    {types.map((x)=>(
                     x&&<Detail title='Type' data={x.type.name} />
                    ))}
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}

// const mapStateToProps = (state) =>({
// 	favorites:state.favorites
// })
// const mapDispatchToProps = (dispatch) =>({
// 	toggleFav:(pokemon)=>dispatch(toggleFav(pokemon)),
// });

// export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail)
export default PokemonDetail