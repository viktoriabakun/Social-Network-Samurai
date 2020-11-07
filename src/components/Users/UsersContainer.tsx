import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType, UsersType} from "../../redux/store";
import {followAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(followAC(userID))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);