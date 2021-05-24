// @flow
import { SALA_FLUSH, SALA_SET_CODIGO, SALA_ADD_JOGADOR } from '../actions/types';
import type { Action } from '../actions/types';
import type { JogadorState } from './jogadorReducer'; 

type State = {
    codigo: string,
    jogadores: Array<JogadorState>
};

const initialState: State = {
    codigo: String(""),
    jogadores: [],
};

const salaReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SALA_FLUSH:
            state = initialState;
            return state;
        case SALA_SET_CODIGO: return {...state, codigo: action.payload}
        case SALA_ADD_JOGADOR:
            state.jogadores.push(action.payload);
            return state;
        default:
            return state;
    }
}

export default salaReducer;
