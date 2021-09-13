import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {routes} from "../routes";

function App() {
  return (
    <div>
        <Switch>
            {routes.map((route) => <Route key={route.path} {...route} />)}
        </Switch>
    </div>
  );
}

export default App;
