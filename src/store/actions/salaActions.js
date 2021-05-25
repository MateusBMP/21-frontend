// @flow
import { SALA_FLUSH, SALA_SET_SITUACAO, SALA_SET_CODIGO, SALA_ADD_JOGADOR } from './types';
import type { Action } from './types';
import type { Posicao, JogadorState } from '../reducers/jogadorReducer';

export const salaFlush = (): Action => {
    return { type: SALA_FLUSH, payload: null };
}

export const salaSetSituacao = (situacao: string): Action => {
    return { type: SALA_SET_SITUACAO, payload: situacao };
}

export const salaSetCodigo = (codigo: string): Action => {
    return { type: SALA_SET_CODIGO, payload: codigo };
}

export const salaAddJogador = (jogador: JogadorState, posicao: Posicao): Action => {
    return { type: SALA_ADD_JOGADOR, payload: { jogador, posicao } };
}
