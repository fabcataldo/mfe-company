import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/header/Header";

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
                    <MarketingApp/>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
    
}