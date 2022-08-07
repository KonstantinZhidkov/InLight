import {connect} from "react-redux";

import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";


const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = dispatch => ({
    updateNewMessageText: (text) => {
        dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
        dispatch(addMessageActionCreator());
    }
});

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
