import React, {useEffect} from 'react';
import BankData from './components/BankData';
import CompanyList from './components/CompanyList';
import { WrapPage } from './style/styled_comp/styles';
import NavbarReact from "./navigation/navigationPanel";
import {url} from './serverUrl';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const CompanyEdit = (props) => {
    const editCompany = JSON.parse(localStorage.company)
    const [values, setValues] = React.useState({
        name: editCompany.name,
        shortname: editCompany.shortname,
        registered_type: editCompany.registered_type,
        workscope: editCompany.workscope,
        region: editCompany.region,
        city: editCompany.city,
        email: editCompany.email,
        phone: editCompany.phone,
        description: editCompany.description,
        id: editCompany.id,
        type: editCompany.type,
        registered_name: editCompany.registered_name,
        address: editCompany.address,
        registered_address: editCompany.registered_address,
        bin_iin: editCompany.bin_iin,
        tax_payer: editCompany.tax_payer,
        leader_position: editCompany.leader_position,
        leader: editCompany.leader,
      })

    /////////////////////////SAVE CHANGES/////////////////////////////////////////////////////
    const saveEdition = () => {
        axios.put(`${url}/companies/${values.id}`, {
            name: values.name,
            shortname: values.shortname,
            registered_type: values.registered_type,
            region: values.region,
            city: values.city,
            workscope: values.workscope,
            email: values.email,
            phone: values.phone,
            description: values.description,
    
            type: values.type,
            registered_name: values.registered_name,
            address: values.address,
            registered_address: values.registered_address,
            bin_iin: values.bin_iin,
            tax_payer: values.tax_payer,
            leader_position: values.leader_position,
            leader: values.leader,
            is_owner: values.is_owner
          },{
              headers: {
                  Authorization: `${sessionStorage.tokenAccess}`
              }
          },
        {withCredentials: true}
        ).then(response => {
            if(response.status === 200){
                console.log("Company edition response", response)
                alert("Company is Edited");
            }
        }).catch(error=>{
            console.log("Company edition error", error);
            alert("Some error happens")
        })

        window.location.replace("/cabinetcompany");

        console.log("form submitted");
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(()=>{
        props.setShowSidebar(true);
    },[])

    console.log('values',values)
    return (
        <React.Fragment>
            <NavbarReact title={"Наименование компании"}/>
            <WrapPage style={{marginLeft:'250px'}}>
                <TableContainer component={Paper} style={{width:'70%', height:'500px',  position: 'relative'}}>
                    <div style={{display:'flex', justifyContent:"space-around"}}>
                        <div style={{display:'flex', flexWrap: 'wrap',width:'450px', margin: '28px 31px', justifyContent: 'space-around'}}>
                            <TextField 
                                id="name" 
                                name='name'
                                label="Наименование компании" 
                                variant="outlined" 
                                fullWidth={true}
                                style={{margin: '15px 10px 0 10px'}} 
                                onChange={handleChange}
                                defaultValue={values.name}
                            />
                            <TextField 
                                id="shortname" 
                                name='shortname' 
                                label="Короткое название" 
                                variant="outlined" 
                                onChange={handleChange}
                                defaultValue={values.shortname}
                                style={{width: '45%', marginTop: '15px'}}
                                />
                            <TextField 
                                id="workscope" 
                                name='workscope' 
                                label="Сфера деятельности" 
                                variant="outlined" 
                                onChange={handleChange} 
                                defaultValue={values.workscope}
                                style={{width: '45%', marginTop: '15px'}}
                                />
                            <TextField 
                                id="region" 
                                name='region' 
                                label="Регион" 
                                variant="outlined" 
                                onChange={handleChange}
                                defaultValue={values.region}
                                style={{width: '45%', marginTop: '15px'}}
                                />
                            <TextField 
                                id="city" 
                                name='city' 
                                label="Город" 
                                variant="outlined" 
                                onChange={handleChange}
                                defaultValue={values.city}
                                style={{width: '45%', marginTop: '15px'}}
                                />
                            <TextField 
                                id="email" 
                                name='email' 
                                label="Email" 
                                variant="outlined" 
                                onChange={handleChange}
                                defaultValue={values.email}
                                style={{width: '45%', marginTop: '15px'}}
                                />
                            <TextField 
                                id="phone" 
                                name='phone' 
                                label="Телефон" 
                                variant="outlined" 
                                onChange={handleChange}
                                defaultValue={values.phone}
                                style={{width: '45%', marginTop: '15px'}}
                                />
                            <TextField 
                                id="description" 
                                name='description' 
                                label="Дополнительно (описание)" 
                                variant="outlined" 
                                fullWidth={true} 
                                onChange={handleChange}
                                style={{margin: '15px 10px 0 10px'}} 
                                defaultValue={values.description}
                            />
                        </div>
                        <div style={{display:'flex', flexWrap: 'wrap',width:'450px', margin: '28px 31px', justifyContent: 'space-around'}}>
                        <TextField 
                            id="registered_name" 
                            name='registered_name' 
                            label="Наименование юр.лица" 
                            variant="outlined" 
                            fullWidth={true}
                            style={{margin: '15px 10px 0 10px'}}
                            onChange={handleChange}
                            defaultValue={values.registered_name}
                            />
                        <TextField 
                            id="registered_type" 
                            name='registered_type' 
                            label="Тип юр.лица" 
                            variant="outlined" 
                            style={{width: '45%', marginTop: '15px'}} 
                            onChange={handleChange}
                            defaultValue={values.registered_type}
                            />
                        <TextField 
                            id="bin_iin" 
                            name='bin_iin' 
                            label="БИН/ИИН" 
                            variant="outlined" 
                            style={{width: '45%', marginTop: '15px'}} 
                            onChange={handleChange}
                            defaultValue={values.bin_iin}
                            />
                        <TextField 
                            id="leader" 
                            name='leader' 
                            label="Руководитель" 
                            variant="outlined" 
                            style={{width: '45%', marginTop: '15px'}} 
                            onChange={handleChange}
                            defaultValue={values.leader}
                            />
                        <TextField 
                            id="leader_position" 
                            name='leader_position' 
                            label="Должность руководителя" 
                            variant="outlined" 
                            style={{width: '45%', marginTop: '15px'}} 
                            onChange={handleChange}
                            defaultValue={values.leader_position}
                            />
                        <TextField 
                            id="registered_address" 
                            name='registered_address' 
                            label="Юридический адрес" 
                            variant="outlined" 
                            style={{width: '45%', marginTop: '15px'}} 
                            onChange={handleChange}
                            defaultValue={values.registered_address}
                            />
                        <TextField 
                            id="address" 
                            name='address' 
                            label="Фактический адрес" 
                            variant="outlined" 
                            style={{width: '45%', marginTop: '15px'}} 
                            onChange={handleChange}
                            defaultValue={values.address}
                            />
                    </div>
                    </div>
                    <Button variant="contained" size="large" color="primary" onClick={saveEdition} style={{position: 'absolute', right: '25px', bottom: '25px'}}>
                        Сохранить
                    </Button>
                </TableContainer>
                
            </WrapPage>
        </React.Fragment>
    )
}

export default CompanyEdit;