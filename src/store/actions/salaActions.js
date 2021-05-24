// @flow
import type { Action } from './types';
import { SALA_SET_CODIGO } from './types';

export const salaSetCodigo = (payload: string): Action => {
    return { type: SALA_SET_CODIGO, payload: payload };
}
