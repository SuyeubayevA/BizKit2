import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Companies from "./Companies";
import CompanyEdit from './CompanyEdit';
import NavbarVert from "./navigation/verticalNavigation";


function App() {
  const [client, setClient] = useState({});
  const handleLogout = () => {
    sessionStorage.removeItem('tokenRefresh'); 
  };
  const returnList = () => {
    window.location.replace("/cabinetcompany"); 
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavbarVert handleLogout={handleLogout} returnList={returnList}/>
          <React.Fragment>
          
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
                  <Companies {...props} 
                  setClient={setClient}
                  />
                )} 
              />
              <Route 
                exact 
                path={"/editcompany"} 
                render={props => (
                  <CompanyEdit {...props}
                    client={client}
                  />
                )} 
              />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
    </div>
  );
}

export default App;
