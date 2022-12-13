import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";
import cls from "./header.module.scss";
import React from "react";

export const navTopItems = [
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
export const subNavBottomItem = [
    {
        url: '/catalog',
        textLink: 'Квартиры на сутки',
        icons: <LocationSvg className={cls.yellow}/>
    },
    {
        url: '/catalog',
        textLink: 'Коттеджи и усадьбы',
    },
    {
        url: '/catalog',
        textLink: 'Бани и Сауны',
    },
    {
        url: '/catalog',
        textLink: 'Авто напрокат',
    },
]