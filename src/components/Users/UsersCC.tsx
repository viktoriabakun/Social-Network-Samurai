import React from 'react';
import axios from "axios";
import {StoreType, UserObjType, UsersType} from "../../redux/store";
import styles from './Users.module.css';
import userImg from '../../assets/images/userImg.png'

type PropsType = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
}


class Users extends React.Component<PropsType>{
    getUsers = () => {

        if (this.props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render(){
    return  <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small != null ? u.photos.small : userImg} alt="" className={styles.userPhoto}/></div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>follow</button>}
                 </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
                </div>)
            }
        </div>
    }
}


export default Users;