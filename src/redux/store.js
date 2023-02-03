import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from './reducer';
import favoriteReducer from './slice'

export default configureStore({reducer:favoriteReducer});