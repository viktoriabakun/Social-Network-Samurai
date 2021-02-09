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

const ProfileInfo: React.FC<ProfileInfoProps> = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.description_block}>
                <img src={profile && profile.photos ? profile.photos.large: ''}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;