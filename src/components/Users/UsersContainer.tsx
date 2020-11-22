import React from 'react'
import {connect} from "react-redux";
import {RootStateType, UserObjType} from "../../redux/store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import {Dispatch} from 'redux';
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/images/preloader.svg"

type PropsType = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: Function,
    setTotalUsersCount: Function,
    isFetching: boolean,
}
class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {


        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      setCurrentPage={this.props.setCurrentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setUsers={this.props.setUsers}
        />
        </>
    }
}


type MapStateType = {
    users: Array<UserObjType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

type MapDispatchType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchType=> {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserObjType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);