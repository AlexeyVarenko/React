import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps=(state)=>{
    return {
        dialogsPage: state.dialogsPage,
    }

}

let mapDispatchToProps=(dispatch)=>{
    return {
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);



const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;