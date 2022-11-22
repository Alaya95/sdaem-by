import React, {FC} from 'react';
import {CheckboxPropsTypes} from "./CheckboxTypes";
import cls from './checkbox.module.scss';


export const Checkbox: FC <CheckboxPropsTypes> = ({label}) => {
    return (
        <div className={cls.checkbox}>
            <input name='checkbox-field' className={cls.checkbox__input} type="checkbox"/>
            <label htmlFor="checkbox-field">{label}</label>
        </div>
    );
}
