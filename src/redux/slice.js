import {createSlice} from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        favorites:[]
    },
    reducers:{
        toggleFav: (state,action)=>{
            let pokemon = action.payload
            let pokeFromFav = state.favorites.find((favPokemon)=>pokemon.id===favPokemon.id);
            return {
                ...state,
                favorites:pokeFromFav? [...state.favorites.filter((pokemon)=>pokemon.id !==pokeFromFav.id),]:
                [...state.favorites,action.payload]
            }
        }
    }
})

export const {toggleFav} =favoriteSlice.actions
export default favoriteSlice.reducer