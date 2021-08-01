import React from 'react';
import styles from './SidebarItem.module.css';

export default class SidebarItem extends React.Component {

    render() {
        const {title, href, source} = this.props;

        return (
            <div className={styles.sidebarItem} >
                <a className={styles.sidebarItem__link} href={href}>{title}</a>
                <a href={href}><img className={styles.sidebarItem__image} src={source} /></a>
            </div>
        )
    }
}