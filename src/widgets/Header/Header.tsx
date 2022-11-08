import React from 'react';
import cls from './header.module.scss';
import classNames from "classnames";
import {Logo} from "../Logo/Logo";
import { ReactComponent as HeartSvg }  from '../../app/assets/icons/heart.svg';
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";

/* Настройки навбаров в хедере*/
const navTopItems = [
    {
        url: '/',
        textLink: 'Главная',
    },
    {
        url: '/',
        textLink: 'Новости',
    },
    {
        url: '/',
        textLink: 'Размещение и тарифы',
    },
    {
        url: '/',
        textLink: 'Объявления на карте',
        icons: <LocationSvg />
    },
    {
        url: '/',
        textLink: 'Контакты',
    },
]
const subNavBottomItem = [
    {
        url: '/',
        textLink: 'Квартиры на сутки',
        icons: <LocationSvg className={ cls.yellow  } />
    },
    {
        url: '/',
        textLink: 'Коттеджи и усадьбы',
    },
    {
        url: '/',
        textLink: 'Бани и Сауны',
    },
    {
        url: '/',
        textLink: 'Авто напрокат',
    },
]

export const Header = () => {
  return (
    <header id='header' className={cls.header}>
            <div className={cls.header__top}>
                <nav className={cls.nav}>
                    {navTopItems.map((item, index) => (
                        <a href={item.url} className={cls.nav__link} key={index}>
                            {item.icons}{ item.textLink}
                        </a>
                    ))}
                </nav>

                <div className={cls.user__menu}>
                    <a href="/" className={cls.favorite}> Закладки <HeartSvg /></a>
                    <a href="/" className={cls.auth}> Вход и регистрация</a>
                </div>
            </div>
            <div className={cls.header__bottom}>
                <Logo />
                <div className={cls.subnav}>
                    {subNavBottomItem.map((item, index) => (
                        <a href={item.url} className={cls.subnav__link} key={index}>
                            { item.textLink} {item.icons}
                        </a>
                    ))}
                </div>

                <a href="/" className={cls.link__btn}> + разместить объявление </a>
            </div>
    </header>
  );
};
