import { createStore } from 'redux'
import rootReducer from "./reducer/rootReducer";

export const Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())