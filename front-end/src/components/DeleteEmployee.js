import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
const DeleteEmployee = () => {
  const {id} = useParams();
  const url =  `http://localhost:8080/api/employees/${id}`;
  const [data,setData] = useState({})
  useEffect(()=>{
    axios.get(url).then(result=>{
      setData({fname:result.data.firstName,lname:result.data.lastName,email:result.data.email});
    })
  },[]);
  const del = ()=>{
    axios.delete(url).then(()=>{alert("Deleted Successfully")}).catch(()=>{alert("Something Went wrong")});

  };
  return <div className='w-4/12 mx-auto'>
  <h1 className='text-3xl font-bold text-center mt-5'>Do You Want to Delete Employee</h1>
    <div className='mt-5 text-2xl font-semibold'>
      <h2>First Name : {data.fname}</h2>
      <h2>Last Name &nbsp;: {data.lname}</h2>
      <h2>Email Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {data.email}</h2>
    </div>
    <span className='flex justify-around'>
      <Button variant="contained" color="success" onClick={del}>
      <NavLink to='/'>Delete</NavLink>
      </Button>
      <Button variant="contained" color="error">
      <NavLink to='/'>Back</NavLink>
      </Button>
    </span>
  </div>
}

export default DeleteEmployee