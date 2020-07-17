import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositores from './Repositories';
import Home from './pages/Home/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositores} />
            </Switch>
        </BrowserRouter>
    )
}






