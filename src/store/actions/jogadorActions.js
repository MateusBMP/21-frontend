// @flow
import { JOGADOR_SET_IDENTIFICADOR, JOGADOR_SET_NOME, JOGADOR_TOGGLE_INICIAR, JOGADOR_SET_POSICAO, JOGADOR_SET_ICONE } from './types';
import type { Action } from './types';
import type { Posicao, Icone } from '../reducers/jogadorReducer';

export const jogadorSetIdentificador = (identificador: string): Action => {
    return { type: JOGADOR_SET_IDENTIFICADOR, payload: identificador };
}

export const jogadorSetNome = (nome: string): Action => {
    return { type: JOGADOR_SET_NOME, payload: nome };
}

export const jogadorToggleIniciar = (): Action => {
    return { type: JOGADOR_TOGGLE_INICIAR, payload: null };
}

export const jogadorSetPosicao = (posicao: Posicao): Action => {
    return { type: JOGADOR_SET_POSICAO, payload: posicao };
}

export const jogadorSetIcone = (icone: Icone): Action => {
    return { type: JOGADOR_SET_ICONE, payload: icone };
}
