import React from 'react';
import { Switch, Route } from "react-router-dom";
import Error from './pages/Error';
import Home from './pages/Home';
import { Routes } from './constants';

function Router() {
  return (
    <Switch>
      <Route exact path={Routes.MAIN} component={Home} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
