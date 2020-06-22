import React from 'react';
import Login from './auth/Login';
// import {WrapPaper, Button} from './auth/styles';

const Home = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center", width: "1100px"}}>
                <br/>
            <Login />
        </div>
    );
}

export default Home;