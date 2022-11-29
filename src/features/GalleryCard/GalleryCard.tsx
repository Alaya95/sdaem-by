import React, {FC} from "react";
import cls from "./galleryCard.module.scss";
import {GalleryCardPropTypes} from "./GalleryCardTypes";

export const GalleryCard: FC<GalleryCardPropTypes> = ({item}) => {
    return (
        <div className={cls.card} key={item.id}>
            <div className={cls.card__content}>
                <p className={cls.subtitle}>{item.subtitle}</p>
                <h3 className={cls.title}>{item.title}</h3>
            </div>
            <img alt={item.title} className={cls.img} src={item.image}/>
        </div>
    );
}