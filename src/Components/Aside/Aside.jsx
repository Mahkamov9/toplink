import React from 'react';
import './Aside.css'

export default function Aside() {
  return (
    <>
        <div className="aside">
            <div className="container">
                <div className="aside-box">
                    <div className="aside-text-box">
                        <h2 className='aside-subtext'>Toplinkdan foydalaning</h2>
                        <p className="aside-text">Havolangizga daʼvo qilish uchun pastga foydalanuvchi nomingizni kiriting</p>
                        <input className='aside-input' type="text"  placeholder='Toplink' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
