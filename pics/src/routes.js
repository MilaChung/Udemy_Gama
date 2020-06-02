import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './components/Repositories';
import SearchBar from './components/SearchBar';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={SearchBar} />
                <Route path='/repositories' component={Repositories} />           
            </Switch>
        </BrowserRouter>
    );
}