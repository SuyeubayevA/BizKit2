import React from 'react';
import {Navbar} from './styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Plus from '@material-ui/icons/PlusOne';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import {url} from '../serverUrl';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: 523,
    width: 524,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
    button: {
      margin: theme.spacing(1),
    },
  }));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();


  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

 
const NavbarReact = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
      name: '',
      shortname: '',
      registered_type: '',
      workscope: '',
      region: '',
      city: '',
      email: '',
      phone: '',
      description: '',
    })

    const handleOpen = () => {
      setOpen(true);
    };
  
  const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event) => {
      axios.post(`${url}/companies/`, 
      {
        name: values.name,
        shortname: values.shortname,
        registered_type: values.registered_type,
        region: values.region,
        city: values.city,
        workscope: values.workscope,
        email: values.email,
        phone: values.phone,
        description: values.description,
      },{
          headers: {
              Authorization: `${sessionStorage.tokenAccess}`
          }
      },
      {withCredentials: true}
      ).then(response => {console.log("creation response", response);
          // if(response.status === 200){
          //     this.props.showRegisterComponent();
          // }
      }).catch(error=>{
          console.log("registration error", error);
          alert("Произошла ошибка!", error.response.status);
          // this.props.showRegisterComponent();
      });
      // setTimeout(()=>{
      //     this.props.showUsers();
      // },1500)
      handleClose();
      
      event.preventDefault();
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Добавить клиента</h2>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around', alignItems: 'space-between'}}>
          <TextField 
            id="outlined-basic" 
            name='name' 
            label="Наименование компании" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic" 
            name='shortname' 
            label="Короткое название" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="outlined-basic" 
            name='registered_type' 
            label="Тип юр.лица" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="outlined-basic" 
            name='workscope' 
            label="Сфера деятельности" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange} />
          <TextField 
            id="outlined-basic" 
            name='region' 
            label="Регион" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="outlined-basic" 
            name='city' 
            label="Город" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange} />
          <TextField 
            id="outlined-basic" 
            name='email' 
            label="Email" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange} />
          <TextField 
            id="outlined-basic" 
            name='phone' 
            label="Телефон" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="outlined-basic" 
            name='description' 
            label="Дополнительно (описание)" 
            variant="outlined" 
            style={{margin:"10px", width:"90%", height:"80px"}} 
            onChange={handleChange} />
        </div>
        <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={handleSubmit}
            style={{marginLeft:"400px"}}
        >
            Добавить
        </Button>
      </div>
    );
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Navbar >

        <ul className="nav-links">
            <div>Клиенты</div>

            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<Plus />}
                onClick={handleOpen}
            >
                Добавить
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>

      </ul>
    </Navbar>
) }

export default NavbarReact;