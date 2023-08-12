import React from 'react';

import './Navbar.css';

import NavLogo from "../../../Assets/Svg/Nav-logo.svg";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="container">
                <div className="nav-list">
                    <div className="nav-item">
                        <NavLink to={"/"} ><img src={NavLogo} alt="Logo" /></NavLink>
                    </div>
                    <div className="nav-item">
                        <div className='nav-link-box'>
                        <NavLink className="nav-link  nav-link1" to={"/workpage"} >U qanday ishlaydi</NavLink>
                        <NavLink className="nav-link  nav-link2" to={"/featurepage"} >Xususiyat</NavLink>
                        <NavLink className="nav-link  nav-link3" to={"/loginpage"} >Kirish</NavLink>
                        <NavLink className="nav-link  nav-link4" to={"/registerpage"} >Ro'yhatdan o'tish</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
