import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AllEmployee from './components/AllEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import {Route,Routes}from 'react-router-dom';
const App = () => {
  return <>
    <Header/>
        <Routes>
          <Route path='/' Component={AllEmployee}/>
          <Route path='/add-employee' Component={AddEmployee}/>
          <Route path='/update-employee/:id' Component={UpdateEmployee}/>
          <Route path='/delete-employee/:id' Component={DeleteEmployee}/>
        </Routes>
    <Footer/>
  </>
}

export default App