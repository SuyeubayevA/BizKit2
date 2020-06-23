import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from "./Home";
import Companies from "./Companies";
import CompanyEdit from './CompanyEdit';
import NavbarVert from "./navigation/verticalNavigation";


function App() {
  const [client, setClient] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem('tokenRefresh');
    sessionStorage.removeItem('tokenAccess');
    window.location.replace("/");
  };
  const returnList = () => {
    window.location.replace("/cabinetcompany"); 
  }

  const editClient = (client) => {
    localStorage.setItem('company', JSON.stringify(client));
    setClient(client)
  }

  console.log('APP', client)
  return (
    <div className="App">
      <BrowserRouter>
      {showSidebar && <NavbarVert handleLogout={handleLogout} returnList={returnList}/>}
          <React.Fragment>
          
            <Switch>
              <Route 
                exact 
                path={"/"} 
                render={props => (
                  <Home {...props}
                    setShowSidebar={setShowSidebar}
                  />
                )} 
              />
              <Route 
                exact 
                path={"/cabinetcompany"} 
                render={props => (
                  <Companies {...props} 
                    setClient={editClient}
                    setShowSidebar={setShowSidebar}
                  />
                )} 
              />
              <Route 
                exact 
                path={"/editcompany"} 
                render={props => (
                  <CompanyEdit {...props}
                    client={client}
                    setShowSidebar={setShowSidebar}
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
