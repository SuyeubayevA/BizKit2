import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Company from "./Companies";


function App() {

  // const handleLogout = () => {
  //   sessionStorage.removeItem('tokenData'); 
  // }

  return (
    <div className="App">
      <BrowserRouter>
          <React.Fragment>
          {/* <NavbarReact handleLogout={this.handleLogout}/> */}
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
