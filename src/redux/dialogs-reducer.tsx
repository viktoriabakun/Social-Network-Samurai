import {MessagesPage} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state: MessagesPage, action: DialogsActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: '6', message: body});
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = (): sendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text: string):updateNewMessageBodyCreatorType => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE
}
export type updateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type DialogsActionType = sendMessageCreatorType | updateNewMessageBodyCreatorType

export default dialogsReducer;