// @flow
import type { Action } from './types';
import { JOGADOR_SET_IDENTIFICADOR, JOGADOR_SET_NOME, } from './types';

export const jogadorSetIdentificador = (payload: string): Action => {
    return { type: JOGADOR_SET_IDENTIFICADOR, payload: payload };
}

export const jogadorSetNome = (payload: string): Action => {
    return { type: JOGADOR_SET_NOME, payload: payload };
}
