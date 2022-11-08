import {SelectHTMLAttributes} from "react";

export interface SelectPropsTypes extends SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Данные options
     * {id, value, name}
     */
    dataArr: Array <{id: number, value: string, name: string}>
    label?: string | undefined
    // className?: string | undefined
}
