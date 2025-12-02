import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

//whenever when this app is built for production,
//this will prefix the class names with 'ma' to avoid css collitions
//with other projects/apps that are using material-ui
//'ma' is a "shorthand" of "marketing app"
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
};