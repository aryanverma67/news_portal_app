import { useState } from 'react'
import "./index.css"
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <div>
      <ToastContainer 
          position='top-center'
        />

        <Navbar/>
        
      <Outlet  />
      <Footer/>

      </div>
    </>
  )
}

export default App
