import React from 'react';
import cls from './header.module.scss';
import classNames from "classnames";
import {Logo} from "../Logo/Logo";
import {ReactComponent as HeartSvg} from '../../app/assets/icons/heart.svg';
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";
import {Link, NavLink} from "react-router-dom";

/* Настройки навбаров в хедере*/
const navTopItems = [
    {
        url: '/',
        textLink: 'Главная',
    },
    {
        url: 'news',
        textLink: 'Новости',
    },
    {
        url: 'tarifs',
        textLink: 'Размещение и тарифы',
    },
    {
        url: 'announce',
        textLink: 'Объявления на карте',
        icons: <LocationSvg/>
    },
    {
        url: 'contacts',
        textLink: 'Контакты',
    },
]
const subNavBottomItem = [
    {
        url: '/',
        textLink: 'Квартиры на сутки',
        icons: <LocationSvg className={cls.yellow}/>
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
            <div className="container">
                <div className={cls.header__top}>
                    <nav className={cls.nav}>
                        {navTopItems.map((item, index) => (
                            <Link to={`${item.url}`} className={cls.nav__link} key={index}>
                                {item.icons}{item.textLink}
                            </Link>
                        ))}
                    </nav>

                    <div className={cls.user__menu}>
                        <Link to={`favorites`} className={cls.favorite}> Закладки <HeartSvg/></Link>
                        <Link to={`auth`} className={cls.auth}>
                            Вход и регистрация
                        </Link>
                    </div>
                </div>
                <div className={cls.header__bottom}>
                    <Logo/>
                    <div  className={cls.subnav}>
                        {subNavBottomItem.map((item, index) => (
                            <NavLink
                                to={item.url}
                                className={
                                    classNames(cls.subnav__link)
                                }
                                key={index}
                            >
                                {item.textLink} {item.icons}
                            </NavLink>
                        ))}
                    </div>

                    <Link to="/" className={cls.link__btn}> + разместить объявление </Link>
                </div>
            </div>
        </header>
    );
};
