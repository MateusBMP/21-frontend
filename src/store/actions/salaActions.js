// @flow
import { SALA_FLUSH, SALA_SET_CODIGO, SALA_ADD_JOGADOR } from './types';
import type { Action } from './types';
import type { JogadorState } from '../reducers/jogadorReducer';

export const salaFlush = (): Action => {
    return { type: SALA_FLUSH, payload: null };
}

export const salaSetCodigo = (payload: string): Action => {
    return { type: SALA_SET_CODIGO, payload: payload };
}

export const salaAddJogador = (payload: JogadorState): Action => {
    return { type: SALA_ADD_JOGADOR, payload: payload };
}
