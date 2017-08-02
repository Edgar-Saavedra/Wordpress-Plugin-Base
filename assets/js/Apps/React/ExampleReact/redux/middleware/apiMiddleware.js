import 'whatwg-fetch';
import * as types from '../types';
/**
 * We can write a middleware function that listens only to actions corresponding to API requests.
 * Our middleware can "watch" for actions that have a special marker.
 * @param store
 */
const apiMiddleware = store => next => action => {

    if (!action.meta ) {
        return next(action);
    }

    if(action.meta.type == 'execute_middleware')
    {
        let fetchData = false;
        let url = '';
        const fetchOptions = Object.assign({}, action.meta);

        //just return same data
        store.dispatch(
            {
                payload: action.meta.exampleProp,
                type: types.EXAMPLE_TYPE
            }
        );

        //an example REST request
        if(fetchData)
        {

            fetch(url, fetchOptions )
                .then(resp => {
                    return resp;
                })
                .then(resp => resp.json())
                .then(json => {
                    if (typeof action.meta.onSuccess === 'function') {
                        action.meta.onSuccess(json);
                    }
                    return json; // For the next promise in the chain
                })
                .then(json => {
                    store.dispatch(
                        {
                            payload: json,
                            type: types.SEARCH_POST_POSTS
                        }
                    );
                });
        }
    }


}

export default apiMiddleware