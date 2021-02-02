import {RootStateRedux} from "./redux-store";
import {createSelector} from "reselect";

const getUsersPrimitiveSelector = (state: RootStateRedux) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersPrimitiveSelector, (users) => {
   return users.filter(u => true)
})

export const getPageSize = (state: RootStateRedux) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateRedux) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateRedux) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateRedux) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateRedux) => {
    return state.usersPage.followingInProgress
}