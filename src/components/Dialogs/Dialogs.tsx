import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPage} from "../../redux/state";
import {} from "../../App";
import AvatarItem from "./Avatar/AvatarItem";

type PropsType = {
    state: MessagesPage
}

const Dialogs = (props: PropsType) => {
    let avatarsElements = props.state.avatars.map(a => <AvatarItem id={a.id} src={a.src}/>)
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {avatarsElements}
            </div>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;