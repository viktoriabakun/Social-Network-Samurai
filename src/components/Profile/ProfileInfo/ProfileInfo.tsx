import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoProps ={
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.description_block}>
                <img src={props.profile && props.profile.photos ? props.profile.photos.large: ''}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;