import React from 'react';

import './Header.css';
import { Link } from 'react-router-dom';

import HeaderImg from "../../Assets/Img/hedaer-img.png";

export default function Header() {
  return (
    <>
        <div className="header">
            <div className="container">
                <div className="header-box">
                    <div className="header-right">
                        <h1 className='header-subtext'>
                            Endi sizga faqat Toplink kerak
                        </h1>
                        <p className='header-text'>
                        Bir marta bosish orqali izdoshlaringiz bilan ko'proq baham ko'ring. Toplink barcha kontentingizga bir joyda ulanishni osonlashtiradi.
                        </p>
                        <Link className='header-link' to={"/registerpage"}>Toplinkdan bepul foydalaning</Link>
                        <p className='header-title'>Bu haftada 5318 kishi roʻyxatdan</p>
                    </div>
                    <div className="header-left">
                        <img className='header-img' src={HeaderImg} alt="Picture" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
