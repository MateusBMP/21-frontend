// @flow
import { SALA_SET_CODIGO } from '../actions/types';
import type { Action } from '../actions/types';

type State = {
    codigo: string
};

const initialState: State = {
    codigo: String(""),
};

const salaReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SALA_SET_CODIGO: return {...state, codigo: action.payload}
        default:
            return state;
    }
}

export default salaReducer;
