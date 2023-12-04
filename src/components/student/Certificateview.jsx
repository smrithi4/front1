import axios from 'axios'
import React, { useEffect, useState } from 'react'
import{Buffer} from 'buffer'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
const Certificateview = () => {
    var [certview,setCertview]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4005/cview")
        .then(response =>{
            console.log(response.data)
            setCertview(response.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <Typography align='center'>Certificate View</Typography>
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cert id</TableCell>
            <TableCell >Sid</TableCell>
            <TableCell>Sname</TableCell>
            <TableCell>Qualification</TableCell>
            <TableCell>Certphoto</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
            {certview.map((value,index)=>{
                return(
                    <TableRow key={index}>
                    <TableCell>{value._id}</TableCell>
                    <TableCell>{value.sid}</TableCell>
                    <TableCell>{value.stud[0].Sname}</TableCell>
                    <TableCell>{value.Qualification}</TableCell>
                    <TableCell>
                        <img src={`data:image/jpeg;base64,${Buffer.from(value.certphoto.data)}`} width="50" height="50"></img>
                    </TableCell>
            
                    </TableRow>
                )
            })}
        </TableBody>
        
      </Table>
    </TableContainer>
    </div>
  )
}

export default Certificateview
