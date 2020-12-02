import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";

type ProfileInfoProps ={
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.description_block}>
                <img src={props.profile && props.profile.photos ? props.profile.photos.large: ''}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;