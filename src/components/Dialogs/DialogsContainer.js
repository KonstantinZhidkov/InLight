import { connect } from "react-redux";
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
