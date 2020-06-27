import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage, RootStateType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePage
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: PropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;