import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog = ({id, title}) => {
    return (
        <li className={styles.dialogs__item}>
            <NavLink className={styles.dialogs__link} activeClassName={styles.active} to={`/dialogs/${ id }`}>{ title }</NavLink>
        </li>
    )
}

export default Dialog;