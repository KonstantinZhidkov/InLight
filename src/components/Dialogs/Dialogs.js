import React from 'react';
import {Redirect} from 'react-router-dom';
import styles from './Dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = ({
    dialogsPage,
    isAuth,
    sendMessage,
    updateNewMessageText
}) => {

    const dialogsDataHandler = dialogsPage.dialogsData
        .map(item => <Dialog key={item.id} id={item.id} title={item.title}/>);
    const dialogsMessagesHandler = dialogsPage.messages
        .map(item => <Message key={item.id} id={item.id} text={item.text}/>);

    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (event) => {
        const text = event.target.value;
        updateNewMessageText(text);
    }

    if(!isAuth) return <Redirect to='/login' />

    return (
        <section className={styles.dialogs}>
            <ul className={styles.dialogs__list}>
                {dialogsDataHandler}
            </ul>
            <ul className={styles.dialogs__messages}>
                {dialogsMessagesHandler}
                <div>
                    <div>
                        <textarea
                            value={dialogsPage.newMessageText}
                            placeholder="Your Message"
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </ul>
        </section>
    )
}

export default Dialogs;
