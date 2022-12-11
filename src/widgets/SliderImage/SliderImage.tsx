import React, {FC} from "react";
import cls from "./sliderImage.module.scss";
import classNames from "classnames";
import Slider from "react-slick";
import {IArrows, ISliderImage} from "./sliderImageTypes";

const NextArrow: FC<IArrows> = ({className, style, onClick}) => {
    return (
        <div
            className={classNames(cls.arrows, className)}
            style={{...style, right: "5px", zIndex: 10}}
            onClick={onClick}
        />
    )
}

const PrevArrow: FC<IArrows> = ({className, style, onClick}) => {
    return (
        <div
            className={classNames(cls.arrows, className)}
            style={{...style, left: "5px", zIndex: 10}}
            onClick={onClick}
        />
    )
}

export const SliderImage: FC<ISliderImage> = ({children, className}) => {
    const settingsForSlider = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    return (
        <Slider className={className} {...settingsForSlider}>
            {children}
        </Slider>
    )
}

