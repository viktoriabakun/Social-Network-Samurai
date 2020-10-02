import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsCotainer";

type PropsType = {
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