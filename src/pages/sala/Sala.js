import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { WithToasts } from '../../components/toast';
import { identificadorIsValid, nomeIsValid } from '../../helpers/jogador';
import { codigoIsValid } from '../../helpers/sala';
import { jogadorToggleIniciar } from '../../store/actions/jogadorActions';
import { salaSetCodigo } from '../../store/actions/salaActions';
import socket, { conectarSalaEvent } from '../../socketClient';

import CardJogador from './cardJogador/CardJogador';
import './Sala.css';

class Sala extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            carregando: true,
            jogadorEValido: true,
            salaEValida: true,
        };
    }

    componentDidMount() {
        // Atualiza o redux da sala com o codigo passado via url
        this.props.salaSetCodigo(String(this.props.match.params.codigo));

        // Notifica o servidor da conexão do jogador
        socket().send(conectarSalaEvent(String(this.props.match.params.codigo)));

        // Cria um temporizador que vai controlar o carregamento da página. Quando terminar de
        // carregar, vai fazer as devidas verificações
        setTimeout(() => {
            // Se o identificador do jogador for inválido, notifica um erro e atualiza a
            // propriedade
            if (!identificadorIsValid(this.props.jogador.identificador)) {
                this.props.addToast("Identificador do jogador inválido. Repita o processo para continuar", { appearance: 'error' });
                this.setState({ jogadorEValido: false });
            }

            // Se o nome de jogador for inválido, notifica um erro e atualiza a propriedade
            if (!nomeIsValid(this.props.jogador.nome)) {
                this.props.addToast("Nome de jogador inválido. Repita o processo para continuar", { appearance: 'error' });
                this.setState({ jogadorEValido: false });
            }

            // Se o codigo da sala for inválido, notifica um erro e atualiza a propriedade
            if (!codigoIsValid(this.props.sala.codigo)) {
                this.props.addToast("Codigo da sala inválido. Repita o processo para continuar", { appearance: 'error' });
                this.setState({ salaEValida: false });
            }

            this.setState({ carregando: false });
        }, 2000);
    }

    interfaceCarregando() {
        return (
            <section className="Sala-section position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                <div className="Sala-loading d-flex flex-column align-items-center">
                    <h6 className="text-center fw-bold">Entrando...</h6>
                </div>
            </section>
        );
    }

    interfaceInvalida() {
        return (
            <section className="Sala-section position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                <div className="Sala-error d-flex flex-column align-items-center">
                    <h6 className="text-center fw-bold">Ops! Tente novamente</h6>
                    <Link to="/entrar">
                        <button type="button" className="btn btn-sm btn-outline-pink mt-2 px-3">reconectar</button>
                    </Link>
                </div>
            </section>
        );
    };

    interfaceSalaDeEspera() {
        return (
            <section className="Sala-section position-absolute top-50 start-50 translate-middle container">
                <div className="Sala-esperando row g-1">
                    <CardJogador posicao='um' />
                    <CardJogador posicao='dois' />
                    <CardJogador posicao='tres' />
                    <CardJogador posicao='quatro' />
                </div>
            </section>
        )
    }

    render() {
        return (
            <div className="Sala position-relative vh-100">
                <header className="Sala-header position-absolute top-0 start-50 translate-middle-x">
                    <div className="alert p-1" role="alert">
                        <p className="text-center fs-n1 fw-light mb-1">{this.props.sala.situacao}</p>
                    </div>
                </header>
                { this.state.carregando ? (
                    this.interfaceCarregando()
                ) :
                    this.state.jogadorEValido && this.state.salaEValida ? (
                        this.interfaceSalaDeEspera()
                    ) : (
                        this.interfaceInvalida()
                    )
                }
                <footer className="Sala-footer position-absolute bottom-0 start-50 translate-middle-x">
                    <p className="text-center fs-n1 fw-light mb-1">{this.props.sala.codigo}</p>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jogador: state.jogadorReducer,
    sala: state.salaReducer
});

const mapActionToProps = {
    salaSetCodigo,
    jogadorToggleIniciar
};

export default connect(mapStateToProps, mapActionToProps)(WithToasts(Sala));
