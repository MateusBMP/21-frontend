// @flow
import { salaFlush, salaSetCodigo } from '../store/actions/salaActions';
import store from '../store/index';

/**
 * Cria uma nova sala de jogo. Ao criar a sala, atualiza o código da sala no controlador de
 * estados e retorna um booleano de valor verdadeiro.
 * 
 * @returns boolean
 */
export const criarSala = (): boolean => {
    // Limpa os dados atuais da sala
    store.dispatch(salaFlush());

    // Cria um código de sala aleatório
    store.dispatch(salaSetCodigo(_criarCodigoDeSala()));

    return true;
};

/**
 * Busca uma sala de jogo, retornando um booleado com o valor verdadeiro caso a sala seja
 * encontrada.
 * 
 * @returns boolean
 */
export const buscarSala = (codigo: string): boolean => {
    return false;
}

/**
 * Cria uma string que represente o código de sala. Terá uso temporário, até ser implementado no
 * backend. O tamanho padrão do código é 5, possuindo apenas letras maiúsculas e números
 * 
 * @returns string
 */
const _criarCodigoDeSala = (): string => {
    // Determina o escopo de caracteres
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Sorteia um caractere de cada vez do escopo, adicionando-o a uma lista
    let result = [];
    for ( var i = 0; i < 5; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    // Retorna a lista em formato de string
    return result.join('');
}
