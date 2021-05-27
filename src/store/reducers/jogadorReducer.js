// @flow
import { SERVIDOR_UPDATE_JOGADOR, JOGADOR_SET_IDENTIFICADOR, JOGADOR_SET_NOME, JOGADOR_TOGGLE_INICIAR, JOGADOR_SET_POSICAO, JOGADOR_SET_ICONE } from '../actions/types';
import type { Action } from '../actions/types';

export type Posicao = 'um' | 'dois' | 'tres' | 'quatro';

export type Icone = '001-rpg-game.svg' |
                    '002-dices.svg' |
                    '003-game-over.svg' |
                    '004-origami.svg' |
                    '005-ball-of-wool.svg' |
                    '006-sheep.svg' |
                    '007-brooch.svg' |
                    '008-ankh.svg' |
                    '009-mask.svg' |
                    '010-quill.svg' |
                    '011-arrows.svg' |
                    '012-hamsa.svg' |
                    '013-freemasonry.svg' |
                    '014-crystal.svg' |
                    '015-bonfire.svg' |
                    '016-deer.svg' |
                    '017-coffee-breaks.svg' |
                    '018-maps-and-location.svg' |
                    '019-hourglass.svg' |
                    '020-maps-and-location-1.svg' |
                    '021-construction-and-tools.svg' |
                    '022-sports-and-competition.svg' |
                    '023-google-maps.svg' |
                    '024-risk.svg' |
                    '025-clock.svg' |
                    '026-video-game.svg' |
                    '027-miscellaneous.svg' |
                    '028-dominoes.svg' |
                    '029-puzzle.svg' |
                    '030-fossil.svg' |
                    '031-world-map.svg' |
                    '032-roman-helmet.svg' |
                    '033-shell.svg' |
                    '034-stonehenge.svg' |
                    '035-statue.svg' |
                    '036-pharaoh.svg' |
                    '037-tomb.svg' |
                    '038-boomerang.svg' |
                    '039-cave-painting.svg' |
                    '040-cat.svg' |
                    '041-musket.svg' |
                    '042-poison.svg' |
                    '043-parrot.svg' |
                    '044-map.svg' |
                    '045-anchor.svg' |
                    '046-whale.svg' |
                    '047-tank.svg' |
                    '048-brake-disc.svg' |
                    '049-gears.svg' |
                    '050-speedometer.svg';

export type JogadorState = {
    identificador: string,
    nome: string,
    cartas: Array<number>,
    iniciar: boolean,
    posicao: ?Posicao,
    icone: ?Icone,
};

export const jogadorInitialState: JogadorState = {
    identificador: String(""),
    nome: String(""),
    cartas: [],
    iniciar: false,
    posicao: null,
    icone: null
};

const jogadorReducer = (state: JogadorState = jogadorInitialState, action: Action): JogadorState => {
    switch (action.type) {
        case SERVIDOR_UPDATE_JOGADOR: return {...state, ...action.payload};
        case JOGADOR_SET_IDENTIFICADOR: return {...state, identificador: action.payload};
        case JOGADOR_SET_NOME: return {...state, nome: action.payload};
        case JOGADOR_TOGGLE_INICIAR: return {...state, iniciar: !state.iniciar};
        case JOGADOR_SET_POSICAO: return {...state, posicao: action.payload};
        case JOGADOR_SET_ICONE: return {...state, icone: action.payload};
        default:
            return state;
    }
}

export default jogadorReducer;
