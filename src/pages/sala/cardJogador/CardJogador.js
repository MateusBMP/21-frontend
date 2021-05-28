import * as React from 'react';
import { connect } from 'react-redux';

import { toCamelCase } from '../../../helpers/generico';
import { identificadorIsValid, nomeIsValid } from '../../../helpers/jogador';
import { jogadorToggleIniciar } from '../../../store/actions/jogadorActions';
import './CardJogador.css';

class CardJogador extends React.Component {

    constructor(props) {
        super(props);

        this.handleToggleIniciar = this.handleToggleIniciar.bind(this);
    }

    handleToggleIniciar(e) {
        e.preventDefault();

        this.props.jogadorToggleIniciar();
    }

    render() {
        // Pega o jogador selecionado na lista de jogadores da sala
        const jogador = this.props.sala.jogadores[this.props.posicao];

        // Verifica se o jogador selecionado é o jogador conectado
        const conectado = this.props.jogador.identificador === jogador.identificador;

        // Descobre se o jogador está ou não conectado com parâmetros válidos
        const isValid = identificadorIsValid(jogador.identificador) && nomeIsValid(jogador.nome);

        // Constrói o id do card
        const cardId = toCamelCase("Jogador ".concat(this.props.posicao));

        // Constrói a classe principal do card
        const cardJogadorClass = this.props.posicao === 'um' || this.props.posicao === 'tres' ?
            String("CardJogador col-6 d-flex justify-content-end") :
            String("CardJogador col-6 d-flex justify-content-start");

        // Constrói a classe do card
        const cardClass = isValid ?
            jogador.iniciar ?
                String("card border-2 shadow border-pink") :
                String("card border-2 shadow border-warning") :
            String("card border-2 shadow");

        // Constrói, se for necessário, o botão para iniciar o jogo
        const iniciarButton = isValid && conectado ? 
            jogador.iniciar ?
                ( <button type="button" className="btn btn-sm btn-outline-pink px-3 mt-2" onClick={(e) => this.handleToggleIniciar(e)}>aguardar</button> ) :
                ( <button type="button" className="btn btn-sm btn-outline-warning px-3 mt-2" onClick={(e) => this.handleToggleIniciar(e)}>iniciar</button> ) :
            null;

        // Constrói, se for necessário, o ícone do jogador
        const iconeJogador = isValid && <img src={String("/images/icons/").concat(jogador.icone)} className="m-1 border rounded-circle border-secondary" alt="" />;

        return (
            <div id={cardId} className={cardJogadorClass}>
                <div className={cardClass}>
                    <div className="card-body card-body d-flex flex-column align-items-center justify-content-center">
                        {iconeJogador}
                        <h6 className="card-title fw-bold text-center mb-0">{jogador.nome}</h6>
                        {iniciarButton}
                    </div>
                </div>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    ...state,
    jogador: state.jogadorReducer,
    sala: state.salaReducer
});

export const mapActionToProps = {
    jogadorToggleIniciar
}

export default connect(mapStateToProps, mapActionToProps)(CardJogador);
