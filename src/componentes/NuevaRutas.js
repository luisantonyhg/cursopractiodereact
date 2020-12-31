import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

import PaginaWeb from '../pages/PaginaWeb';
import SegundaWeb from '../pages/SegundaWeb';
import Layout from './Layout';
import NoEncontrado from '../pages/NoEncontrado';
function NuevaRutas (){
    return(
        
        <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/" component={SegundaWeb} />
        <Route exact path="/segundaPaginaWeb/new" component={PaginaWeb} />
        <Route component={NoEncontrado} />
        </Switch>       
        </Layout>
        </BrowserRouter>
    );
}

export default NuevaRutas;