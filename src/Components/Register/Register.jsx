import React from 'react';
import './Register.css';


import Ellipse1 from '../../Assets/Img/Ellipse1.png';
import Ellipse2 from '../../Assets/Img/Ellipse2.png';


export default function Register() {
  return (
    <>
    <div className="login">
            <div className="container">
                <div className="login-box">
                    <div className="login-card">
                        <h2 className='login-subtext'>Ro'yhardan o'tish</h2>
                        <p className='login-text'>Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun hozir tizimga kiring!</p>
                        <div className="input-box">
                            <span>To'liq ism</span>
                            <input className='login-input' type="text" placeholder='Ism va Familya'/>
                        </div>
                        <div className="input-box">
                            <span>Telefon nomer</span>
                            <input className='login-input' type="text" placeholder='+998 ' />
                        </div>
                        <button className='login-btn register-btn'>Keyingi</button>
                        <div className="login-blok">
                            <a className='login-blok-info' href="#">Akkaunt mavjud emasmi?</a>
                            <a className='login-blok-login' href="#">Kirish</a>
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
