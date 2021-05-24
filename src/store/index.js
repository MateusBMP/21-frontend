import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers/index';

class Store {
    static instance;

    constructor() {
        return createStore(reducer, {}, applyMiddleware(ReduxThunk));
    }

    static getInstance() {
        if (Store.instance === undefined) {
            Store.instance = new Store();
        }

        return Store.instance;
    }
}

export default Store.getInstance();
