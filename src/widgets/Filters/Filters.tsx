import React, { useState} from 'react';
import {Select} from "../../shared/Select/Select";
import { ReactComponent as SettingSvg }  from '../../app/assets/icons/setting.svg';
import { ReactComponent as LocationSvg }  from '../../app/assets/icons/location.svg';
import { ReactComponent as ArrowSvg }  from '../../app/assets/icons/chevron-down.svg';
import cls from './filters.module.scss';
import cn from "classnames"
import {ROOMS} from "./data";
import {citiesModel} from "../../entities/cities";

const filterNavItems: Array <{ id: number, textBtn:string }>= [
    {id: 1, textBtn: "Квартиры на сутки"},
    {id: 2, textBtn: "Коттеджи и усадьбы"},
    {id: 3, textBtn: "Бани и сауны"},
    {id: 4, textBtn: "Авто напрокат"},
]


export const Filters = () => {
    const [activeBtnIndex, setActiveBtnIndex] = useState(1)

    const clickMe= (index: number) => {
        setActiveBtnIndex(index);
    };

    const {data: cities = []} = citiesModel.citiesApi.useGetCitiesQuery('');

    return (
        <div>
            <div className={cls.filter}>
                <div className={cls.filter__nav}>
                    {filterNavItems.map(({id, textBtn}, index) => {
                       return(
                           <button key={id} onClick={() => clickMe(index) }
                               className={ cn(cls.filter__item, {
                                   [cls.active]: index === activeBtnIndex
                               })}
                           >{textBtn}</button>
                       );
                    })}
                </div>

                <div className={cls.filter__wrapper}>
                    <div className={cls.filter__field}>
                        <label>Город</label>
                        <Select dataArr={cities} />
                    </div>
                    <hr/>
                    <div  className={cls.filter__field}>
                        <label>Комнаты</label>
                        <Select label='Комнаты' name='rooms' dataArr={ ROOMS } />
                    </div>
                    <hr/>
                    <div className={cls.filter__field}>
                        <label>Цена за сутки</label>
                        <div>
                            <input type="text" placeholder='От'/>
                            <p> - </p>
                            <input type="text" placeholder='До'/>
                        </div>
                    </div>
                    <hr/>
                    <div className={cls.filter__field}>
                        <button className={cls.filter__btn}>Больше опций <SettingSvg /></button>
                    </div>
                    <hr/>
                    <div className={cls.filter__field}>
                        <button className={cls.filter__btn}>На карте <LocationSvg /></button>
                    </div>
                    <hr/>
                    <div className={cls.filter__field}>
                        <button className={cls.filter__btn}>Показать <ArrowSvg /></button>
                    </div>
                </div>
            </div>

        </div>
    );
}
