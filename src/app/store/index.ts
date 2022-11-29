import { combineReducers, configureStore } from '@reduxjs/toolkit';
import citiesReducer from "../../entities/cities/citiesReducer";

const rootReducer = combineReducers({
    cities: citiesReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];