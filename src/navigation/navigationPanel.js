import React from 'react';
import {Navbar} from './styles';
import {Title1} from '../style/styled_comp/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Plus from '@material-ui/icons/PlusOne';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import {url} from '../serverUrl';
import ModalCreateBody from './modalCreateBody';

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

 
const NavbarReact = (props) => {
    const classes = useStyles();
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

        type: 0,
        registered_name: "<string>",
        address: "<string>",
        registered_address: "<string>",
        bin_iin: 222,
        tax_payer: true,
        leader_position: "<string>",
        leader: "<string>",
        is_owner: true
      },{
          headers: {
              Authorization: `${sessionStorage.tokenAccess}`
          }
      },
      {withCredentials: true}
      ).then(response => {
        console.log("creation response", response);
      }).catch(error=>{
          console.log("registration error", error);
          alert("Произошла ошибка!", error.response.status);
      });
      setTimeout(()=>{
          props.getList();
      },1500)
      handleClose();
      
      event.preventDefault();
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Navbar >

        <div className="nav-links">
            <Title1>{props.title}</Title1>

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
                <ModalCreateBody values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </Modal>

      </div>
    </Navbar>
) }

export default NavbarReact;