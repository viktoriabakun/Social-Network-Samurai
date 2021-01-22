import React from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import s from './FormControls.module.css'


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormControlPropsType> = ({meta: { touched, error }, children}) => {

    const hasError = touched && error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            {children}
            {hasError && <div>{error}</div>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input}{...restProps}/></FormControl>
}
