// @flow
import store from '../store/index';
import { jogadorSetIdentificador, jogadorSetPosicao, jogadorSetIcone } from '../store/actions/jogadorActions';
import type { Icone } from '../store/reducers/jogadorReducer';

/**
 * Manipula a operação de criação de sala, executada pelo serviço de sala
 */
export const handleCriarSala = (): void => {
    // Cria o identificador do jogador
    store.dispatch(jogadorSetIdentificador(_criarIdentificadorDoJogador()));

    // Cria o ícone do jogador
    store.dispatch(jogadorSetIcone(_sortearIcone()));

    // Estabelece a posição do jogador como "um"
    store.dispatch(jogadorSetPosicao('um'));
}

/**
 * Cria uma string que represente o identificador do jogador. Terá uso temporário, até ser
 * implementado no backend. O tamanho padrão do identificador é 13, possuindo apenas letras
 * minúsculas e números, seguindo o padrão 4-4-3 e separados por traços (-).
 * 
 * @returns string
 */
const _criarIdentificadorDoJogador = (): string => {
    // Determina o escopo de caracteres
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Sorteia um caractere de cada vez do escopo, adicionando-o a uma lista
    let result = [];
    for ( let i = 1; i <= 11; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * characters.length)));

        // Se for um número divisível por 4, adiciona o traço
        if (i % 4 === 0) {
            result.push('-');
        }
    }

    // Retorna a lista em formato de string
    return result.join('');
}

/**
 * Sorteia, aleatoriamente, um ícone, retornando seu nome
 * 
 * @returns {Icone}
 */
const _sortearIcone = (): Icone => {
    // Determina a lista de ícones disponíveis
    const iconesDisponiveis = ['001-rpg-game.svg',
                               '002-dices.svg',
                               '003-game-over.svg',
                               '004-origami.svg',
                               '005-ball-of-wool.svg',
                               '006-sheep.svg',
                               '007-brooch.svg',
                               '008-ankh.svg',
                               '009-mask.svg',
                               '010-quill.svg',
                               '011-arrows.svg',
                               '012-hamsa.svg',
                               '013-freemasonry.svg',
                               '014-crystal.svg',
                               '015-bonfire.svg',
                               '016-deer.svg',
                               '017-coffee-breaks.svg',
                               '018-maps-and-location.svg',
                               '019-hourglass.svg',
                               '020-maps-and-location-1.svg',
                               '021-construction-and-tools.svg',
                               '022-sports-and-competition.svg',
                               '023-google-maps.svg',
                               '024-risk.svg',
                               '025-clock.svg',
                               '026-video-game.svg',
                               '027-miscellaneous.svg',
                               '028-dominoes.svg',
                               '029-puzzle.svg',
                               '030-fossil.svg',
                               '031-world-map.svg',
                               '032-roman-helmet.svg',
                               '033-shell.svg',
                               '034-stonehenge.svg',
                               '035-statue.svg',
                               '036-pharaoh.svg',
                               '037-tomb.svg',
                               '038-boomerang.svg',
                               '039-cave-painting.svg',
                               '040-cat.svg',
                               '041-musket.svg',
                               '042-poison.svg',
                               '043-parrot.svg',
                               '044-map.svg',
                               '045-anchor.svg',
                               '046-whale.svg',
                               '047-tank.svg',
                               '048-brake-disc.svg',
                               '049-gears.svg',
                               '050-speedometer.svg'];

        // Sorteia um ícone
        const iconeSorteado = iconesDisponiveis[Math.floor(Math.random() * iconesDisponiveis.length)];

        return iconeSorteado;
}
