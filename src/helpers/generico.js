// @flow
import camelCase from 'camelcase';
import extenso from 'extenso';

/**
 * Converte uma string para o padrão camel_case
 * 
 * @param {string} s 
 * @returns {string}
 */
export const toCamelCase = (s: string): string => String(camelCase(s));

/**
 * Converte um numero inteiro para extenso, subtituindo os espaços por "_", estilo camel_case
 * 
 * @param {number} n
 * @returns {string}
 */
export const inteiroPorExtenso = (n: number): string => String(extenso(n)).replace(' ', '_');
