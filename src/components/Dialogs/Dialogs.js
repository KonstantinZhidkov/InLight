import React from 'react';
import styles from './Dialogs.module.css';

import Dialog from "./Dialog/Dialog";

export default class Dialogs extends React.Component {

    render() {

        const { dialogsData } = this.props.data;

        const dialogsDataHandler = dialogsData.map(item => <Dialog key={item.id} id={item.id} title={item.title}/>);

        return (
            <section className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    { dialogsDataHandler }
                </ul>
                <div className={styles.dialogs__messages}>Message text</div>
            </section>
        )
    }
}