import * as types from '../types';

export const initialState = {
    exampleProp : 'Hello World'
}

/**
 * Each reducer has the ability to return a new state which modifies the store
 * if an actionCreator/action is dispached from a view they should send out and action
 * type which notifies any combined reducers to watch for a particular action type
 * if the action type match that within a particular reducer it will return the updated
 * data which was pass from the action through its payload
 * @param state
 * @param action
 * @returns {*}
 */

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EXAMPLE_TYPE:
            return { state, exampleProp: action.payload}
        default:
            return state;
    }
}

export default reducer