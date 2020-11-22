import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/userImg.png";
import {UserObjType} from "../../redux/store";

export type UsersProps = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: Function,
    setTotalUsersCount: Function,
    onPageChanged: Function,
}

let Users = (props: UsersProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p => {
                // @ts-ignore
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small != null ? u.photos.small : userImg} alt="" className={s.userPhoto}/></div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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

export default Users;