import React, { Component } from 'react';
import axios from 'axios';
import {Title2, Input} from './styles';
import Button from '@material-ui/core/Button';
import {url} from '../serverUrl';
import Paper from '@material-ui/core/Paper';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveToken = this.saveToken.bind(this);
    }

    saveToken(tokenAccess, tokenRefresh) {
        sessionStorage.setItem('tokenAccess', tokenAccess);
        sessionStorage.setItem('tokenRefresh', tokenAccess);
    }

    handleSubmit(event){
        const {
            email,
            password
        } = this.state;
        
        axios.post(`${url}/token/`, {
            email: email,
            password: password,
        },
        {withCredentials: true}
        ).then(response => {
            this.saveToken(response.data.access, response.data.refresh );
            if(response.data.access){
                console.log('response', response.data.access);
                window.location.replace("/cabinetcompany");
            }
        }).catch(error=>{
            // if(error.response.status === 401){
            //     alert("Введен неправильный пароль или логин");
            // }
            console.log("login error", error);
        });

        console.log("form submitted");
        event.preventDefault();
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Paper 
                elevation={3}
                style={{height: '400px', width:'400px', padding:'34px', position: 'relative'}}>
                <form onSubmit={this.handleSubmit} className="regForm">
                    <Title2>
                        Авторизация
                    </Title2>
                    <Input 
                        style={{marginTop:'100px'}}
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <Button 
                        style={{marginTop:'100px'}}
                        type='submit'
                        variant="contained" 
                        color="primary"
                        size="large"
                    >
                        Войти
                    </Button>
                </form> 
            </Paper>
        );
    }
}
export default Login;