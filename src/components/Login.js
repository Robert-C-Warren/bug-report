import * as React from 'react';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';

export default function Login() {
    const { setAuth } = useContext(AuthContext)
    const paperStyle={padding: '50px 20px', width: 600, margin:'20px auto'}
    
    const userRef = useRef()
    const errRef = useRef()
    
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')


    const sendLogin = () => {
        Axios.post("http://localhost:8080/auth/login", {
            email: email,
            password: password
        }).then((Response) => {
            console.log(Response)
        })
    }

  return (
    <Box component="form" sx={{}} noValidate autoComplete="off">
        <Paper elevation={12} style={paperStyle}>
            <h1 style={{color:"#4c5a85"}} align="center" ><u>Log In</u></h1>
            <TextField id="outlined-basic" type="email" label="Email" margin='normal' variant="outlined" fullWidth 
                value={email} onChange={(e) => setEmail(e.target.value)}/>

            <TextField id="outlined-basic" type="password" label="Password" margin='normal' variant="outlined" fullWidth 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <Link to="/bug">
                <Button variant="outlined" sx={{ padding: 2 }} style={{color:"#4c5a85"}} onClick={sendLogin}>Log In</Button>
            </Link>

        </Paper>
    </Box>
  )
  }