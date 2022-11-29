import {RootState} from "../../app/store";
import {Icity} from "./citiesTypes";

export const getCitiesSelector = (state: RootState): Icity => state.cities.cities;
export const getCitiesErrorSelector = (state: RootState): string | null => state.cities.error;
export const getIsCitiesLoadingSelector = (state: RootState): boolean => state.cities.isLoading;
