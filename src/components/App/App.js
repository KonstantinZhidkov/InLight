import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import styles from './App.module.css';

import HeaderContainer from '../Header/HeaderContainer';
import Sidebar from '../Sidebar/Sidebar';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from '../Users/UsersContainer';
import Login from '../Login/Login';
import ProfileContainer from "../Profile/ProfileContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <HeaderContainer />
                <Sidebar />
                <main className={styles.main}>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                    <Route path='/users' render={ () => <UsersContainer />}/>
                    <Route path='/login' render={ () => <Login />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;