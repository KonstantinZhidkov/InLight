import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import styles from './App.module.css';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';
import News from '../News/News';
import Music from '../Music/Music';
import Dialogs from '../Dialogs/Dialogs';
import Settings from '../Settings/Settings';

const App = ({data}) => {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header />
                <Sidebar />
                <main className={styles.main}>
                    <Route path='/profile' render={ () => <Profile />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/dialogs' render={ () => <Dialogs data={data} />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;