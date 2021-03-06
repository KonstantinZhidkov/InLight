import React from 'react';
import styles from './Dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsDataHandler = props.dialogsPage.dialogsData.map(item => <Dialog key={item.id} id={item.id} title={item.title}/>);
    const dialogsMessagesHandler = props.dialogsPage.messages.map(item => <Message key={item.id} id={item.id} text={item.text}/>);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <section className={styles.dialogs}>
            <ul className={styles.dialogs__list}>
                {dialogsDataHandler}
            </ul>
            <ul className={styles.dialogs__messages}>
                {dialogsMessagesHandler}
                <div>
                    <div><textarea
                        value={props.dialogsPage.newMessageText}
                        placeholder="Your Message"
                        onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </ul>
        </section>
    )
}

export default Dialogs;