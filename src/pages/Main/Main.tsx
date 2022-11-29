import React from 'react';
import cls from './Main.module.scss';
import {Filters} from "../../widgets/Filters/Filters";
import {Link} from "react-router-dom";
import autoImg from '../../app/assets/img/auto-gallery.png';
import flatImg from '../../app/assets/img/flat-gallery.png';
import bathhouseImg from '../../app/assets/img/bathhouse-gallery.png';
import apartmentsImg from '../../app/assets/img/apartments-gallery.png';

import {ReactComponent as ArrowSvg} from "../../app/assets/icons/chevron-down.svg";
import {ReactComponent as PointSvg} from "../../app/assets/icons/points.svg";
import classNames from "classnames";
import {Button} from "../../shared/Button/Button";
import {ReactComponent as CardTitleAdSvg} from "../../app/assets/icons/move1.svg";
import {ReactComponent as CardTitleSvg} from "../../app/assets/icons/move2.svg";
import {CatalogItem} from "../../features/CatalogItem/CatalogItem";
import {Select} from "../../shared/Select/Select";
import {GalleryCard} from "../../features/GalleryCard/GalleryCard";

const CITIES = [
    {id: 1, name: "Минск", value: "minsk"},
    {id: 2, name: "Гродно", value: "grodno"},
    {id: 3, name: "Брест", value: "brest"},
    {id: 4, name: "Витебск", value: "vitebsk"},
    {id: 5, name: "Гомель", value: "gomel"},
    {id: 6, name: "Могилев", value: "mogilev"},
];
const FLAT_DATA = [
    {id: 1, name: "Квартиры в Минске", countRequest: 2210},
    {id: 2, name: "Квартиры в Гомеле", countRequest: 1265},
    {id: 3, name: "Квартиры в Гродно", countRequest: 452},
    {id: 4, name: "Квартиры в Могилеве", countRequest: 110},
    {id: 5, name: "Квартиры в Бресте", countRequest: 100},
    {id: 6, name: "Квартиры в Витебске", countRequest: 150},
];
const APARTMENTS_DATA = [
    {id: 1, name: "Аггроусадьбы", countRequest: 2210},
    {id: 2, name: "Коттеджи", countRequest: 1265},
    {id: 3, name: "Загородный комплекс", countRequest: 452},
    {id: 4, name: "Базы отдыха", countRequest: 2210},
    {id: 5, name: "Еще"},
];
const POPULARITY_DATA = [
    {id: 1, name: "Коттеджи и усадьбы на о. Брасласких "},
    {id: 2, name: "Коттеджи и усадьбы (жилье) на Нарочи"},
    {id: 3, name: "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере"},
];
const cardData = [
    {
        id: 1,
        title: "Начните привлекать клиентов бесплатно!",
        desc: 'Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно бесплатно создавать и публиковать объявления на сайте. ',
        titleIcon: <CardTitleAdSvg/>,
        btnText: '+  Разместить объявление',
        btnColor: 'secondary',
    },
    {
        id: 2,
        title: "Поднимайте объявления",
        titleIcon: <CardTitleSvg/>,
        desc: 'Вы в любое время можете поднимать объявления вверх первой страницы каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.',
        btnText: 'Узнать стоимость услуги',
        btnIcon: <ArrowSvg/>,
        btnColor: 'secondary',
    },
    {
        id: 3,
        title: "Приоритет Gold ",
        desc: 'Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога! Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.',
        btnText: 'Еще о тарифе Gold',
        btnIcon: <ArrowSvg/>,
        btnColor: 'primary',
        gold: true
    }
]
const GALLERY_CARDS = [
    {
        id: 1, title: "Квартиры на сутки",
        subtitle: "Снять квартиру",
        image: flatImg,
    },
    {
        id: 2,
        title: "Коттеджи и усадьбы",
        subtitle: "Снять коттедж на праздник",
        image: apartmentsImg,
    },
    {
        id: 3, title: "Бани и сауны", subtitle: "Попариться в бане с друзьми",
        image: bathhouseImg,
        mr: "30px"
    },
    {
        id: 4,
        title: "Авто на прокат",
        subtitle: "Если срочно нужна машина",
        image: autoImg,
    }
]

export const Main = () => {
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
                                <div  key={id} className={cls.gallery__link}>
                                    <Link to={'catalog'}>{name}</Link>
                                    <span>{countRequest}</span>
                                </div>
                            ))}
                        </div>
                        <div className={cls.gallery__links}>
                            <h4>Популярные направления</h4>
                            {POPULARITY_DATA.map(({id, name}) => (
                                <div  key={id} className={cls.gallery__link}>
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
                            <Select className={cls.rent__select} label='Комнаты' name='rooms' dataArr={CITIES}/>
                            <Select label='Комнаты' name='rooms' dataArr={CITIES}/>
                        </div>
                    </div>
                    <div className={cls.rent__wrapper}>
                        <CatalogItem/>
                        <CatalogItem/>
                        <CatalogItem/>
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
                        <Link className={cls.rent__link} to={'catalog'}>Посмотреть все <ArrowSvg/></Link>
                    </div>
                </div>
            </div>
            <div className={cls.presentation}>
                <div className="container">
                    <div className={cls.presentation__box}>
                        <h3>Поиск квартир на карте</h3>
                        <p>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
                        <Link to='catalog'>Открыть карту</Link>
                    </div>
                    <div className={cls.presentation__wrapper}>
                        {cardData.map(({id, desc, title, titleIcon, btnText,  btnIcon, }) => (
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
                                На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span>более 500
                                квартир.</span> Благодаря удобной навигации вы быстро найдете подходящий вариант.
                            </p>
                            <p>
                                В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с
                                большим количеством комнат в разных районах города, с различной степенью удобства от
                                дешевых до VIP
                                с джакузи.
                            </p>
                            <br/>
                            <p>
                                Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и
                                связаться
                                с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте
                                представлены исключительно квартиры на сутки без посредников, что избавляет посетителей
                                от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также
                                пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать
                                квартиру на сутки.
                            </p>
                        </div>
                        <div className={cls.news}>
                            <div className={cls.news__title}>Новости</div>
                            <div className={cls.news__links}>
                                <div className={cls.news__link}>
                                    <Link to={'/news'}>Линия Сталина: суровый отдых в усадьбах на сутки</Link>
                                    <span>14 Январь</span>
                                </div>
                                <hr/>
                                <div className={cls.news__link}>
                                    <Link to={'/news'}>Линия Сталина: суровый отдых в усадьбах на сутки</Link>
                                    <span>14 Январь</span>
                                </div>
                                <hr/>
                                <div className={cls.news__link}>
                                    <Link to={'/news'}>Линия Сталина: суровый отдых в усадьбах на сутки</Link>
                                    <span>14 Январь</span>
                                </div>
                                <hr/>
                                <div className={cls.news__link}>
                                    <Link to={'/news'}>Линия Сталина: суровый отдых в усадьбах на сутки</Link>
                                    <span>14 Январь</span>
                                </div>
                                <hr/>
                                <div className={cls.news__link}>
                                    <Link to={'/news'}>Линия Сталина: суровый отдых в усадьбах на сутки</Link>
                                    <span>14 Январь</span>
                                </div>
                            </div>
                            <Link className={cls.news__more} to={'news'}>Посмотреть все <ArrowSvg/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
