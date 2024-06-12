import React from 'react'
import "./header.css";
import logo from "../../assets/logo.png"
import gvt from "../../assets/govt_logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img className="logo" src={logo} alt='logo' />
        </div>
        <h1 style={{color: "#fca311"}}>PM - SURYA GHAR: MUFT BIJLI YOJANA</h1>
        <div className='govt_logo_box'>
            <img src={gvt} alt="" />
        </div>
    </div>
  )
}

export default Navbar