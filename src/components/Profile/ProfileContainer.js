import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {getUserProfile} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId || 2;

        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);