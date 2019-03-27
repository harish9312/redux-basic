import { createStore } from "redux";
import { rootReducer } from "./reducer";

export const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

console.log('Step1', store)