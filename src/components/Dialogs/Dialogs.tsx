import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from "../../redux/state";
import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import AvatarItem from "./Avatar/AvatarItem";

type PropsType = {
    store: StoreType
}

const Dialogs = (props: PropsType) => {

    let state = props.store.getState().dialogsPage;

    let avatarsElements = state.avatars.map(a => <AvatarItem id={a.id} src={a.src}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div>
                {avatarsElements}
            </div>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder={'Enter your message'}
                                   onChange={onNewMessageChange}
                    /></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;