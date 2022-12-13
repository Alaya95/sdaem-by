import React, {FC} from "react";
import cls from "./catalogItem.module.scss";
import {ReactComponent as UserSvg} from "../../app/assets/icons/user.svg";
import {ReactComponent as LocationSvg} from "../../app/assets/icons/location.svg";
import {ReactComponent as MetroSvg} from "../../app/assets/icons/metro.svg";
import {ReactComponent as PointSvg} from "../../app/assets/icons/ellipse.svg";
import {ReactComponent as HeartSvg} from "../../app/assets/icons/heart.svg";
import {ReactComponent as PhoneSvg} from "../../app/assets/icons/phone.svg";
import {CatalogItemPropDataTypes} from "./catalogItemTypes";
import {SliderImage} from "../../widgets/SliderImage/SliderImage";

export const CatalogItem: FC<CatalogItemPropDataTypes> = ({data}) => {
    return (
        <div className={cls.item}>
            <SliderImage className={cls.slider}>
                {data.imgUrl.map((url, index) => (
                    <div key={index} className={cls.item__image}>
                        <img src={url} alt="url"/>
                    </div>
                ))}
            </SliderImage>
            <div className={cls.item__content}>
                <div className={cls.item__header}>
                    <div className={cls.item__price}>
                        <p>{data.price}</p>
                        <span>{data.perDay}</span>
                    </div>
                    <div className={cls.item__person}><UserSvg/>{data.persons}</div>
                    <div className={cls.item__rooms}><p>{data.rooms.name}</p></div>
                </div>
                <div className={cls.item__description}>
                    <div className={cls.item__address}>
                        <p><LocationSvg/>{data.cities.name}{data.address}</p>
                        <div className={cls.item__location}>
                            <p><MetroSvg/>{data.metro.name}</p>
                            <p><PointSvg/>{data.district.name}</p>
                        </div>
                    </div>
                    <div>
                        {data.description.map((text, index) => (
                            <p className={cls.item__text} key={index}>{text}</p>
                        ))}
                    </div>
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