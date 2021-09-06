import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';

import store from './redux/reduxStore';
import App from './components/App/App';

let rerenderApp = (state) => {
    ReactDOM.render(<App data={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

rerenderApp(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderApp(state);
});