export interface RegisterState {
    username: string
    password: string
    firstName: string
    lastName: string
}

enum RegisterEnum {
    USERNAME = 'username',
    PASSWORD = 'password',
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName'
}

export interface RegisterAction {
    type: RegisterEnum
    value: string | number
}

export const registerReducer = (state: RegisterState, action: RegisterAction) => {
    return {
        ...state,
        [action.type] : action.value
    }
};

export const registerInitialState: RegisterState = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
};