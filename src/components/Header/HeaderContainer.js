import React from "react";
import {connect} from "react-redux";

import {getAuthUserData} from "../../redux/authReducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized
});


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
