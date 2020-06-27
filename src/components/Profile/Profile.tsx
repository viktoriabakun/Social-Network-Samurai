import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage, RootStateType} from "../../redux/state";

type PropsType = {
    state: ProfilePage
    addPost: (message: string) => void
}

const Profile = (props: PropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;