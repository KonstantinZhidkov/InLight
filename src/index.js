import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './css/normalize.css';

import state from './state/state';
import { addPost } from "./state/state";

ReactDOM.render(<App data={state} addPost={addPost} />, document.getElementById('root'));