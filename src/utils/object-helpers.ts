import {UserObjType} from "../redux/store";

type newObjPropsType = {
    followed: boolean
}

export const updateObjectInArray = (users:  Array<UserObjType>,
                                    itemId: number,
                                    objPropName: keyof UserObjType,
                                    newObjProps: newObjPropsType) => {
    return users.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}