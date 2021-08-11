import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './css/normalize.css';

import state from './state/state';

ReactDOM.render(<App data={state} />, document.getElementById('root'));