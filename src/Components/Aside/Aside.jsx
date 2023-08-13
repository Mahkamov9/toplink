import React from 'react';
import './Aside.css';

import InputIcon from '../../Assets/Svg/Input-icon.svg';
import FigureImg1 from '../../Assets/Img/figureimg1.png';
import Iphone13 from '../../Assets/Svg/Iphone13.svg';

export default function Aside() {
  return (
    <>
        <div className="aside">
            <div className="container">
                <div className="aside-box">
                    <div className="aside-text-box">
                        <h2 className='aside-subtext'>Toplinkdan foydalaning</h2>
                        <p className="aside-text">Havolangizga daʼvo qilish uchun pastga foydalanuvchi nomingizni kiriting</p>
                        <div className='input-box'>
                            <img className='input-icon' src={InputIcon} alt="X" />
                            <input className='aside-input' type="text"  placeholder='Toplink.uz/' />
                        </div>
                    </div>
                    <div className="aside-figure-box">
                        <div className="aside-figure-right">
                            <h2 className='figure-subtext'>Bizni minglab odamlar sevadi</h2>
                            <p className='figure-text'>Barcha kontentingizni hamma joyda baham ko'ring. Toplink havolangiz qayerda ishlatilishiga cheklov yo'q. </p>
                        </div>
                        <div className="aside-figure-left">
                            <img src={FigureImg1} alt="Picture" className="aside-figure-img" />
                        </div>
                    </div>

                    <div className="aside-figure-box">
                        <div className="aside-figure-left">
                            <img src={Iphone13} alt="Picture" className="aside-figure-img" />
                        </div>
                        <div className="aside-figure-right">
                            <h2 className='figure-subtext'>Profilingizni shaxsiylashtiring</h2>
                            <p className='figure-text'>Profilingizni o'zingiz kabi noyob qiling. Ranglar, shriftlar, fon rasmlari va boshqalarni moslashtiring. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
