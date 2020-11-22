import React from 'react'
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {RootStateType, UserObjType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import {Dispatch} from 'redux';


type MapStateType = {
    users: Array<UserObjType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type MapDispatchType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
    }
}

export default connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);