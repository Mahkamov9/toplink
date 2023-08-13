import React from 'react';
import './Section.css';

import Ellipse from '../../Assets/Img/LooperGroup.png';

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
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
