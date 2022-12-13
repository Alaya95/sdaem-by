import React from 'react';
import cls from './login.module.scss';
import {Input} from "../../shared/ui/Input/Input";
import {ReactComponent as UserSvg} from "../../app/assets/icons/user.svg";
import {ReactComponent as PasswordSvg} from "../../app/assets/icons/password-lock.svg";
import {SwitchCheckbox} from "../../shared/ui/SwitchCheckbox/SwitchCheckbox";
import {PopUp} from "../../shared/ui/PopUp/PopUp";
import {Button} from "../../shared/ui/Button/Button";

export const Login = () => {
    return (
        <PopUp>
            <div className={cls.auth}>
                <h3 className={cls.auth__title}>Авторизация</h3>
                <p className={cls.auth__desc}>Авторизируйтесь, чтобы начать <br/> публиковать свои объявления</p>
                <Input placeholder={'Логин'} icon={<UserSvg/>}/>
                <Input placeholder={'Пароль'} icon={<PasswordSvg/>}/>
                <div className={cls.row}>
                    <label className={cls.auth__toggle}><SwitchCheckbox/><span>Запомнить меня</span></label>
                    <a className={cls.link} href='src/widgets/Login/Login#'>Забыли пароль?</a>
                </div>
                <Button size={"fullWidth"} colors={"secondary"} className={cls.btn}>Войти</Button>
            </div>
        </PopUp>
    );
}
