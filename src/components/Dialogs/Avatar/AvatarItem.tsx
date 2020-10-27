import React from "react";
import s from './AvatarItem.module.css';
import {AvatarsType} from "../../../redux/store";

const AvatarItem = (props: AvatarsType) => {
    return (
        <div className={s.avatar}>
        <img alt='avatar' src={props.src} id={props.id}/>
        </div>
    )
}



export default AvatarItem;