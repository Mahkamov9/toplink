import React from 'react';
import './WorkAbout.css';

import IphoneX from '../../Assets/Img/iPhoneX.png';
import Iphone11 from '../../Assets/Img/iPhone11.png';
import IphoneMoc from '../../Assets/Img/iPhoneMockup.png';
import WorkPageImg from '../../Assets/Img/screen.png';

export default function WorkAbout() {
  return (
    <>
        <div className="workabout">
            <div className="container">
                <div className="workabout-box">
                    <div className="workabout-text-box">
                        <h1 className='workabout-subtext'>U qanday ishlaydi</h1>
                        <p className='workabout-text'>
                        Bizning universal havolamiz sizning do‘stlaringizga barcha kontentingizga bir joydan kirish imkonini beradi va sizga ko'proq  baham ko'rish imkonini beradi.
                        </p>
                    </div>
                    <div className='work-medium'>
                        <div className="work-list">
                            <img src={IphoneX} alt="Iphone" />
                            <p className='work-list-subtext'>Toplinkda hisobingizni yarating</p>
                            <p className="work-list-text">Foydalanuvchi nomini tanlang, profilingizni sozlang va havolalaringizni qo'shing.</p>
                        </div>
                        <div className="work-list">
                            <img src={IphoneMoc} alt="Iphone" />
                            <p className='work-list-subtext'>Toplinkda hisobingizni yarating</p>
                            <p className="work-list-text">Foydalanuvchi nomini tanlang, profilingizni sozlang va havolalaringizni qo'shing.</p>
                        </div><div className="work-list">
                            <img src={Iphone11} alt="Iphone" />
                            <p className='work-list-subtext'>Toplinkda hisobingizni yarating</p>
                            <p className="work-list-text">Foydalanuvchi nomini tanlang, profilingizni sozlang va havolalaringizni qo'shing.</p>
                        </div>
                    </div>
                    <div className="work-bottom">
                            <div className="work-bottom-text-box">
                                <h1 className='workbottom-subtext'>Sizning havolalaringiz. Sizning kontentingiz.</h1>
                                <p className='workbottom-text'>Har qanday platformadan havola qo'shing. Quyida bizning sevimlilarimizdan ba'zilari</p>
                                <img className='workpageimg' src={WorkPageImg} alt="Picture" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
