import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from "./rootReducer";
import {middlewareStore} from "./middleware";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }).concat(...middlewareStore),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];