import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import styles from './App.module.css';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header />
                <Sidebar />
                <main className={styles.main}>
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' component={Dialogs} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;