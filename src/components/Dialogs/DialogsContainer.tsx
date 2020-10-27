// import React from "react";
import {ActionType, RootStateType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {store => {
//             // let state = store.getState().dialogsPage;
//
//             const onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             const onNewMessageChange = (body: any) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={store.getState().dialogsPage}
//             />
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state: RootStateType) => {
    return {
       dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;