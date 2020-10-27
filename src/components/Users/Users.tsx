import React from 'react';
import {UsersType} from "../../redux/store";


// export type LocationType = {
//     city: string
//     country: string
// }
//
// export type UserObjType = {
//     id: number
//     followed: boolean
//     fullName: string
//     status: string
//     location: LocationType
// }
//
// export type UsersType = {
//     users: UserObjType[]
// }

const Users = (props: UsersType) => {
return <div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div><img src="" alt=""/></div>
                <div><button>follow</button></div>
            </span>
            <span>
                <span><div></div><div></div></span>
                <span><div></div><div></div></span>
            </span>
        </div>)
    }
</div>
}

export default Users;