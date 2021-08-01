import React from 'react';
import styles from './Header.module.css';
import powerButton from '../../images/buttons/power-button.svg';
import logo from '../../images/logos/main-logo.svg';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header__body}>
                <div>
                    <img className={styles.header__logo} src={logo} alt='logo' />
                </div>
                <div>
                    <button type='button'>
                        <img className={styles.header__buttonImg} src={powerButton} alt='power button' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;