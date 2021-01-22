import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from './FormControls.module.css'


export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError? s.error : '')}>
            <textarea {...input}{...restProps}/>
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}