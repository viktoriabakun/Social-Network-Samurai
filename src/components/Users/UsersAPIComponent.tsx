import React from 'react';
import axios from "axios";
import {UserObjType} from "../../redux/store";
import s from './Users.module.css';
import userImg from '../../assets/images/userImg.png'
import Users from "./Users";

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
}


class UsersAPIComponent extends React.Component<PropsType> {

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


        return <Users totalUsersCount={this.props.totalUsersCount}
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
    }
}


export default UsersAPIComponent;