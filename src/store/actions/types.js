// @flow
export type Type = 'JOGADOR_SET_NOME' | 'SALA_SET_CODIGO';
export type Action = {
    type: Type,
    payload: any,
};

/**
 * Jogador Actions 
 */
export const JOGADOR_SET_NOME = 'JOGADOR_SET_NOME';

/**
 * Sala Actions 
 */
 export const SALA_SET_CODIGO = 'SALA_SET_CODIGO';
