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
import EditIcon from '@material-ui/icons/Edit';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';

import {
    ButtonDelete, 
} from '../style/styled_comp/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
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
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
///////////////////////////////////////////////////////////////////////////////////////////////////
    const handleDeletion = (id) => {
        axios.delete(`${url}/companies/${id}`, {
            headers: {
                Authorization: `${sessionStorage.tokenAccess}`
            }
        },
        {withCredentials: true}
        ).then(response => {
            if(response.status === 200){
                console.log("Company deletion response", response)
                alert("Company is Deleted");
            }
        }).catch(error=>{
            console.log("Company deletion error", error);
            alert("Some error happens")
        })

        // setTimeout(()=>{
        //     props.showImages();
        // },1500)

        console.log("form submitted");
    }

    const confirmDeletion =(id) => {
        console.log("TUTAS")
        const doDeletion = window.confirm("Хотите удалить Компанию ?");
        if(doDeletion){
            handleDeletion(id);
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    useEffect(()=>{
        getList();
    },[])

    return (
        <TableContainer component={Paper} className={classes.tableWrapper}>
            <div style={{display:'flex', margin: '28px 31px', justifyContent: 'space-around'}}>
                <TextField id="outlined-basic" label="Наименование компании" variant="outlined" />
                <TextField id="outlined-basic" label="Тип юр.лица" variant="outlined" />
                <TextField id="outlined-basic" label="Регион" variant="outlined" />
                <TextField id="outlined-basic" label="Город" variant="outlined" />
            </div>
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
                            <IconButton aria-label="edit" className={classes.margin}>
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="delete" className={classes.margin} onClick={()=>confirmDeletion(row.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>     
    )
}

export default CompanyList;