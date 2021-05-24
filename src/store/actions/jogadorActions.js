// @flow
import type { Action } from './types';
import { JOGADOR_SET_NOME } from './types';

export const jogadorSetNome = (payload: string): Action => {
    return { type: JOGADOR_SET_NOME, payload: payload };
}
