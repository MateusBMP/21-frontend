// @flow
import { JOGADOR_SET_NOME } from '../actions/types';
import type { Action } from '../actions/types';

type State = {
    nome: string
};

const initialState: State = {
    nome: String(""),
};

const jogadorReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case JOGADOR_SET_NOME: return {...state, nome: action.payload };
        default:
            return state;
    }
}

export default jogadorReducer;
