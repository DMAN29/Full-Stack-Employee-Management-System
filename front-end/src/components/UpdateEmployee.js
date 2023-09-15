import React,{useEffect, useState} from 'react'
import { Button } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateEmployee = () => {
  const {id} = useParams();

  useEffect(()=>{
    const url = `http://localhost:8080/api/employees/${id}`;
    axios.get(url).then((result) => {
      setData({fname:result.data.firstName,lname:result.data.lastName,email:result.data.email});
    }).catch((err) => {
      console.log("error");
    });

  },[]  );
  const [data,setData]= useState({ fname:"",
  lname:"",
  email:""
});
const getInput = (e)=>{
    const value = e.target.value;
    const name = e.target.name;
    setData((prev) =>{return{...prev,[name] :value}});
}
const load = (e) => {
    e.preventDefault();
    const store = {
      "firstName":data.fname,
      "lastName": data.lname,
      "email" :data.email
    }
    const url = `http://localhost:8080/api/employees/${id}`;
    axios.put(url,store)
    .then(() => {
      alert(`Data updated successfully`);
    }).catch(()=>{
      alert("Error");
    });
}
  return <div className='w-6/12  my-5 mx-auto shadow-lg shadow-gray-500 bg-slate-400 h-96'>
  <h2 className='bg-black text-white text-2xl p-3 text-center'> Update Employee Details</h2>
  <form className='w-10/12 mx-auto' onSubmit={load}>
    <input type="text" placeholder='Entery Your First Name' className='w-full p-3 text-lg my-5' name='fname'  value={data.fname} onChange={getInput} required />
    <br />
    <input type="text" placeholder='Enter Your Last Name' className='w-full p-3 text-lg my-5' name="lname" value={data.lname} onChange={getInput} required />
    <br />
    <input type="email" placeholder='Enter Email Id' className='w-full p-3 text-lg  my-5' name = "email" value={data.email} onChange={getInput} required />
    <br />
    <span className='flex justify-around'>
      <Button variant="contained" color="success" type='submit'>
Update      
</Button>
      <Button variant="contained" color="error">
      <NavLink to='/'>Back</NavLink>
      </Button>
    </span>
  </form>
</div>
}

export default UpdateEmployee