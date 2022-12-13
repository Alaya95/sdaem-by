import {SelectHTMLAttributes} from "react";

export interface DataArrayTypes{
    id: number,
    value: string,
    name: string
}

export interface SelectPropsTypes extends SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Данные options
     * {id, value, name}
     */
    dataArr: DataArrayTypes[]
    label?: string | undefined
    // className?: string | undefined
}
