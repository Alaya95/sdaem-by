import React from "react";
import cls from './contacts.module.scss';

import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";

import {ReactComponent as UserSvg} from "../../app/assets/icons/user.svg";
import {ReactComponent as EmailSvg} from "../../app/assets/icons/socials/mail.svg";
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";
import {ReactComponent as ClockSvg} from "../../app/assets/icons/clock.svg";
import {ReactComponent as PhoneSvg} from "../../app/assets/icons/phone.svg";
import {ReactComponent as ErrorSvg} from "../../app/assets/icons/error.svg";
import {ReactComponent as VkSvg} from "../../app/assets/icons/socials/vk.svg";
import {ReactComponent as FacebookSvg} from "../../app/assets/icons/socials/facebook-outline.svg";
import {ReactComponent as InstagramSvg} from "../../app/assets/icons/socials/instagram.svg";

export const Contacts = () => {
    return (
        <div className={cls.contact}>
            <div className="container">
                <div className={cls.wrapper}>
                    <div className={cls.info}>
                        <h3 className={cls.info__title}>Контакты</h3>
                        <p className={cls.info__description}>Если у Вас есть пожелания, предложения или претензии по
                            организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                        <ul className={cls.info__list}>
                            <li>
                                <span className={cls.icon}>
                                   <LocationSvg/>
                                </span>
                                220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
                            </li>
                            <li>
                                <span className={cls.icon}>
                                   <PhoneSvg/>
                                </span>
                                +375 29 621-48-33
                            </li>
                            <li>
                                <span className={cls.icon}><EmailSvg/></span>
                                sdaem@sdaem.by
                            </li>
                            <li>
                                <span className={cls.icon}><ClockSvg/></span>
                                Режим работы: 08:00-22:00
                            </li>
                        </ul>
                        <p>ИП Шушкевич Андрей Викторович <br/>
                            УНП 192602485 Минским горисполкомом 10.02.2016
                        </p>
                        <div className={cls.info__message}>
                            <ErrorSvg/>
                            <p>Администрация сайта не владеет информацией
                                о наличии свободных квартир</p>
                        </div>
                    </div>
                    <div className={cls.form}>
                        <div className={cls.form__wrapper}>
                            <label className={cls.form__label} htmlFor="">
                                <span>Ваше имя</span>
                                <Input icon={<UserSvg/>} placeholder={'Введите имя'} type="text"/>
                            </label>
                            <label className={cls.form__label}>
                                <span>Ваша электронная почта</span>
                                <Input icon={<EmailSvg/>} placeholder={'Введите имя'} type="text"/>
                            </label>
                        </div>
                        <label className={cls.form__label}>
                            <span>Ваше сообщение</span>
                            <textarea name=""></textarea>
                        </label>
                        <Button className={cls.btn} colors={'primary'}>Отправить</Button>
                    </div>
                    <div className={cls.social}>
                        <a className={cls.social__link} href="https://vk.com">
                            <VkSvg/>
                        </a>
                        <a className={cls.social__link} href="https://vk.com">
                            <FacebookSvg/>
                        </a>
                        <a className={cls.social__link} href="https://vk.com">
                            <InstagramSvg/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}