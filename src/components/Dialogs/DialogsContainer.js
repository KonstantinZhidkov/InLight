import React from 'react';

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = () => {

                    return (
                        <StoreContext.Consumer>
                            { store => {

                                let state = store.getState();

                                let onSendMessageClick = () => {
                                    store.dispatch(addMessageActionCreator());
                                }

                                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                return (
                    <Dialogs updateNewMessageText={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={state.dialogsPage}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;