import React, { useEffect, useState } from 'react'
import TableContent from './TableContent'
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const AllEmployee = () => {
  const [employees,setEmployees] = useState([]);
  useEffect(()=>{
    getEmployees();
  },[]);

  const getEmployees = async()=>{
    const   url = `http://localhost:8080/api/employees`;
    const resource = await fetch(url);
    setEmployees(await resource.json());
  }
  return <>
    <div className='w-10/12 mx-auto mt-5 mb-20 space-y-4'>
    <Button variant='contained'><NavLink to='add-employee'>Add Employee</NavLink></Button>
    <TableContent employees = {employees}/>
    </div>
  </>
}

export default AllEmployee