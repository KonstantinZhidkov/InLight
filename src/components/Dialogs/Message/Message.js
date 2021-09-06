import React from 'react';
import styles from './Message.module.css';

const Message = ({text}) => {
    return (
        <li className={styles.message}>{ text }</li>
    )
}

export default Message;