import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if(onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history}/>,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location;

            if(pathname !== nextPathName){
                history.push(nextPathName);                
            }
        }
    };
};

//if we are in development and in isolation,
//call mount inmediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}


//we are running through container
//and we should export the mount function
export { mount };
