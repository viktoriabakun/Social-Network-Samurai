import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsCotainer";

//дичь
type PropsType = {
   profile?: any
}
//дичь

const Profile = (props: PropsType) => {

    return (

        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;