import React from "react";
import s from './AvatarItem.module.css';
import {AvatarsType} from "../../../redux/state";

const AvatarItem = (props: AvatarsType) => {
    return (
        <div className={s.avatar}>
        <img src={props.src} id={props.id}/>
        </div>
    )
}



export default AvatarItem;