import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import {RootStateRedux} from "../../redux/redux-store";
import s from '../common/FormsControls/FormControls.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

type LoginType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       type={'password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}/> remember me
            </div>
            {props.error &&
            <div className={s.formSummaryError}>{props.error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        console.log('REDIRECT')
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: RootStateRedux) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);