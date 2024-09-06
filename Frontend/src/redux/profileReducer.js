import { AuthAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"
const CHANGE_ACTIVE = "CHANGE_ACTIVE"
const SET_LOGIN_USER_NAME_TEXT = "SET_LOGIN_USER_NAME_TEXT"

let initialState = {
    loginUserNameText: '',
    profileActive: false,
    userId: null,
    name: null,
    userName: null,
    email: null,
    phone: null,
    webSite: null,
    avatar: null,
    isAuth: false,
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE:
            return {
                ...state,
                profileActive: action.profileActive
            }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_LOGIN_USER_NAME_TEXT:
            return {
                ...state,
                loginUserNameText: action.text,
            }
        default:
            return state
    }
}


const setAuthUserDataAC = (userId, name, avatar, userName, email, phone, webSite, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, name, avatar, userName, email, phone, webSite, isAuth
        }
    }
}

const setActiveProfileAC = (profileActive) => {
    return {
        type: CHANGE_ACTIVE,
        profileActive
    }
}

const setLoginUserNameTextAC = (text) => {
    return {
        type: SET_LOGIN_USER_NAME_TEXT,
        text
    }
}

export const setLoginUserNameTextTC = (text) => (dispatch) => {
    dispatch(setLoginUserNameTextAC(text))
}


export const setActiveProfileTC = (profileActive) => (dispatch) => {
    dispatch(setActiveProfileAC(profileActive))
}


export const LoginTC = (text) => async (dispatch) => {
    let data = await AuthAPI.login(text)
    
    if(data !== '') {
        const { id, name, username, email, phone, website, avatar } = data
        dispatch(setAuthUserDataAC(id, name, avatar, username, email, phone, website, true))
    }
}

export const LogOutTC = () => async (dispatch) => {
    dispatch(setAuthUserDataAC(null, null, null, null, null, null, null, false))
}


export default profileReducer