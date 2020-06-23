import React from 'react';
import BankData from './components/BankData';
import CompanyList from './components/CompanyList';
import { WrapPage } from './style/styled_comp/styles';
import NavbarReact from "./navigation/navigationPanel";
import {url} from './serverUrl';

const CompanyEdit = (props) => {
    const [state, setState] = React.useState({
        columns: [
          { name: 'Наименование компании' },
          { registered_type: 'Тип юр.лица' },
          { region: 'Регион' },
          { city: 'Город'}
        ],
        data: []
      });

      const getList = async ()=>{
        const tokenAccess = sessionStorage.tokenAccess;
        fetch(`${url}/companies/`, {
            headers: {
                token: tokenAccess
            }
          })
        .then(res => { return res.json();})
        .then(
            data => {console.log(data);
                setState({...state, ['data']: data.results});
            }
        );
    }

    const handleLogout = () => {
        sessionStorage.removeItem('tokenRefresh'); 
      }
      console.log(props)
    return (
        <React.Fragment>
            <NavbarReact getList={getList} title={"Наименование компании"}/>
            <WrapPage style={{marginLeft:'250px'}}>
                <div style={{display: 'flex', width: '70%'}}>
                    <CompanyList getList={getList} state={state}/>
                </div>
            </WrapPage>
        </React.Fragment>
    )
}

export default CompanyEdit;