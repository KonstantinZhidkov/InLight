import React from 'react';
import {connect} from 'react-redux';

import Users from "./Users";
import Preloader from "../Preloader/Preloader";

import {
    follow,
    unfollow,
    getUsers
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onPageChange={this.onPageChange}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}
                  />
            }
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer);
