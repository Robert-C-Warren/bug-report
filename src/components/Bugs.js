import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/material';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Bugs() {
const navigate = useNavigate()

const [bugName, setBugName] = useState('')
const [bugDesc, setBugDesc] = useState('')
const [assignedTo, setAssignedTo] = useState('')
const [bugUrgency, setBugUrgency] = useState('')
const [bugStatus, setBugStatus] = useState('')

const [bugNameError, setBugNameError] = useState(false)
const [bugDescError, setBugDescError] = useState(false)
const [assignedToError, setAssignedToError] = useState(false)
const [bugUrgencyError, setBugUrgencyError] = useState(false)
const [bugStatusError, setBugStatusError] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    
    setBugNameError(false)
    setBugDescError(false)
    setAssignedToError(false)
    setBugUrgencyError(false)
    setBugStatusError(false)

    if(bugName == '') {
        setBugNameError(true)
    }
    if(bugDesc == '') {
        setBugDescError(true)
    }
    if(assignedTo == '') {
        setAssignedToError(true)
    }
    if(bugUrgency == '') {
        setBugUrgencyError(true)
    }
    if(bugStatus == '') {
        setBugStatusError(true)
    }

    if(bugName && bugDesc && assignedTo && bugUrgency && bugStatus) {
        // fetch('http://localhost:8000/bugs', {
        //     method: 'POST',
        //     headers: {"Content-type": "application/json"},
        //     body: JSON.stringify({ bugName, bugDesc, assignedTo, bugUrgency, bugStatus })
        // }).then(() => navigate('/'))
        axios.post('http://localhost:8000/bugs', {
            bugName, bugDesc, assignedTo, bugUrgency, bugStatus
        })
    }
}
// const paperStyle={padding: '50px 20px', width: 600, margin:'20px auto'}
// const [bugStatus, setBugStatus]=useState('')
// const [bugDescription, setBugDescription]=useState('')
// const [assignedTo, setAssignedTo]=useState('')
// const [bugName, setBugName]=useState('')
// const [bugUrgency, setBugUrgency]=useState('')

// const handleClick = (e) => {
//     e.preventDefault() 
//     const bugs = {bugStatus, bugDescription, assignedTo, bugName, bugUrgency}
//     console.log(bugs)
//     fetch("http://localhost:8080/bug", {
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(bugs)
//     }).then(() => {console.log("New Bug Tracked")})
// }

  return (
    <Container>
    
        <Typography variant='h6' color='textSecondary' component='h2' >Create New Bug</Typography>
        
        <Box pt={1} pb={2} display='block'>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField onChange={(e) => setBugName(e.target.value)} 
                label="Bug Name" variant='outlined' fullWidth required error={bugNameError}/>    
            
                <TextField onChange={(e) => setBugDesc(e.target.value)} 
                label="Bug Description" variant='outlined' fullWidth required error={bugDescError}/>    
           
                <TextField onChange={(e) => setAssignedTo(e.target.value)} 
                label="Assigned To" variant='outlined' fullWidth required error={assignedToError}/>    

                <TextField onChange={(e) => setBugUrgency(e.target.value)} 
                label="Bug Urgency" variant='outlined' fullWidth required error={bugUrgencyError}/>    

                <TextField onChange={(e) => setBugStatus(e.target.value)} 
                label="Bug Status" variant='outlined' fullWidth required error={bugStatusError}/>    
                
                <Button type='submit' color='secondary' variant='contained' 
                endIcon={<BugReportOutlinedIcon />}>Submit</Button>

            </form>
        </Box>
    </Container>
  );
}
