// @flow
export type Type =
    'JOGADOR_SET_IDENTIFICADOR' |
    'JOGADOR_SET_NOME' |
    'SALA_FLUSH' |
    'SALA_SET_CODIGO' |
    'SALA_ADD_JOGADOR';
export type Action = {
    type: Type,
    payload: any,
};

/**
 * Jogador Actions 
 */
export const JOGADOR_SET_IDENTIFICADOR = 'JOGADOR_SET_IDENTIFICADOR';
export const JOGADOR_SET_NOME = 'JOGADOR_SET_NOME';

/**
 * Sala Actions 
 */
export const SALA_FLUSH = 'SALA_FLUSH';
export const SALA_SET_CODIGO = 'SALA_SET_CODIGO';
export const SALA_ADD_JOGADOR = 'SALA_ADD_JOGADOR';
