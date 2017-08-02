import {createStore , applyMiddleware} from 'redux';
import { rootReducer, initialState } from './reducers';

import apiMiddleware from './middleware/apiMiddleware';

export const configureStore = () => {
    const store = createStore(
        //Without a reducer, it won't know what to do with actions or how to
        //create the state, etc. In order to move beyond this error, we'll need to define
        //some reducers:
        rootReducer // root reducer
        ,initialState // our initialState
        ,applyMiddleware(
            apiMiddleware
        )
    );
    return {store};
}

export default configureStore;