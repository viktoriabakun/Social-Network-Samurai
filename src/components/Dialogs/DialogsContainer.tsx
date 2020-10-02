import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import AvatarItem from "./Avatar/AvatarItem";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage;

    // let avatarsElements = state.avatars.map(a => <AvatarItem id={a.id} src={a.src}/>)

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick} store={props.store}
                    dialogsPage={state}
    />
}

export default DialogsContainer;