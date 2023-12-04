import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Certificate = () => {
    var[selectedimage,setSelectedimage]=useState(null)
    var[students,setstudents] = useState([]);
    var [inputs,setInputs]=useState({"sid":'',"Qualification":''})
    useEffect(()=>{
        axios.get("http://localhost:4005/sview")
        .then(response =>{
            console.log(response.data)
            setstudents(response.data)
        })
        .catch(err=>console.log(err))
    },[])
    const inputhandler=(event)=>{
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs);
      }

      const handleimage=(event)=>{
      const file =event.target.files[0];
      setSelectedimage(file)
      inputs.certphoto=file;
      
      }

      const savedata =()=>{
        const formdata =new FormData();
        formdata.append('sid',inputs.sid);
        formdata.append('Qualification',inputs.Qualification);
        formdata.append('certphoto',selectedimage);
        
        fetch('http://localhost:4005/certnew',
            {method:'post',body:formdata,})
            .then((response)=>response.json())
            .then((data)=>{
            alert("Record saved")
        })

            .catch((err)=>{
                console.log("error")

            })

            
        
      }
  return (
    <div>
        Student Name:
        <select name="sid" value={inputs.sid} onChange={inputhandler}>
            {
             students.map((value,index)=>{
             return(
                <option key={index} value={value._id}>{value.Sname}</option>
             )
            })   
            }
      
      
      </select><br/>
      Qualification:
      <TextField id="filled-basic" variant="filled" name="Qualification" value={inputs.Qualification} onChange={inputhandler}/><br></br>

      Certificate:
      <input type='file' onChange={handleimage}></input><br/>
      <Button variant="contained" onClick={savedata}>Save</Button>
    </div>
  )
}

export default Certificate
