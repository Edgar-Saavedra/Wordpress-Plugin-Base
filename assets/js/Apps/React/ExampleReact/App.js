import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Content from './views/Content';

const App = props => {
    return (
        <Router>
            <Switch>
                <Route
                    path="*"
                    component={Content}
                />
            </Switch>
        </Router>
    )
}
export default App;