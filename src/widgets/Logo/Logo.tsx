import React from 'react';
import logo from '../../app/assets/img/logo.png';
import cls from './logo.module.scss';
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className={cls.logo}>
            <img src={logo} alt="Logo"/>
        </Link>
    );
}
