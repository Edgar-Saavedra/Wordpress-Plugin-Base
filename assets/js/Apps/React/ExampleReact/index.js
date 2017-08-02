import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

export const load = () => {
    //using jquery we are able to load an instance of our app wherever
    //we can always opt for the standard document.getElementById('youID')
    jQuery('.loadExampleReactAppHere').each(function(i,e){
        ReactDOM.render(
            <Root/>,
            e
        );
    });

}

try {

    load()
} catch(e) {
    console.warn(e);
}