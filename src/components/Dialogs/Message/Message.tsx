import React from "react";
import s from './../Dialogs.module.css';
import {MessageProps} from "../../../redux/state";

const Message = (props: MessageProps) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let sendMessage = () => {
        alert(newMessageElement.current?.value);
    }

    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={sendMessage}>send</button>
        </div>
    )
}

export default Message;