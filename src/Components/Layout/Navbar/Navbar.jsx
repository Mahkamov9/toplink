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
                        <NavLink to={"/work"}>U qanday ishlaydi</NavLink>
                        <a className='nav-link' href="#">Xususiyat</a>
                        <a className='nav-link login-link' href="#">Kirish</a>
                        <a className='nav-link verification-link' href="#">Ro'yhatdan o'tish</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
