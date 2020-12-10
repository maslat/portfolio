import React from 'react';
import Firegram from './comps/Firegram/Firegram'
import Portofolio from './comps/Portfolio/Portofolio';
import {
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/certificate">
          <Firegram/>
        </Route>
        <Route path="/">
          <Portofolio/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
