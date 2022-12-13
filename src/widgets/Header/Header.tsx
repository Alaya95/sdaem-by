import React from 'react';
import cls from './header.module.scss';
import classNames from "classnames";
import {Logo} from "../Logo/Logo";
import {ReactComponent as HeartSvg} from '../../app/assets/icons/heart.svg';
import {Link, NavLink} from "react-router-dom";
import {navTopItems, subNavBottomItem} from "./settingsHeader";

export const Header = () => {
    return (
        <header id='header' className={cls.header}>
            <div className="container">
                <div className={cls.header__top}>
                    <nav className={cls.nav}>
                        {navTopItems.map(({url, icons, textLink}, index) => (
                            <Link to={`${url}`} className={cls.nav__link} key={index}>
                                {icons}{textLink}
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
                    <div className={cls.subnav}>
                        {subNavBottomItem.map(({url, textLink, icons}, index) => (
                            <NavLink to={url} className={classNames(cls.subnav__link)} key={index}>
                                {textLink} {icons}
                            </NavLink>
                        ))}
                    </div>
                    <Link to="/" className={cls.link__btn}> + разместить объявление </Link>
                </div>
            </div>
        </header>
    );
};
