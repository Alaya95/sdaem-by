import React, {FC} from "react";
import Slider from "react-slick";
import { ISliderImage} from "./sliderImageTypes";
import {ArrowSlider} from "../../shared/ui/ArrowSlider/ArrowSlider";


export const SliderImage: FC<ISliderImage> = ({children, className}) => {
    const settingsForSlider = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowSlider position={"next"} />,
        prevArrow: <ArrowSlider position={"prev"}/>,
    };

    return (
        <Slider className={className} {...settingsForSlider}>
            {children}
        </Slider>
    )
}

