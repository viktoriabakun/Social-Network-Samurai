import React from "react";
import {UserObjType} from "../../redux/store";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

export type UsersProps = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: Function,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: any[]
}

let Users: React.FC<UsersProps> = ({
                                       unfollow,
                                       follow,
                                       followingInProgress,
                                       users,
                                       pageSize,
                                       totalUsersCount,
                                       onPageChanged,
                                       currentPage, ...props
                                   }) => {

    return (<>
            <Paginator currentPage={currentPage}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       onPageChanged={onPageChanged}
            />
            {
                users.map(u => <User key={u.id}
                                     followingInProgress={followingInProgress}
                                     follow={follow}
                                     unfollow={unfollow}
                                     user={u}
                />)

            }
        </>
    )
}

export default Users;