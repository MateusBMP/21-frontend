// @flow
import { SERVIDOR_UPDATE_JOGADOR, SERVIDOR_UPDATE_SALA } from './types';
import type { Action } from './types';
import type { JogadorState } from '../reducers/jogadorReducer';
import type { SalaState } from '../reducers/salaReducer';

export const servidorUpdateJogador = (jogador: JogadorState): Action => {
    return { type: SERVIDOR_UPDATE_JOGADOR, payload: jogador };
}

export const servidorUpdateSala = (sala: SalaState): Action => {
    return { type: SERVIDOR_UPDATE_SALA, payload: sala };
}
