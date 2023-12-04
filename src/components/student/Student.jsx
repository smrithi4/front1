import { Button, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './student.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  var [inputs,setInputs]=useState({"Admno":'',"Sname":'',"Age":'',"Status":'ACTIVE'})
  const navigate = useNavigate();
  const inputhandler=(event)=>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs);
  }
  const savedata=()=>{
    console.log("clicked")
    console.log(inputs)
    axios.post("http://localhost:4005/snew",inputs)
    .then((response)=>{alert("Record saved")})
    .catch(err=>console.log(err))
    navigate('/studentview')
  }
  return (
    <div className='aa'>
      <Typography>REGISTRATION FORM</Typography><br/>
      <TextField id="filled-basic" label="Admission No" variant="filled" name='Admno'value={inputs.Admno}onChange={inputhandler}/><br/><br/>
      <TextField id="filled-basic" label="NAME" variant="filled" name='Sname'value={inputs.Sname}onChange={inputhandler}/><br/><br/>
      <TextField id="filled-basic" label="Age" variant="filled" name='Age'value={inputs.Age}onChange={inputhandler}/><br/><br/>
      status
      <select name='Status' value={inputs.Status}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      
      </select><br></br>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
  )
}

export default Student
