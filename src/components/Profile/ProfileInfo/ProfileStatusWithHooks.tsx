import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}
// type ProfileStatusState = {
//     editMode: boolean
//     status: string
// }

const ProfileStatusWithHooks = (props: ProfileStatusProps) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}
                      onBlur={deactivateEditMode}

                >{status || 'enter your status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;