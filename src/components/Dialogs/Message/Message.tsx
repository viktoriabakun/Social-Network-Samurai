import React from "react";
import s from './../Dialogs.module.css';
import {MessageProps} from "../../../redux/state";

const Message = (props: MessageProps) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();


    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}

export default Message;