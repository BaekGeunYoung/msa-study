import React, {ChangeEvent} from 'react'
import {Button, Input} from "reactstrap";
import './index.scss'

interface Props {
    username: string
    password: string
    firstName: string
    lastName: string
    onChangeRegisterState: (e: ChangeEvent<HTMLInputElement>) => void
    onClickRegisterButton: () => void
}

const Register = (props: Props) => {
    return(
        <div className={"register-form-container"}>
            <div className={"username-container"}>
                <Input
                    className={"register-input"}
                    name={"username"}
                    placeholder={"username"}
                    value={props.username}
                    onChange={props.onChangeRegisterState}
                />
            </div>
            <div className={"password-container"}>
                <Input
                    className={"register-input"}
                    name={"password"}
                    placeholder={"password"}
                    value={props.password}
                    onChange={props.onChangeRegisterState}
                />
            </div>
            <div className={"firstName-container"}>
                <Input
                    className={"register-input"}
                    name={"firstName"}
                    placeholder={"first name"}
                    value={props.firstName}
                    onChange={props.onChangeRegisterState}
                />
            </div>
            <div className={"lastName-container"}>
                <Input
                    className={"register-input"}
                    name={"lastName"}
                    placeholder={"last name"}
                    value={props.lastName}
                    onChange={props.onChangeRegisterState}
                />
            </div>
            <div className={"login-button-container"}>
                <Button
                    className={"login-button"}
                    color={"success"}
                    onClick={props.onClickRegisterButton}
                >
                    Register
                </Button>
            </div>
        </div>
    )
};

export default Register;