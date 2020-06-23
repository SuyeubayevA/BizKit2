import React,{useEffect} from 'react';
import CompanyList from './components/CompanyList';
import { WrapPage } from './style/styled_comp/styles';
import NavbarReact from "./navigation/navigationPanel";
import {url} from './serverUrl';

const Companies = (props) => {
    const {setClient} = props;
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
            data => {
                setState({...state, ['data']: data.results});
            }
        );
    }

    const handleLogout = () => {
        sessionStorage.removeItem('tokenRefresh'); 
      }
    
    useEffect(()=>{
        props.setShowSidebar(true);
    },[])

    return (
        <React.Fragment>
            <NavbarReact getList={getList} title={"Клиенты"}/>
            <WrapPage style={{marginLeft:'250px'}}>
                
                <div style={{display: 'flex', width: '70%'}}>
                    <CompanyList getList={getList} state={state} setClient={setClient}/>
                </div>
            </WrapPage>
        </React.Fragment>
    )
}

export default Companies;