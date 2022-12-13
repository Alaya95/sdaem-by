import React from 'react';
import cls from './Main.module.scss';
import {Filters} from "../../widgets/Filters/Filters";
import {Link} from "react-router-dom";

import {FLAT_DATA, APARTMENTS_DATA, POPULARITY_DATA, GALLERY_CARDS, CARD_DATA} from "./data";
import {ReactComponent as ArrowSvg} from "../../app/assets/icons/chevron-down.svg";
import {ReactComponent as PointSvg} from "../../app/assets/icons/points.svg";
import classNames from "classnames";
import {Button} from "../../shared/Button/Button";
import {CatalogItem} from "../../features/CatalogItem/CatalogItem";
import {Select} from "../../shared/Select/Select";
import {GalleryCard} from "../../features/GalleryCard/GalleryCard";
import {citiesModel} from '../../entities/cities';
import {newsModel} from '../../entities/news';
import {catalogModel} from '../../entities/catalog';

export const Main = () => {
    const {data: cities = []} = citiesModel.citiesApi.useGetCitiesQuery('');
    const {data: news = []} = newsModel.newsApi.useGetNewsAllQuery('');
    const {data: catalog = []} = catalogModel.catalogApi.useGetCatalogItemLimitQuery(3);

    return (
        <div className={cls.main}>

            <div className="container">
                <div className={cls.main__filter}>
                    <Filters/>
                </div>
                <div className={cls.gallery}>

                    <div className={cls.gallery__cards}>
                        {GALLERY_CARDS.map((item) => <GalleryCard item={item}/>)}
                    </div>

                    <div className={cls.gallery__sidebar}>
                        <div className={cls.gallery__links}>
                            <h4>Квартиры</h4>
                            {FLAT_DATA.map(({id, name, countRequest}) => (
                                <div key={id} className={cls.gallery__link}>
                                    <Link to={'catalog'}>{name}</Link>
                                    <span>{countRequest}</span>
                                </div>
                            ))}
                        </div>
                        <div className={cls.gallery__links}>
                            <h4>Котттеджи и усадьбы</h4>
                            {APARTMENTS_DATA.map(({id, name, countRequest}) => (
                                <div key={id} className={cls.gallery__link}>
                                    <Link to={'catalog'}>{name}</Link>
                                    <span>{countRequest}</span>
                                </div>
                            ))}
                        </div>
                        <div className={cls.gallery__links}>
                            <h4>Популярные направления</h4>
                            {POPULARITY_DATA.map(({id, name}) => (
                                <div key={id} className={cls.gallery__link}>
                                    <Link to={'catalog'}>{name}</Link>
                                    <span></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cls.rent}>
                    <div className={cls.rent__header}>
                        <div>
                            <h3 className={cls.about__title}>Поиск квартир на карте</h3>
                            <h4 className={cls.about__subtitle}>Квартира на сутки в Минске</h4>
                        </div>
                        <div>
                            <Select className={cls.rent__select} label='Комнаты' name='rooms'
                                    dataArr={cities}/>
                            <Select label='Комнаты' name='rooms' dataArr={cities}/>
                        </div>
                    </div>
                    <div className={cls.rent__wrapper}>
                        {catalog.map(item => (
                            <CatalogItem key={item.id} data={item}/>
                        ))}
                        <div className={cls.arrow}>
                            <button className={cls.arrow__left}>
                                <ArrowSvg/>
                            </button>
                            <button className={cls.arrow__right}>
                                <ArrowSvg/>
                            </button>
                        </div>
                    </div>
                    <div className={cls.rent__footer}>
                        <p>341 <span>+</span></p>
                        <div className={cls.hr}></div>
                        <Link className={cls.rent__link} to={'catalog'}>Посмотреть
                            все <ArrowSvg/></Link>
                    </div>
                </div>
            </div>
            <div className={cls.presentation}>
                <div className="container">
                    <div className={cls.presentation__box}>
                        <h3>Поиск квартир на карте</h3>
                        <p>Ищите квартиры на сутки в центре города, возле парка или в живописном
                            районе</p>
                        <Link to='catalog'>Открыть карту</Link>
                    </div>
                    <div className={cls.presentation__wrapper}>
                        {CARD_DATA.map(({id, desc, title, titleIcon, btnText, btnIcon,}) => (
                            <div key={id} className={classNames(cls.card)}>
                                <div className={cls.card__header}>
                                    {titleIcon &&
                                        <div className={cls.card__icon}>
                                            {titleIcon}
                                        </div>}
                                    <h3 className={cls.card__title}>{title}</h3>
                                </div>
                                <p className={cls.card__desc}>{desc}</p>
                                <Button>{btnText} {btnIcon}</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cls.about}>
                <div className="container">
                    <div className={cls.about__wrapper}>
                        <div className={cls.about__description}>
                            <h3 className={cls.about__title}>ЧТО ТАКОЕ SDAEM.BY</h3>
                            <h4 className={cls.about__subtitle}>Квартира на сутки в Минске</h4>
                            <div className={cls.about__img}>
                                <PointSvg/>
                            </div>
                            <p>
                                <span>Нужна квартира на сутки в Минске?</span> <br/>
                                На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог
                                насчитывает
                                <span>более 500 квартир.</span>
                                Благодаря удобной навигации вы быстро найдете подходящий вариант.
                            </p>
                            <p>
                                В каталоге представлены комфортабельные однокомнатные квартиры на
                                сутки и квартиры с большим количеством комнат в разных районах
                                города, с различной степенью удобства от дешевых до VIP с джакузи.
                            </p>
                            <br/>
                            <p>
                                Чтобы снять квартиру на сутки в Минске, вам достаточно определиться
                                с выбором и связаться с владельцем для уточнения условий аренды и
                                заключить договор. Заметим, на сайте представлены исключительно
                                квартиры на сутки без посредников, что избавляет посетителей от
                                необходимости взаимодействовать с агентствами, тратя свое время и
                                деньги. Также пользователи сайта могут совершенно бесплатно
                                размещать объявления о готовности сдать квартиру на сутки.
                            </p>
                        </div>
                        <div className={cls.news}>
                            <div className={cls.news__title}>Новости</div>
                            <div className={cls.news__links}>
                                {news.map(({id, title, date}, index) => (
                                    <>
                                        <div key={id} className={cls.news__link}>
                                            <Link to={'/news'}>{title}</Link>
                                            <span>{date}</span>
                                        </div>
                                        {index != (news.length - 1) && <hr/>}
                                    </>
                                ))}
                            </div>
                            <Link className={cls.news__more} to={'news'}>Посмотреть все <ArrowSvg/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
