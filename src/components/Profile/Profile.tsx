import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage} from "../../redux/state";
import {ProfileActionType} from "../../redux/profile-reducer";

type PropsType = {
    profilePage: ProfilePage
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ProfileActionType) => void
}

const Profile = (props: PropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;