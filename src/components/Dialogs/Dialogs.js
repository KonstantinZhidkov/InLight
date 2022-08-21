import React from 'react';
import styles from './Dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";


const Dialogs = ({ dialogsPage, sendMessage }) => {

    const dialogsDataHandler = dialogsPage.dialogsData
        .map(item => <Dialog key={item.id} id={item.id} title={item.title}/>);
    const dialogsMessagesHandler = dialogsPage.messages
        .map(item => <Message key={item.id} id={item.id} text={item.text}/>);

    const addNewMessage = values => {
        sendMessage(values.newMessageBody);
    }

    return (
        <section className={styles.dialogs}>
            <ul className={styles.dialogs__list}>
                {dialogsDataHandler}
            </ul>
            <ul className={styles.dialogs__messages}>
                {dialogsMessagesHandler}
            </ul>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </section>
    );
};

const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="newMessageBody"
                    placeholder="Your Message"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessage" })(AddMessageForm);

export default Dialogs;
