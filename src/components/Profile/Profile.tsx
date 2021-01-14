import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsCotainer";
import {ProfileType} from "../../redux/store";


type PropsType = {
   profile: ProfileType
    status: string
}


const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;