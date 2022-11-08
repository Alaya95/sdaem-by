import React from 'react';
import logo from '../../app/assets/img/logo.png';
import cls from './logo.module.scss';

export const Logo = () => {
    return (
        <a href="/" className={cls.logo}>
            <img src={logo} alt="Logo"/>
        </a>
    );
}
