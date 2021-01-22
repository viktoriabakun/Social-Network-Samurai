import React, {FC} from "react";
import {ActionType} from "../../redux/store";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: RootStateRedux) => {
    return {
       dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: (newMessageBody: any) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);