import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormControls';
import { connect } from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import { Navigate } from "react-router-dom";
import s from '../common/FormsControls/FormControl.module.css'



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                validate={[required]}
                component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                validate={[required]}
                component={Input} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return <Navigate to="/profile"/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {login}) (Login); 