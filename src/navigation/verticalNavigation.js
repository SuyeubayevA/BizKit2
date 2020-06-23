import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {NavVert} from './styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



const VertNavigation =(props)=>{
    const classes = useStyles();

    return (
        <NavVert className={classes.root}>
            <Button
                    color="primary"
                    onClick={props.returnList}
                    startIcon={<AssignmentIcon />}
            >
                Клиенты
            </Button>
            <br/>
            <Button
                    color="secondary"
                    onClick={props.handleLogout}
                    startIcon={<ExitToAppIcon />}
            >
                Выход
            </Button>
                
        </NavVert>
    )
}

export default VertNavigation;