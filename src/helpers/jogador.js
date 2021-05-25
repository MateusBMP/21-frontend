// @flow

/**
 * Verifica se o identificador do jogador fornecido é válido.
 * 
 * @param {string} identificador
 * @returns {boolean}
 */
 export const identificadorIsValid = (identificador: string): boolean => {
    // Se o tamanho do identificador for diferente de 13, retorna falso
    if (String(identificador).length !== 13) return false;

    // Se o identificador nao for composto por letras minúsculas, retorna falso
    if (String(identificador) !== String(identificador).toLowerCase()) return false;

    // Se ele passar nos outros testes, retorna verdadeiro
    return true;
}

/**
 * Verifica se o nome de jogador fornecido é válido
 * 
 * @param {string} nome
 * @returns {boolean}
 */
export const nomeIsValid = (nome: string): boolean => {
    // Se o nome do jogador tiver um tamanho maior que 7, retorna falso
    if (String(nome).length > 7) return false;

    // Se o nome do jogador tiver um tamanho menor que 3, retorna falso
    if (String(nome).length < 3) return false;

    // Se ele passar nos outros testes, retorna verdadeiro
    return true;
}
