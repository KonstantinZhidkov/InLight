import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarItem.module.css';

export default class SidebarItem extends React.Component {

    render() {
        const {title, href, source} = this.props;

        return (
            <div className={styles.sidebarItem} >
                <NavLink
                    className={styles.sidebarItem__link}
                    activeClassName={styles.active}
                    to={href}
                >
                    {title}
                </NavLink>
                <NavLink to={href}>
                    <img
                        className={styles.sidebarItem__image}
                        src={source}
                        alt='icon'
                    />
                </NavLink>
            </div>
        )
    }
}
