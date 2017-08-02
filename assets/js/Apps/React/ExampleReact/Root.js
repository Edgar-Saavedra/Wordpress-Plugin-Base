import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

//the store holds our state and reducer to handle state changes
import configureStore from './redux/configureStore';

const Root = (props) => {
    //instantiate the store
    const {store} = configureStore();

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default Root;