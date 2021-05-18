import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Singleton from './data/Singleton';

import Entrar from "./pages/entrar/Entrar";
import Home from "./pages/home/Home";

class Routes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            jogador: String(Singleton.jogador.nome).length > 3,
        };
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/entrar" component={Entrar} />
            </BrowserRouter>
        );
    }
}

export default Routes;
