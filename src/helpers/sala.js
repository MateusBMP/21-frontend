// @flow

/**
 * Verifica se o codigo da sala fornecido é válido.
 * 
 * @param {string} codigo
 * @returns {boolean}
 */
 export const codigoIsValid = (codigo: string): boolean => {
    // Se o tamanho do codigo for diferente de 5, retorna falso
    if (String(codigo).length !== 5) return false;

    // Se o codigo nao for composto por letras maiusculas, retorna falso
    if (String(codigo) !== String(codigo).toUpperCase()) return false;

    // Se ele passar nos outros testes, retorna verdadeiro
    return true;
}
