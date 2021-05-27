import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { JOGADOR_TOGGLE_INICIAR } from './actions/types';
import reducer from './reducers/index';
import socket, { updateJogadorEvent } from '../socketClient';

/**
 * Middleware que manipula as operações no redux e, quando alguma em específico for executada,
 * despacha uma nova operação, geralmente atualização do servidor
 */
const HandleReduxUpdates = ({ getState, dispatch }) => next => action => {
    // Executa a ação
    const response = next(action);

    // Pega o jogador
    const jogador = getState().jogadorReducer;

    switch (response.type) {
        case JOGADOR_TOGGLE_INICIAR:
            // Notifica a atualização do jogador ao servidor
            socket().send(updateJogadorEvent(jogador));
            break;

        default:
            break;
    }

    return response;
}

class Store {
    static instance: Store;

    constructor() {
        return createStore(reducer, {}, applyMiddleware(ReduxThunk, HandleReduxUpdates));
    }

    static getInstance(): Store {
        if (Store.instance === undefined) {
            Store.instance = new Store();
        }

        return Store.instance;
    }
}

export default (Store.getInstance(): Store);
