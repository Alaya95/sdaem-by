import React, {FC} from 'react';
import {SelectPropsTypes} from "./SelectTypes";
import cls from './select.module.scss';

export const Select:FC <SelectPropsTypes> = ({ dataArr, name }) => {
    return (
        <select className={cls.select} name={name}>
            <option hidden selected disabled>Выбрать</option>
            {dataArr.map(({id, value, name}) => {
                return (
                    <option value={value} key={id}>{name}</option>
                );
            })}
        </select>
    );
}
