import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage, StoreType} from "../../redux/state";
import {ProfileActionType} from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsCotainer";

type PropsType = {
    profilePage: ProfilePage
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ProfileActionType) => void
    store: StoreType

}

const Profile = (props: PropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;