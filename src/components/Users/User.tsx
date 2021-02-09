import React from "react";
import s from "./Users.module.css";
import userImg from "../../assets/images/userImg.png";
import {UserObjType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

export type UsersProps = {
    user: UserObjType
    // users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    // pageSize: number,
    // totalUsersCount: number,
    // currentPage: number,
    // setCurrentPage: Function,
    // onPageChanged: (pageNumber: number) => void,
    followingInProgress: any[]
}

let User: React.FC<UsersProps> = ({ user, followingInProgress,follow, unfollow,...props}) => {

    return (
     <div>
            <span>
                <div>

                    <NavLink to={'/profile/' + user.id}><img src={user.photos.small ? user.photos.small : userImg}                                   className={s.userPhoto}/>
                    </NavLink>
                    </div>
                <div>
                    {
                        user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                            }}>unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                            }}>follow</button>}
                 </div>
            </span>
                <span>
                <span>
                    <div>{user.name}</div><div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>
    )
}

export default User;