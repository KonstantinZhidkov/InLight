import React from 'react';
import styles from './Sidebar.module.css';

/* Importing icons for sidebar */
import { sidebarAvatar, sidebarNews, sidebarDialogs, sidebarMusic, sidebarSettings } from '../../images/images';

import SidebarItem from "./SidebarItem/SidebarItem";


export default class Sidebar extends React.Component {

    render() {
        return (
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <SidebarItem title='Profile' href='/profile' source={sidebarAvatar} />
                    </li>
                    <li className={styles.nav__item}>
                        <SidebarItem title='News' href='/news' source={sidebarNews} />
                    </li>
                    <li className={styles.nav__item}>
                        <SidebarItem title='Dialogs' href='/dialogs' source={sidebarDialogs} />
                    </li>
                    <li className={styles.nav__item}>
                        <SidebarItem title='Users' href='/users' source={sidebarDialogs} />
                    </li>
                    <li className={styles.nav__item}>
                        <SidebarItem title='Music' href='/music' source={sidebarMusic} />
                    </li>
                    <li className={styles.nav__item}>
                        <SidebarItem title='Settings' href='/settings' source={sidebarSettings} />
                    </li>
                </ul>
            </nav>
        )
    }
}