import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Entrar from "./pages/entrar/Entrar";
import Home from "./pages/home/Home";
import Sala from "./pages/sala/Sala";

class Routes extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/entrar" component={Entrar} />
                <Route exact path="/sala/:codigo" component={Sala} />
            </BrowserRouter>
        );
    }
}

export default Routes;
