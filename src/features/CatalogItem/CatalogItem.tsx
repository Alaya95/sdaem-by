import React from "react";
import cls from "./catalogItem.module.scss";
import catalogItem from "../../app/assets/img/newphoto.png";
import {ReactComponent as UserSvg} from "../../app/assets/icons/user.svg";
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";
import {ReactComponent as MetroSvg} from "../../app/assets/icons/metro.svg";
import {ReactComponent as PointSvg} from "../../app/assets/icons/ellipse.svg";
import {ReactComponent as HeartSvg} from "../../app/assets/icons/heart.svg";
import {ReactComponent as PhoneSvg} from "../../app/assets/icons/phone.svg";

export const CatalogItem = () => {
    return (
        <div className={cls.item}>
            <div className={cls.item__image}>
                <img src={catalogItem} alt=""/>
            </div>

            <div className={cls.item__content}>
                <div className={cls.item__header}>
                    <div className={cls.item__price}>
                        <p>65,00 BYN</p>
                        <span>за сутки</span>
                    </div>
                    <div className={cls.item__person}>
                        <UserSvg/>
                        4 (2+2)
                    </div>

                    <div className={cls.item__rooms}>
                        <p>4 комн.</p>
                    </div>
                </div>
                <div className={cls.item__description}>
                    <div className={cls.item__address}>
                        <p><LocationSvg/> Минск, б-р Мулявина, д. 10</p>
                        <div className={cls.item__location}>
                            <p><MetroSvg/> Грушевка</p>
                            <p><PointSvg/> Шабаны</p>
                        </div>
                    </div>
                    <p className={cls.item__text}>
                        Какое-то описание квартиры, описание квартиры,
                        описание квартиры, описание квартиры, описание квартиры,
                        описание квартиры, описание квартиры, описание квартиры,
                        описание квартиры, описание ...
                    </p>
                </div>
                <hr className={cls.hr}/>
                <div className={cls.item__bottom}>
                    <button className={cls.item__favorite}><HeartSvg/></button>
                    <button className={cls.item__btn}><PhoneSvg/>Контакты</button>
                    <button className={cls.item__btn}>подробнее</button>
                </div>
            </div>
        </div>
    );
}