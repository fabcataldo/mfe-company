import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Header from "./components/header/Header";
import ProgressBar from "./components/ProgressBar";

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

//optional, but anyway applied for possibly css collitions with other projects/apps that use material-ui
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});
export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    
                    <Suspense fallback={<ProgressBar/>}>
                        <Switch>
                            <Route path="/auth" component={AuthLazy}/>
                            <Route path="/" component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
    
}