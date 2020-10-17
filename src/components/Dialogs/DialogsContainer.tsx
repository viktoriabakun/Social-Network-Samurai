import React from "react";
import {StoreType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

export type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = () => {


    return <StoreContext.Consumer>
        { store => {
            // let state = store.getState().dialogsPage;

            const onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
        }

            const onNewMessageChange = (body: any) => {
            store.dispatch(updateNewMessageBodyCreator(body))
        }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={store.getState().dialogsPage}
        />}
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;