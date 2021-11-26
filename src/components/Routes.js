import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Dashboard from "../pages/Dashboard";
import Activity from "../pages/Activity";

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/activity' component={Activity} />
        </Switch>
    );
}

export default Routes;