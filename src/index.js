import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import {Provider} from "react-redux";

import store from './redux/reduxStore';
import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);