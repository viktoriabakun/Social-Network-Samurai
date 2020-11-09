import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType, UserObjType, UsersType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import { Dispatch } from 'redux';


type MapStateType = {
    users: Array<UserObjType>
}

type MapDispatchType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
}

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        users: state.usersPage.users
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
        }

    }
}

export default connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, mapDispatchToProps)(Users);