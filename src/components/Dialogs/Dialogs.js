import React from 'react';
import styles from './Dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

export default class Dialogs extends React.Component {

    render() {

        const { dialogsData, messages, newMessageText } = this.props.data.dialogsPage;
        const { dispatch } = this.props;

        const dialogsDataHandler = dialogsData.map(item => <Dialog key={item.id} id={item.id} title={item.title}/>);
        const dialogsMessagesHandler = messages.map(item => <Message key={item.id} id={item.id} text={item.text}/>);

        let onSendMessageClick = () => {
            dispatch(addMessageActionCreator());
        }

        let onNewMessageChange = (event) => {
            let text = event.target.value;
            dispatch(updateNewMessageTextActionCreator(text));
        }

        return (
            <section className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    { dialogsDataHandler }
                </ul>
                <ul className={styles.dialogs__messages}>
                    { dialogsMessagesHandler }
                    <div>
                        <div><textarea
                            value={ newMessageText }
                            placeholder="Your Message"
                            onChange={onNewMessageChange} /></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </ul>
            </section>
        )
    }
}