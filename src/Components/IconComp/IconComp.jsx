import React from 'react';
import './IconComp.css';

import looper from '../../Assets/Img/LooperGroup.png';
import Twitter from '../../Assets/Img/Twitter.png';
import microsoft from '../../Assets/Img/Microsoft Store.png';
import mail from '../../Assets//Img/Mail.ru.png';
import sber from '../../Assets/Img/Sberbank (Сбербанк).png';
import mastercard from '../../Assets/Img/MasterCard.png';
import shutterstock from '../../Assets/Img/Shutterstock.png';
import spotify from '../../Assets/Img/Spotify.png';

function IconComp() {
    return (
      <>
        <div className="status">
          <div className="container">
            <div className="status_flex">
              <div className="status_desc">
                <h2 className="status_title">
                  Har vaqt Toplinkda statistikani qabul qiling
                </h2>
                <p className="status_text">
                  Tomoshabinlar qaysi kontentga ko'proq qiziqish bildirishini
                  bilish uchun profil ko'rinishlari va alohida havola bosishlarini
                  kuzating.
                </p>
              </div>
              <div className="status_img_box">
                <img className="status_picture" src={looper} alt="looper" />
                <div className="status_pics tw">
                  <img src={Twitter} alt="twitter" />
                  <span>1,124</span>
                </div>
                <div className="status_pics mk">
                  <img src={microsoft} alt="microsoft" />
                  <span>899</span>
                </div>
                <div className="status_pics ml">
                  <img src={mail} alt="sasa" />
                  <span>1,227</span>
                </div>
                <div className="status_pics mc">
                  <img src={mastercard} alt="mastercard" />
                  <span>985</span>
                </div>
                <div className="status_pics rd">
                  <img src={shutterstock} alt="rd" />
                  <span>680</span>
                </div>
                <div className="status_pics shb">
                  <img src={sber} alt="sberbank" />
                  <span>703</span>
                </div>
                <div className="status_pics spy">
                  <img src={spotify} alt="spotify" />
                  <span>1,035</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default IconComp;