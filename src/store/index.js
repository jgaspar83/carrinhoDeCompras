import { createStore } from "redux";
import { Reducers } from "../reducers";

//Retorna todos os reducers da aplicação
export const Store = createStore(
    Reducers /* preLoadState */,
    window.__REDUX_DEVTOOLS__ && window.__REDUX_DEVTOOLS__EXTENSION()
);