import React, {useState, useReducer, ChangeEvent} from 'react';
import {History} from 'history'
import {AuthViewMode, TOKEN_KEY} from "../../../constants";
import Register from "../../../component/auth/Register";
import Login from "../../../component/auth/Login";
import './index.scss'
import {loginInitialState, loginReducer} from "../../../reducers/LoginReducer";
import {registerInitialState, registerReducer} from "../../../reducers/RegisterReducer";
import axios from 'axios';

interface Props {
    history: History
}

const AuthContainer = (props: Props) => {
    const [viewMode, setViewMode] = useState(AuthViewMode.LOGIN);

    const handleChangeViewMode = () => {
        if (viewMode === AuthViewMode.LOGIN) setViewMode(AuthViewMode.REGISTER)
        else setViewMode(AuthViewMode.LOGIN)
    };

    const [loginState, dispatchLogin] = useReducer(loginReducer, loginInitialState);

    const [registerState, dispatchRegister] = useReducer(registerReducer, registerInitialState);


    const handleChangeLoginState = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        //@ts-ignore
        dispatchLogin(action)
    };

    const handleChangeRegisterState = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        //@ts-ignore
        dispatchRegister(action)
    };

    const handleClickLoginButton = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/auth/login`, loginState)
            const {data} = response;
            sessionStorage.setItem(TOKEN_KEY, data.token)
            alert('로그인 성공')
            props.history.push('/main')
        } catch (e) {
            console.log(e)
            alert('로그인 실패')
        }
    };

    const handleClickRegisterButton = () => {
        axios.post(`${process.env.REACT_APP_API_ENDPOINT}/auth/register`, registerState)
            .then(response => {
                alert('회원가입 성공')
                setViewMode(AuthViewMode.LOGIN)
            })
            .catch(e => {
                alert('회원가입 실패')
                console.log(e)
            })
    };

    return (
        <div className={"auth-container"}>
            <div className={"auth-header-container"}>
                <div className={`auth-header-circle ${viewMode}`} onClick={handleChangeViewMode}>
                    <img className={"auth-header-img"} src={"/strong.png"} />
                </div>
                <hr className={`auth-header-hr ${viewMode}`} />
            </div>
            <div className={"auth-body-container"}>
                {
                    viewMode === AuthViewMode.LOGIN
                        ? <Login
                            onClickLoginButton={handleClickLoginButton}
                            onChangeLoginState={handleChangeLoginState}
                            username={loginState.username}
                            password={loginState.password}
                        />
                        : <Register
                            onClickRegisterButton={handleClickRegisterButton}
                            onChangeRegisterState={handleChangeRegisterState}
                            username={registerState.username}
                            password={registerState.password}
                            firstName={registerState.firstName}
                            lastName={registerState.lastName}
                        />
                }
            </div>
            <div className={"auth-footer-container"}>
                <hr className={`auth-footer-hr ${viewMode}`} />
            </div>
        </div>
    )
};

export default AuthContainer;