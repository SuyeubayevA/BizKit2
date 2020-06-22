import React from 'react';
import BankData from './components/CompanyList';
import CompanyList from './components/CompanyList copy';
import { WrapPage } from './style/styled_comp/styles';

const Companies = (props) => {

    return (
        <WrapPage>
            <div style={{display: 'flex'}}>
                <CompanyList/>
            </div>
        </WrapPage>
    )
}

export default Companies;