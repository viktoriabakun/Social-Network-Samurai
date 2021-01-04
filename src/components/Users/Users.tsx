import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/userImg.png";
import {UserObjType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export type UsersProps = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: Function,
    onPageChanged: (pageNumber: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    followingInProgress: any[]
}

let Users = (props: UsersProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: Array<number> = [];
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
                <div>

                    <NavLink to={'/profile/' + u.id}><img src={u.photos.small ? u.photos.small : userImg} alt="photo from server"
                                  className={s.userPhoto}/>
                    </NavLink>
                    </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            // axios
                            //     .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                            //         withCredentials: true,
                            //         headers: {
                            //             'API-KEY': '3cef8baf-ff4b-4311-bb54-af9699d41e4c'
                            //         }
                            //     })
                            usersAPI.unfollow(u.id)
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        props.unfollow(u.id)}
                                    props.toggleFollowingProgress(false, u.id)
                                });
                            }}>unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            usersAPI.follow(u.id)
                                .then(response => {
                                if(response.data.resultCode === 0){
                                    props.follow(u.id)}
                                    props.toggleFollowingProgress(false, u.id)
                                    console.log('follow')});
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