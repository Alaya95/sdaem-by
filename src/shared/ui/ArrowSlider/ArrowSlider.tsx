import React, {FC} from "react";
import classNames from "classnames";
import cls from "./styles.module.scss";
import {IArrows} from "./types";
import {ReactComponent as ArrowSvg} from "../../../app/assets/icons/chevron-down.svg";

export const ArrowSlider: FC<IArrows> = ({className, position, onClick}) => {
    return (
        <div
            className={classNames(cls.arrows, cls[position], className)}
            onClick={onClick}
        ><ArrowSvg /></div>
    )
}