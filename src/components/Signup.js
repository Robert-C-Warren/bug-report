import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Axios from 'axios'

export default function Signup() {
    const paperStyle={padding: '50px 20px', width: 600, margin:'20px auto'}
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [fullName, setFullName]=useState('')
    const [role, setRole]=useState('')

    const register = () => {
        Axios.post("http://localhost:8080/userregister", {
            email: email,
            password: password,
            name: fullName,
            role: role
        }).then((Response) => {
            console.log(Response)
        })
    }

  return (
    <Box component="form" sx={{}} noValidate autoComplete="off">
        <Paper elevation={12} style={paperStyle}>
            <h1 style={{color:"#4c5a85"}} align="center" ><u>Sign Up</u></h1>
            <TextField id="outlined-basic" type="email" label="Email" margin='normal' variant="outlined" fullWidth 
                value={email} onChange={(e) => setEmail(e.target.value)}/>

            <TextField id="outlined-basic" type="password" label="Password" margin='normal' variant="outlined" fullWidth 
                value={password} onChange={(e) => setPassword(e.target.value)}/>

            <TextField id="outlined-basic" label="Full Name" margin='normal' variant="outlined" fullWidth 
                value={fullName} onChange={(e) => setFullName(e.target.value)}/>

            <TextField id="outlined-basic" label="Role" margin='normal' variant="outlined" fullWidth 
                value={role} onChange={(e) => setRole(e.target.value)}/>

            <Button variant="outlined" sx={{ padding: 2 }} style={{color:"#4c5a85"}} onClick={register}>Sign Up</Button>
            
            <Link to="/login">
                <Button variant="outlined" sx={{ padding: 2 }} style={{color:"#4c5a85"}} >Log In</Button>
            </Link>

        </Paper>
    </Box>
  )
}