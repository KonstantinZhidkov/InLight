import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';

import powerButton from '../../images/buttons/power-button.svg';
import loginButton from '../../images/buttons/login-button.svg';
import logo from '../../images/logos/main-logo.svg';


const Header = props => {
    const {login, isAuthorized} = props;

    return(
        <header className={styles.header}>
            <div className={styles.header__body}>
                <div>
                    <img className={styles.header__logo} src={logo} alt='logo' />
                </div>
                <div className={styles.header__loginBlock}>
                    {isAuthorized
                        ? <div>
                            {login}
                            <img className={styles.header__buttonImg} src={powerButton} alt='login button' />
                          </div>
                        : <NavLink to={'/login'}>
                            <img className={styles.header__buttonImg} src={loginButton} alt='login button' />
                          </NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;