import React, {useState, useEffect} from 'react';
import axios, {post} from 'axios';
import { url } from '../serverUrl';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import {
    WrapPaper, 
} from '../style/styled_comp/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    table: {
        width: 650,
      },
  }));

const BankData = (props) => {
    const classes = useStyles();
    const [result, setResult]=useState([]);
    const [state, setState] = React.useState({
        columns: [
          { title: 'Наименование компании', field: 'name' },
          { title: 'Тип юр.лица', field: 'registered_type' },
          { title: 'Регион', field: 'region' },
          {
            title: 'Город',
            field: 'city'
          }
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
        <WrapPaper documents>
                <Paper elevation={3}>
                    <MaterialTable
                        className={classes.table}
                        title="Editable Example"
                        columns={state.columns}
                        data={state.data}
                        editable={{
                            onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                                }, 600);
                            }),
                            onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                    });
                                }
                                }, 600);
                            }),
                            onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                                }, 600);
                            }),
                        }}
                        />
                    </Paper>
            </WrapPaper>
                
            
            
    )
}

export default BankData;