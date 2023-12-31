import React from 'react';
import './Login.css';

import Ellipse1 from '../../Assets/Img/Ellipse1.png';
import Ellipse2 from '../../Assets/Img/Ellipse2.png';

export default function Login() {
  return (
    <>
        <div className="login">
            <div className="container">
                <div className="login-box">
                    <div className="login-card">
                        <h2 className='login-subtext'>Kirish</h2>
                        <p className='login-text'>Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!</p>
                        <div className="input-box">
                            <span>Elektron pochta</span>
                            <input className='login-input' type="text" placeholder='email.gmail.com'/>
                        </div>
                        <div className="input-box">
                            <span>Parol</span>
                            <input className='login-input' type="text" placeholder='************' />
                        </div>
                        <p className='login-found'>Parolni unutdingizmi?</p>
                        <button className='login-btn'>Kirish</button>
                        <div className="login-blok">
                            <a className='login-blok-info' href="#">Akkaunt mavjud emasmi?</a>
                            <a className='login-blok-login' href="#">Ro'yhatdan o'tish</a>
                        </div>
                    </div>
                </div>
            </div>
            <img className='login-ellipse1' src={Ellipse1} alt="1" />
            <img className='login-ellipse2' src={Ellipse2} alt="2" />
        </div>
    </>
  )
}
