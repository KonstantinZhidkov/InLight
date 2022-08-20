import React from 'react';
import { compose } from "redux";
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";

import {
    getStatus,
    getUserProfile,
    updateStatus
} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 19830;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
