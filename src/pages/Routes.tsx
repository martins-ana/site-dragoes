import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default Routes;
