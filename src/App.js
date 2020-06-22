import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Company from "./Companies";
import NavbarReact from "./navigation/navigationPanel";


function App() {

  const handleLogout = () => {
    sessionStorage.removeItem('tokenRefresh'); 
  }

  return (
    <div className="App">
      <BrowserRouter>
          <React.Fragment>
          <NavbarReact handleLogout={handleLogout}/>
            <Switch>
              <Route 
                exact 
                path={"/"} 
                render={props => (
                  <Home />
                )} 
              />
              <Route 
                exact 
                path={"/cabinetcompany"} 
                render={props => (
                  <Company />
                )} 
              />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
    </div>
  );
}

export default App;
