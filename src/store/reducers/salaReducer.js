// @flow
import { SALA_FLUSH, SALA_SET_SITUACAO, SALA_SET_CODIGO, SALA_ADD_JOGADOR } from '../actions/types';
import type { Action } from '../actions/types';
import type { Posicao, JogadorState } from './jogadorReducer';
import { jogadorInitialState } from './jogadorReducer';

type State = {
    situacao: string,
    codigo: string,
    jogadores: { [Posicao]: JogadorState },
};

const initialState: State = {
    situacao: String(""),
    codigo: String(""),
    jogadores: {
        um: jogadorInitialState,
        dois: jogadorInitialState,
        tres: jogadorInitialState,
        quatro: jogadorInitialState
    }
};

const salaReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SALA_FLUSH:
            state = initialState;
            return state;
        case SALA_SET_SITUACAO: return {...state, situacao: action.payload}
        case SALA_SET_CODIGO: return {...state, codigo: action.payload}
        case SALA_ADD_JOGADOR: return {...state, jogadores: {...state.jogadores, [action.payload.posicao]: action.payload.jogador}};
        default:
            return state;
    }
}

export default salaReducer;
