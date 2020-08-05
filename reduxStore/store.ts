import { applyMiddleware, compose, createStore } from "redux";
import { useDispatch } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from "./combineReducers";

const middlewares = () => {
    // @ts-ignore
    if (global.__REMOTEDEV__ !== undefined) {
        return compose(
            applyMiddleware(thunk as ThunkMiddleware),
            // @ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        );
    }
    return compose(applyMiddleware(thunk as ThunkMiddleware));
};

export const store = createStore(rootReducer, middlewares());
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
