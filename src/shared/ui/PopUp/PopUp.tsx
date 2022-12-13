import React, {FC} from "react";
import {PopupPropTypes} from "./PopupTypes";
import cls from './popUp.module.scss';
import classNames from "classnames";


export const PopUp: FC <PopupPropTypes> = ({children}) => {
    return (
        <div className={classNames(cls.modal)}>
            <div>
                {children}
            </div>
        </div>
    );
}