import React, {FC} from 'react';
import {SelectPropsTypes} from "./SelectTypes";
import cls from './select.module.scss';
import classNames from "classnames";

export const Select:FC <SelectPropsTypes> = ({ dataArr, name, className }) => {
    return (
        <select  defaultValue={"default"} className={classNames(cls.select, className)} name={name}>
            <option value={"default"} hidden disabled>Выбрать</option>
            {dataArr.map(({id, value, name}, index) => {
                return (
                    <option value={id} key={index}>{name}</option>
                );
            })}
        </select>
    );
}
