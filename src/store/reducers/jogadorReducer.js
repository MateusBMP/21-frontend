// @flow
import { JOGADOR_SET_IDENTIFICADOR, JOGADOR_SET_NOME } from '../actions/types';
import type { Action } from '../actions/types';

export type JogadorState = {
    identificador: string,
    nome: string,
    cartas: Array<number>
};

const initialState: JogadorState = {
    identificador: String(""),
    nome: String(""),
    cartas: [],
};

const jogadorReducer = (state: JogadorState = initialState, action: Action): JogadorState => {
    switch (action.type) {
        case JOGADOR_SET_IDENTIFICADOR: return {...state, identificador: action.payload };
        case JOGADOR_SET_NOME: return {...state, nome: action.payload };
        default:
            return state;
    }
}

export default jogadorReducer;
