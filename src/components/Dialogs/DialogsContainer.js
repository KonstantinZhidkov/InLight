import { connect } from "react-redux";
import { compose } from "redux";

import { addMessage } from "../../redux/dialogsReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";


const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = dispatch => ({
    sendMessage: message => {
        dispatch(addMessage(message));
    }
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
