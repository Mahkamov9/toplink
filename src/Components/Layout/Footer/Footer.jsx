import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// import footerfonimg from '../' 

export default function Footer() {
  return (
    <>
     <div className="footer">
      <div className="container">
        <div className="footer-box">
          <h2 className='footer-subtext'>Bugunoq Toplink jamoasiga qo'shiling</h2>
          <p className="footer-text">O'z izdoshlariga o'zlarining barcha mazmunini kashf qilishda yordam berish uchun Toplink-dan foydalanadigan minglab foydalanuvchilarga qo'shiling.</p>
          <Link to={"/"} className="footer-btn">Toplinkdan bepul foydalaning</Link>
          <p className="footer-text">Bu haftada 5318 kishi roʻyxatdan oʻtgan!</p>
          <div className='footer-link-box'>
            <a className='footer-link' href="#">U qanday ishlaydi</a>
            <a className='footer-link' href="#">Xususiyat</a>
            <a className='footer-link' href="#">FAQ</a>
            <a className='footer-link' href="#">Xizmat ko'rsatish shartlari</a>
            <a className='footer-link' href="#">Maxfiylik siyosati</a>
          </div>
          <p className='footer-bottom-text'>Copyright © 2023 Toplink Barcha huquqlar himoyalangan</p>
        </div>
      </div>
     </div>
    </>
  )
}
