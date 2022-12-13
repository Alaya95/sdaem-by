import {InputHTMLAttributes, LegacyRef, ReactNode} from "react";

export interface InputPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
    /**
     *  input props types
     */
    className?: string
    icon?: ReactNode
    error?: string
    ref?: LegacyRef<HTMLInputElement>
}
