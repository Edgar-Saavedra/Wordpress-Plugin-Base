import { combineReducers } from 'redux';
import * as types from './types';
import * as exampleReducer from './reducers/exampleReducer';


export const initialState = {
    exampleReducer: exampleReducer.initialState,
}

export const rootReducer = combineReducers({
    exampleReducer: exampleReducer.reducer,
})

export default rootReducer;