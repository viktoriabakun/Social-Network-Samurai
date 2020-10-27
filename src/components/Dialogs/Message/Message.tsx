import React from "react";
import s from './../Dialogs.module.css';
import {MessageProps} from "../../../redux/store";

const Message = (props: MessageProps) => {

    // let newMessageElement = React.createRef<HTMLTextAreaElement>();


    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}

export default Message;