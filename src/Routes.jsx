import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Projects from './pages/Projects/Projects';
import Default from './layouts/Default';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Default>
            <Main />
          </Default>
        </Route>
        <Route path='/projects/:technology?'>
          <Default back='/'>
            <Projects />
          </Default>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
