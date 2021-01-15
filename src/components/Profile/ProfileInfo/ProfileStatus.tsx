import React, {ChangeEvent} from "react";

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}
type ProfileStatusState = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
    state: ProfileStatusState = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusProps, prevState: ProfileStatusState) {
     if(prevProps.status !== this.props.status){
         this.setState({
             status: this.props.status
         })
     }
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'enter your status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;