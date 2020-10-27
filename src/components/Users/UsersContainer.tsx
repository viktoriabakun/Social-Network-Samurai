import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/store";
import {followAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: any) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: any) => {
            dispatch(followAC(userID))
        },
        setUsers: (users: any, userID:any) => {
            dispatch(setUsersAC(userID))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);