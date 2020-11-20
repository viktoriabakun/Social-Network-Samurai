import React from 'react';
import axios from "axios";
import {UserObjType} from "../../redux/store";
import s from './Users.module.css';
import userImg from '../../assets/images/userImg.png'

type PropsType = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}


class Users extends React.Component<PropsType> {

        componentDidMount()
        {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                });

        }

    render() {

            let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
            let pages = [];
            for (let i=1; i <= pagesCount; i++){
                pages.push(i);
            }

        return ( <div>
            <div>
                {pages.map( p => {
                    // @ts-ignore
                    return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                } )}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small != null ? u.photos.small : userImg} alt="" className={s.userPhoto}/></div>
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
        </div>)
    }
}



export default Users;