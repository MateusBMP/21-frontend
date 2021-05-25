import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { salaAddJogador } from './actions/salaActions';
import reducer from './reducers/index';

/**
 * Middleware que verifica se o jogador já se encontra na sala. Estando na sala, atualiza a
 * instância do jogador na sala.
 */
const AtualizarSalaAposAtualizarJogador = ({ getState, dispatch }) => next => action => {
    // Executa a ação
    const response = next(action);

    // Se o comando for para um jogador, verifica se é necessário despachar uma atualização para a
    // sala
    if (String(response.type).includes("JOGADOR_")) {
        // Pega o jogador
        const jogador = getState().jogadorReducer;
    
        // Se o jogador tiver uma posição setada, despacha a ação de atualizar o jogador na sala
        if (jogador.posicao !== null) {
            dispatch(salaAddJogador(jogador, jogador.posicao));
        }

    }

    return response;
}

class Store {
    static instance;

    constructor() {
        return createStore(reducer, {}, applyMiddleware(ReduxThunk, AtualizarSalaAposAtualizarJogador));
    }

    static getInstance() {
        if (Store.instance === undefined) {
            Store.instance = new Store();
        }

        return Store.instance;
    }
}

export default Store.getInstance();
