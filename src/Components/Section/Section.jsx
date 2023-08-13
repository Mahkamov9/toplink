import React from 'react';
import './Section.css';

import Ellipse from '../../Assets/Img/LooperGroup.png';
import Twitter from '../../Assets/Img/Twitter.png';
import MicStore from '../../Assets/Img/Microsoft Store.png';
import MailRu from '../../Assets//Img/Mail.ru.png';
import SberBank from '../../Assets/Img/Sberbank (Сбербанк).png';
import MasterCard from '../../Assets/Img/MasterCard.png';
import ShutterStock from '../../Assets/Img/Shutterstock.png';
import Spotify from '../../Assets/Img/Spotify.png';

export default function Section() {
  return (
    <>
        <div className="section">
            <div className="container">
                <div className="section-box">
                    <div className="section-right">
                        <h2 className='section-subtext'>Har vaqt Toplinkda statistikani qabul qiling</h2>
                        <p className='section-text'>Tomoshabinlar qaysi kontentga ko‘proq qiziqish bildirishini bilish uchun profil ko‘rinishlari va alohida havola bosishlarini kuzating. </p>
                    </div>
                    <div className="section-left">
                        <div className='section-img-box'>
                            <img className='section-ellipse' src={Ellipse} alt="Ellipse" />
                            <div className="section-png-box">
                            <div className='section-png MicStore '>
                                <img src={MicStore} alt="A" />
                                <p>899</p>
                            </div>
                            <div className='section-png mailru'>
                                <img src={MailRu} alt="H" />
                                <p>899</p>
                            </div>
                            <div className='section-png twitter'>
                                <img src={Twitter} alt="A" />
                                <p>899</p>
                            </div>
                            <div className='section-png mastercard'>
                                <img src={MasterCard} alt="D" />
                                <p>899</p>
                            </div>
                            <div className='section-png shut'>
                                <img src={ShutterStock} alt="J" />
                                <p>899</p>
                            </div>
                            <div className='section-png spotify'>
                                <img src={Spotify} alt="O" />
                                <p>899</p>
                            </div>
                            <div className='section-png sber'>
                                <img  src={SberBank} alt="N" />
                                <p>899</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}