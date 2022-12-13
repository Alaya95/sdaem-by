import React from 'react';
import {PopUp} from "../../shared/ui/PopUp/PopUp";
import cls from './register.module.scss';
import {Input} from "../../shared/ui/Input/Input";
import {Checkbox} from "../../shared/ui/Checkbox/Checkbox";
import {Button} from "../../shared/ui/Button/Button";

export const Register = () => {
    return (
        <PopUp>
            <div className={cls.register}>
                <div className={cls.column}>
                    <h3 className={cls.title}>Регистрация</h3>
                    <Input placeholder={"Логин"}/>
                    <Input placeholder={"Электронная почта"}/>
                    <Input placeholder={"Пароль"}/>
                    <Input placeholder={"Повторите пароль"}/>
                    <label className={cls.checkbox}>
                        <Checkbox/>
                        <span>Я не робот</span>
                    </label>
                    <Button size={'fullWidth'} colors={'secondary'}> Зарегистрироваться</Button>
                </div>
                <div className={cls.column}>
                    <ul className={cls.rule}>
                        <span>Пользователь обязуется:</span>
                        <li> предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;
                        </li>
                        <li> добавлять фотографии объектов соответствующие действительности. Администрация сайта
                            sdaem.by
                            оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет,
                            что информация не соответствует действительности, носит оскорбительный характер,
                            нарушает права и законные интересы других граждан либо действующее законодательство
                            Республики Беларусь.
                        </li>
                    </ul>
                    <div className={cls.box}>
                        <span>У вас уже есть аккаунт?</span>
                        <a className={cls.link} href="#">Войдите</a>
                    </div>
                </div>
            </div>
        </PopUp>
    );
}