import React from 'react'
import {Outlet} from "react-router-dom"
import Up from '../Components/HomePage/Up'
import Navbar from "../Components/HomePage/Navbar"
import Footer from "../Components/HomePage/Footer"


const FixedComponents = () => {
  return (
    <div>
        <Up/>
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default FixedComponents
