import React from 'react';
import './Feature.css';
import Section from '../Section/Section';
// import IconComp from '../IconComp/IconComp';

export default function Feature() {
  return (
    <>
        <div className="all">
        <div className="container">
          <h2 className="all_page_title">Xususiyat</h2>
          <p className="all_page_text">
            Bizning universal havolamiz sizning do'stlaringizga barcha
            kontentingizga bir joydan kirish imkonini beradi va sizga ko'proq
            baham ko'rish imkonini beradi.
          </p>
          <div className="all_flex">
            {/* 1 */}
            <div className="all_card">
              <div className="card_text_box">
                <h2 className="all_card_title">
                  Yagona havola orqali bir nechta yo'nalishlar
                </h2>
                <p className="all_card_desc">
                  Har qachongidan ham ko'proq kontentni baham ko'rish uchun
                  kuchni bo'shating. Facebook, Instagram, shaxsiy veb-saytingiz,
                  savdo do'koningiz yoki ustida ishlayotgan har qanday
                  loyihangizni bir joyda bog'lang. Qaysi URL manzilini bio-ga
                  qo'yishni hech qachon hal qilishingiz shart emas.
                </p>
              </div>
              <img
                src="https://www.toplink.uz/static/media/123q.2bc1611692ee7b712681.png"
                alt="img"
              />
            </div>
            <div className="all_card">
              <img
                src="https://www.toplink.uz/static/media/kontentImg.7061183283d437167493.png"
                alt="img"
              />
              <div className="card_text_box">
                <h2 className="all_card_title">Haqiqiy vaqt tahlili</h2>
                <p className="all_card_desc">
                  Profilni ko'rish va individual havolalarni bosish orqali
                  o'sish potentsialingizni maksimal darajada oshiring.
                  Profilingizning ishlashini tushunib, auditoriyangizni qaysi
                  havolalar qiziqtirayotganini bilib oling.
                </p>
              </div>
            </div>
            {/* 2 */}

            <div className="all_card">
              <div className="card_text_box">
                <h2 className="all_card_title">Profilni moslashtirish</h2>
                <p className="all_card_desc">
                  Profilingizni o'zingiz kabi noyob qiling. Shaxsiy fon
                  rasmlari, ranglari, tugmalari va shrift uslublarini qo‘shish
                  orqali sahifangizni uslubingiz yoki brendingizga moslashtirib
                  shaxsiylashtiring yoki mavjud mavzularimizdan biri yordamida
                  uni sodda saqlang
                </p>
              </div>
              <img
                src="https://www.toplink.uz/static/media/iPhone.06b5e102e3925e8efb1f.png"
                alt="img"
              />
            </div>
            <div className="all_card">
              <img
                src="https://www.toplink.uz/static/media/futureImg4.c6b060e3eb62bf8ec6ed.png"
                alt="img"
              />
              <div className="card_text_box">
                <h2 className="all_card_title">Haqiqiy vaqt tahlili</h2>
                <p className="all_card_desc">
                  Profilingizdagi havolalarni qo'shing, qayta tashkil qiling va
                  moslashtiring, so'ngra darhol va hamma joyda baham ko'rish
                  uchun toplink havolangizni nusxalang va joylashtiring. Bizning
                  foydalanuvchilarga qulay boshqaruv paneli profilingizni
                  yaratish va tahrirlashni osonlashtiradi.
                </p>
              </div>
            </div>

            {/* 3 */}
            
            <Section/>

            <div className="all_card mg">
              <img
                src="https://www.toplink.uz/static/media/display.0977494b2924a8df92e2.png"
                alt="img"
              />
              <div className="card_text_box">
                <h2 className="all_card_title">Displey rejimi</h2>
                <p className="all_card_desc">
                  O'zingizning havolalaringizni o'zingiz ko'rsating.
                  Havolalaringizni profilingizning yuqori yoki pastki qismida
                  piktogramma sifatida ko'rsatish imkoniyatlari bilan siz
                  tarkibingizni qanday taqdim etishingizni to'liq sozlashingiz
                  mumkin.
                </p>
              </div>
            </div>

            {/* 4 */}

            <div className="all_card">
              <div className="card_text_box">
                <h2 className="all_card_title">
                  Yagona havola orqali bir nechta yo'nalishlar
                </h2>
                <p className="all_card_desc">
                  Ba'zida sevimlilarni tanlash yaxshidir. Har qanday
                  havolalaringizni maxsus animatsiya bilan ajralib tursin va
                  tomoshabinlarga bosishga undaydi
                </p>
              </div>
              <img
                src="https://www.toplink.uz/static/media/1234Img.959594f958e62152fe6c.png"
                alt="img"
              />
            </div>
            <div className="all_card">
              <img
                src="https://www.toplink.uz/static/media/qw0.3e39fb901d453a0c8895.png"
                alt="img"
              />
              <div className="card_text_box">
                <h2 className="all_card_title">Haqiqiy vaqt tahlili</h2>
                <p className="all_card_desc">
                  Siz baham ko'rmoqchi bo'lgan katta narsa bormi? Bir tugmani
                  bosish orqali toplink sahifangizni ma'lum bir havolaga
                  yo'naltiring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
