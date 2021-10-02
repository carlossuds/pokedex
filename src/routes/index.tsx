import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/*  <Route path=":/pokemon_number" component={Details} /> */}
      <Route path="/not-found" component={NotFound} />
      <Redirect from="*" to="/not-found" />
    </Switch>
  );
};

export default Routes;
