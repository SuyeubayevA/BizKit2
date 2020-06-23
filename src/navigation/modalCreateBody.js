import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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

const ModalCreateBody = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const {
        handleChange,
        handleSubmit
    } = props

    return (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Добавить клиента</h2>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'space-around', alignItems: 'space-between'}}>
          <TextField 
            id="name" 
            name='name' 
            label="Наименование компании" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}
          />
          <TextField 
            id="shortname" 
            name='shortname' 
            label="Короткое название" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="registered_type" 
            name='registered_type' 
            label="Тип юр.лица" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="workscope" 
            name='workscope' 
            label="Сфера деятельности" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange} />
          <TextField 
            id="region" 
            name='region' 
            label="Регион" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="city" 
            name='city' 
            label="Город" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange} />
          <TextField 
            id="email" 
            name='email' 
            label="Email" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange} />
          <TextField 
            id="phone" 
            name='phone' 
            label="Телефон" 
            variant="outlined" 
            style={{margin:"10px"}} 
            onChange={handleChange}/>
          <TextField 
            id="description" 
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
    )
}

export default ModalCreateBody;