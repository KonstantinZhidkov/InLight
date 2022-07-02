import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";

import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
