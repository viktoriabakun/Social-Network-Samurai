import React from 'react'
import {connect} from "react-redux";
import {UserObjType} from "../../redux/store";
import {followSuccess, getUsers, setCurrentPage, unfollowSuccess} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {RootStateRedux} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserObjType>,
    followingInProgress: any[]
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}
type OwnPropsType = {}


export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setUsersTotalCount(data.totalCount)
        //     });
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
       this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   setCurrentPage={this.props.setCurrentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: RootStateRedux): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let withRedirect = withAuthRedirect(UsersContainer)


export default compose(
    withAuthRedirect,
    connect<MapStatePropsType,
        MapDispatchPropsType,
        OwnPropsType,
        RootStateRedux>(mapStateToProps, {

        follow: followSuccess,
        unfollow: unfollowSuccess,
        setCurrentPage,
        getUsers
    })
)(UsersContainer)