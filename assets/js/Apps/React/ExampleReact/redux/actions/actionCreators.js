import * as types from '../types';

export const updateExampleProp = ({exampleProp=''}) =>
{
    return {
        type: types.EXAMPLE_TYPE,
        payload: exampleProp,
        //meta: {
        //    type: 'execute_middleware',
        //    exampleProp : exampleProp
        //}
    }
}
