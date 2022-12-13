import React from "react";
import cls from './switchCheckbox.module.scss';

export const SwitchCheckbox = () => {
    return (
        <label className={cls.checkbox}>
            <input type="checkbox"/>
            <span className={cls.checkbox__switch}></span>
        </label>
    );
}