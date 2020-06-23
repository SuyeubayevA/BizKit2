import React from 'react';
import Button from '@material-ui/core/Button';

import {NavVert} from './styles';

const VertNavigation =(props)=>{

    return (
        <NavVert>
            <Button
            variant="contained"
            color="primary"
            onClick={props.returnList}
        >
            Клиенты
        </Button>
            
        </NavVert>
    )
}

export default VertNavigation;