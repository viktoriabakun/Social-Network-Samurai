import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPage} from "../../redux/store";
import AvatarItem from "./Avatar/AvatarItem";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type PropsType = {
    dialogsPage: MessagesPage
    updateNewMessageBody: (body: any) => void
    sendMessage: () => void
    isAuth: boolean
}

export type AddMessageFormType = {

}

const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage;

    let avatarsElements = state.avatars.map(a => <AvatarItem id={a.id} key={a.id} src={a.src}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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

                <AddMessageFormRedux/>
            </div>
        </div>

    )
}

const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'
                       name='newMessageBody'
                       placeholder='Enter your message'
                />
                </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;