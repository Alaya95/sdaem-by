import {AppDispatch} from "../../app/store";
import {citiesSlice} from "./citiesReducer";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../shared/firebase";

// const citiesRef = collection(db, "cities");

export const getCities = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(citiesSlice.actions.getCities());
        const snapshot = await getDocs(collection(db, "cities"));
        const arr: any = [];

        snapshot.forEach((doc) => {
            arr.push(doc.data());
        })

        dispatch(citiesSlice.actions.getCitiesSuccess(arr));
    } catch (err) {
        const e = err as Error;
        dispatch(citiesSlice.actions.getCitiesError(e.message));
    }
}