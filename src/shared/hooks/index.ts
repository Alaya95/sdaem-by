import {Dispatch} from "react";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {RootState, AppDispatch} from "../../app/store";

export const useAppDispatch = (): Dispatch<any> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;