import React, {useState, useEffect} from 'react';
import axios, {post} from 'axios';
import { url } from '../serverUrl';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import {
    ButtonDelete, 
} from '../style/styled_comp/styles';

const useStyles = makeStyles((theme) => ({
    table: {
        width: '100%',
      },
  }));

const CompanyList = (props) => {
    const classes = useStyles();
    const [result, setResult]=useState([]);
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
                setResult(data.results);
                setState({...state, ['data']: data.results});
            }
        );
    }

    // const handleDeletion = (name) => {
    //     const sessionToken = `token ${sessionStorage.tokenData}`;

    //     axios.delete(`${url}/images/delete/${name}`, {
    //         headers: {
    //             Authorization: sessionToken
    //         }
    //     },
    //     {withCredentials: true}
    //     ).then(response => {
    //         if(response.status === 200){
    //             console.log("Image deletion response", response)
    //             alert("Image is Deleted");
    //         }
    //     }).catch(error=>{
    //         console.log("Image deletion error", error);
    //         alert("Some error happens")
    //     })

    //     setTimeout(()=>{
    //         props.showImages();
    //     },1500)

    //     console.log("form submitted");
    // }

    useEffect(()=>{
        getList();
    },[])



    // const confirmDeletion =(name) => {
    //     const doDeletion = confirm("Хотите удалить изображение ?");
    //     if(doDeletion){
    //         handleDeletion(name);
    //     }
    // }

    return (
        //<WrapPaper documents>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>{state.columns[0].name}</TableCell>
                        <TableCell align="right">{state.columns[1].registered_type}</TableCell>
                        <TableCell align="right">{state.columns[2].region}</TableCell>
                        <TableCell align="right">{state.columns[3].city}</TableCell>
                        <TableCell align="right"> </TableCell>  {/*  EDIT  */}
                        <TableCell align="right"> </TableCell>  {/*  DELETE  */}

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {state.data.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.registered_type}</TableCell>
                        <TableCell align="right">{row.region}</TableCell>
                        <TableCell align="right">{row.city}</TableCell>

                        <TableCell align="right">
                            <IconButton aria-label="delete" className={classes.margin}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">{row.city}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
       // </WrapPaper>
                
            
            
    )
}

export default CompanyList;