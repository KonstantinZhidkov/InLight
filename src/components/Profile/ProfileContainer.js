import React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";

import {getUserProfile} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 2;

        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />

        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuthorized
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
