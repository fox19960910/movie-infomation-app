import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Detail from '../pages/Detail'
import Catalog from '../pages/Catalog'
import Home from '../pages/Home'
const Routes = props => {
    return (
        <Switch>
            <Route 
                path='/:category/search/:keyword'
                components={Catalog}
            />

            <Route 
                path='/:category/:id'
                components={Detail}
            />

            <Route 
                path='/:category/'
                components={Catalog}
            />

            <Route 
                path='/'
                components={Home}
            />
        </Switch>
    )
}



export default Routes
