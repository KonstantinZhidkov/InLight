import React from 'react';
import { compose } from "redux";
import { withRouter} from "react-router-dom";
import { connect } from "react-redux";

import { getUserProfile } from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
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

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
