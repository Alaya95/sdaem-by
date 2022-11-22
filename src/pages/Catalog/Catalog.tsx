import React, {useState} from "react";
import cls from "./catalog.module.scss";

import {BreadCrumbs} from "../../widgets/BreadCrumbs/BreadCrumbs";
import {Select} from "../../shared/Select/Select";
import {CatalogItem} from "../../features/CatalogItem/CatalogItem";
import {ROOMS} from "../../widgets/Filters/data";
import {Button} from "../../shared/Button/Button";
import {Pagination} from "../../widgets/Pagination/Pagination";
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";
import {ReactComponent as SettingSvg} from "../../app/assets/icons/setting.svg";
import {ReactComponent as ArrowSvg} from "../../app/assets/icons/chevron-down.svg";
import {recommendApartments} from "./data";
import {Checkbox} from "../../shared/Checkbox/Checkbox";
import classNames from "classnames";
import {Sorting} from "../../features/Sorting/Sorting";
import {SocialsIcons} from "../../shared/SocialIcons/SocialIcons";

let cx = classNames.bind(cls);

export const checkboxFilter = [
    {id: "1", name: "Газовая плита"},
    {id: "2", name: "Духовка"},
    {id: "3", name: "Кофеварка"},
    {id: "4", name: "Микроволновая печь"},
    {id: "5", name: "Посуда"},
    {id: "6", name: "Посудомоечная машина"},
];
export const Catalog = () => {
    const [activeMoreOptionFilter, setActiveMoreOptionsFilter] = useState(false);

    const toggleMoreOptionsFilter = () => {
        setActiveMoreOptionsFilter(!activeMoreOptionFilter);
    }
    return (
        <div className={cls.catalog}>
            <div className='container'>
                <BreadCrumbs/>
                <h3 className={cls.catalog__title}>Аренда квартир посуточно</h3>

                <div className={cls.catalog__recommend}>
                    <div className={cls.recommend__title}></div>
                    <div className={cls.recommend__wrapper}>
                        {recommendApartments.map((item) => (
                            <a className={cls.recommend__link} id={item.id}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cls.catalog__filter}>

                <div className={cls.filter}>
                    <div className={cls.filter__top}>
                        <div className='container'>
                            <div className={cls.filter__fields}>
                                <div className={cls.filter__field}>
                                    <label>Комнаты</label>
                                    <Select label='Комнаты' name='rooms' dataArr={ROOMS}/>
                                </div>
                                <hr/>
                                <div className={cls.filter__field}>
                                    <label>Цена за сутки</label>
                                    <div>
                                        <input type='text' placeholder='От'/>
                                        <p> - </p>
                                        <input type='text' placeholder='До'/>
                                    </div>
                                </div>
                                <hr/>
                                <div className={cls.filter__field}>
                                    <Button onClick={toggleMoreOptionsFilter} className={cls.filter__btn}>
                                        Больше опций <SettingSvg/>
                                    </Button>
                                </div>
                                <hr/>
                                <div className={cls.filter__field}>
                                    <Button className={cls.filter__btn}>
                                        На карте <LocationSvg/>
                                    </Button>
                                </div>
                                <hr/>
                                <div className={cls.filter__field}>
                                    <Button>Очистить</Button>
                                </div>
                                <div className={cls.filter__field}>
                                    <Button className={cls.filter__btn}>
                                        Показать объекты <ArrowSvg/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx(
                        cls.filter__bottom,
                        {[cls.active]: activeMoreOptionFilter}
                    )}>
                        <div className='container'>
                            <div className={cls.filter__options}>
                                <div className={cls.filter__selects}>
                                    <Select className={cls.filter__select} label={"спальные места"} dataArr={ROOMS}/>
                                    <Select className={cls.filter__select} label={"спальные места"} dataArr={ROOMS}/>
                                    <Select className={cls.filter__select} label={"спальные места"} dataArr={ROOMS}/>
                                </div>

                                {checkboxFilter.map(({id, name}, index) => (
                                    <Checkbox key={index} label={name}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.catalog__sort}>
                    <div className="container">
                        <Sorting />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={cls.list}>
                    <h3 className={cls.list__title}>Найдено 234 результата</h3>
                    <div className={cls.list__wrapper}>
                        <CatalogItem/>
                        <CatalogItem/>
                        <CatalogItem/>
                        <CatalogItem/>
                        <CatalogItem/>
                        <CatalogItem/>
                    </div>
                    <div className={cls.list__footer}>
                        <Pagination/>
                        <div className={cls.share}>
                            <p>Поделиться: </p>
                            <SocialsIcons />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.about}>
                <div className="container">
                    <div className={cls.about__wrapper}>
                        <h3 className={cls.about__title}>Показать найденные квартиры на карте</h3>
                        <p className={cls.about__text}> Ищите новостройки рядом с работой, парком или родственниками</p>

                        <Button className={cls.about__btn}><LocationSvg /> Открыть карту</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
