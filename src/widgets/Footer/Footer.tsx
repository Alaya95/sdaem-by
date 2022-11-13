import React from 'react';
import cls from './footer.module.scss'
import {Logo} from "../Logo/Logo";
import { ReactComponent as InstagramSvg }  from '../../app/assets/icons/socials/instagram.svg';
import { ReactComponent as VkSvg }  from '../../app/assets/icons/socials/vk.svg';
import { ReactComponent as FacebookSvg }  from '../../app/assets/icons/socials/facebook.svg';

/* импорты картинок платежных карт */
import  mastercard from '../../app/assets/img/mastercard.png';
import  belcard from  '../../app/assets/img/belcard.png';
import  visa from '../../app/assets/img/visa.png';
import  mastercardSecurecode from '../../app/assets/img/mastercard-securecode.png';
import  webpay from '../../app/assets/img/webpay.png';
import  verifayVisa from '../../app/assets/img/verified-by-visa.png';

export const Footer = () => {
    return (
       <footer className={cls.footer}>
           <div className="container">
               <div className={cls.footer__wrapper}>
                   <div className={cls.info}>
                       <div className={cls.footer__logo}>
                           <Logo />
                           <p className={cls.footer__sublogo}>Сдаём бай</p>
                       </div>

                       <div className={cls.info__data}>
                           <p>ИП Шушкевич Андрей Викторович</p>
                           <p>УНП 192602485 Минским горисполкомом 10.02.2016</p>
                           <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
                           <p>+375 29 621 48 33, sdaem@sdaem.by</p>
                           <p>Режим работы: 08:00-22:00</p>
                       </div>
                   </div>

                   <div className={cls.footer__block}>
                       <div className={cls.footer__top}>
                           <div className={cls.footer__nav}>
                               <a href="/">Коттеджи и усадьбы</a>
                               <a href="/">Бани и сауны</a>
                               <a href="/">Авто на прокат</a>
                           </div>

                           <div  className={cls.footer__nav}>
                               <p>Квартиры</p>
                               <a href="">Квартиры в Минске</a>
                               <a href="">Квартиры в Гомеле</a>
                               <a href="">Квартиры в Бресте</a>
                               <a href="">Квартиры в Витебске</a>
                               <a href="">Квартиры в Гродно</a>
                               <a href="">Квартиры в Могилеве</a>
                           </div>
                           <div  className={cls.footer__nav} >
                               <a href="">Новости</a>
                               <a href="">Размещение и тарифы </a>
                               <a href="">Объявления на карте</a>
                               <a href="">Контакты</a>
                           </div>
                       </div>
                       <div className={cls.footer__bottom}>
                           <div className={cls.social}>
                               <p>Мы в соцсетях</p>
                               <div className={cls.social__icons}>
                                   <a className={cls.social__link} href="#">
                                       <InstagramSvg />
                                   </a>
                                   <a className={cls.social__link} href="#">
                                       <VkSvg />
                                   </a>
                                   <a className={cls.social__link} href="#">
                                       <FacebookSvg />
                                   </a>
                               </div>

                           </div>

                           <div className="pays">
                               <img src={visa} alt=""/>
                               <img src={webpay} alt=""/>
                               <img src={verifayVisa} alt=""/>
                               <img src={mastercard} alt=""/>
                               <img src={mastercardSecurecode} alt=""/>
                               <img src={belcard} alt=""/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
    );
}
