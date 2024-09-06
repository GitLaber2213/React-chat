import { MessagingAPI, UserAPI } from "../api/api"

const SET_USERS = "SET_USERS"
const SET_FIND_TEXT = "SET_FIND_TEXT"
const FIND_USER = "FIND_USER"
const GET_SELECTED_USER_ID = "GET_SELECTED_USER_ID"
const GET_SELECTED_USER_INFO = "GET_SELECTED_USER_INFO"
const SET_MESSAGE_TEXT = "SET_MESSAGE_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_ACTIVE_GROUP_WINDOW = "CHANGE_ACTIVE_GROUP_WINDOW"
const SET_NAME_GROUP_TEXT = "SET_NAME_GROUP_TEXT"
const CREATE_GROUP = "CREATE_GROUP"
const GET_MESSAGES = "GET_MESSAGES"
const SELECT_USERS_INT_GROUP = "SELECT_USERS_INT_GROUP"
const GET_GROUPS = "GET_GROUPS"

let initialState = {
    users: [],
    messages: [],
    groups: [],
    selectedUsersInGroup: [],

    createGroupActive: false,
    selectedUserInfo: [],
    findText: '',
    messageText: '',
    nameGroupText: ''
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_FIND_TEXT:
            return {
                ...state,
                findText: action.findText
            }
        case FIND_USER:
            return {
                ...state,
                users: action.filteredUsers
            }
        case GET_SELECTED_USER_ID:
            return {
                ...state,
                selectedUserId: action.selectedUserId
            }
        case GET_SELECTED_USER_INFO:
            return {
                ...state,
                selectedUserInfo: action.selectedUserInfo
            }
        case SET_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.messageText,
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    messageText: {
                        userId: action.userId,
                        userName: action.userName,
                        selectedUserId: action.selectedUserId,
                        selectedUserName: action.selectedUserName,
                        message: action.message,
                        timeStamp: action.timeStamp
                    }
                }],
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case CHANGE_ACTIVE_GROUP_WINDOW:
            return {
                ...state,
                createGroupActive: action.createGroupActive
            }
        case SET_NAME_GROUP_TEXT:
            return {
                ...state,
                nameGroupText: action.nameGroupText
            }
        case SELECT_USERS_INT_GROUP:
            return {
                ...state,
                selectedUsersInGroup: action.selectedUsers
            }
        case CREATE_GROUP:
            return {
                ...state,
                groups: [...state.groups, {
                    name: action.groupName,
                    id: 106,
                    favorite: true,
                    avatar: null,
                    username: "bebra",
                    website: "bebra",
                    email: "bebra",
                    phone: "bebra"
                }],
                nameGroupText: ''
            }
        case GET_GROUPS:
            return {
                ...state,
                groups: action.groups
            }
        default:
            return state;
    }
}

const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

const setFindTextAC = (findText) => {
    return {
        type: SET_FIND_TEXT,
        findText
    }
}

const findUserAC = (filteredUsers) => {
    return {
        type: FIND_USER,
        filteredUsers
    }
}

const getSelectedUserIdAC = (selectedUserId) => {
    return {
        type: GET_SELECTED_USER_ID,
        selectedUserId
    }
}

const getSelectedUserInfoAC = (selectedUserInfo) => {
    return {
        type: GET_SELECTED_USER_INFO,
        selectedUserInfo: selectedUserInfo
    }

}

const setMessageTextAC = (messageText) => {
    return {
        type: SET_MESSAGE_TEXT,
        messageText
    }
}

const addMessageAC = (message, userId, userName, selectedUserId, selectedUserName, timeStamp) => {
    return {
        type: ADD_MESSAGE,
        message,
        userId,
        userName,
        selectedUserId,
        selectedUserName,
        timeStamp
    }
}

const getMessagesAC = (messages) => {
    return {
        type: GET_MESSAGES,
        messages
    }
}

const setActiveСreateGroupWindowAC = (createGroupActive) => {
    return {
        type: CHANGE_ACTIVE_GROUP_WINDOW,
        createGroupActive
    }
}

const setNameGroupTextAC = (nameGroupText) => {
    return {
        type: SET_NAME_GROUP_TEXT,
        nameGroupText
    }
}

const getGroupsAC = (groups) => {
    return {
        type: GET_GROUPS,
        groups
    }
}

const addGroupAC = (groupName) => {
    return {
        type: CREATE_GROUP,
        groupName
    }
}

const selectUsersInGroupAC = (selectedUsers) => {
    return {
        type: SELECT_USERS_INT_GROUP,
        selectedUsers
    }
}

export const selectUsersInGroupTC = (selectedUsers) => (dispatch) => {
    dispatch(selectUsersInGroupAC(selectedUsers))
}

export const addGroupTC = (groupName, selectedUserInGroup, authUserId) => async (dispatch) => {
    let result = await MessagingAPI.createGroup(groupName, selectedUserInGroup, authUserId)

    if(result === 0) {
        let data = await MessagingAPI.getGroups()
        dispatch(getGroupsAC(data))
    }
    
}

export const getGroupsTC = () => async (dispatch) => {
    let data = await MessagingAPI.getGroups()

    dispatch(getGroupsAC(data))
}

export const setNameGroupTextTC = (nameGroupText) => (dispatch) => {
    dispatch(setNameGroupTextAC(nameGroupText))
}

export const setActiveCreateGroupTC = (createGroupActive) => (dispatch) => {
    dispatch(setActiveСreateGroupWindowAC(createGroupActive))
}

export const deleteChatTC = (selectedUserId, authUserId) => async (dispatch) => {
    await MessagingAPI.deleteMessages(selectedUserId, authUserId)

    dispatch(getMessagesTC(selectedUserId, authUserId))
}

export const getMessagesTC = (selectedUserId, authUserId) => async (dispatch) => {
    let data = await MessagingAPI.getMessages(authUserId, selectedUserId)
    dispatch(getMessagesAC(data))
}

export const addMessageTC = (message, authUserId, authUserName, selectedUserId, selectedUserName) => async (dispatch) => {
    let msg = message.replace(/[\s\n]+/g, '')
    let timeStamp = new Date().toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    if (msg != '') {
        MessagingAPI.sendMessage(dispatch(addMessageAC(message, authUserId, authUserName, selectedUserId, selectedUserName, timeStamp)))
    }
}

export const setMessageTextTC = (message) => (dispatch) => {
    dispatch(setMessageTextAC(message))
}

export const setFavoriteTC = (selectedUserId, authUserId) => async (dispatch) => {
    await MessagingAPI.changeFavorite(selectedUserId)
    dispatch(getUsersTC(authUserId))
}

export const getFindTextTC = (findText, users) => (dispatch) => {
    dispatch(setFindTextAC(findText))

    const filteredUsers = users.filter(user => {
        return ['name', 'username', 'email', 'phone'].some((key) =>
            user[key].toLowerCase().includes(findText.toLowerCase())
        )
    })
    dispatch(findUserAC(filteredUsers))
}

export const getSelectedUserIdTC = (selectedUserId, users, groups) => (dispatch) => {
    dispatch(getSelectedUserIdAC(selectedUserId))

    let getSelectedUserInfo = users.find(user => user.id === selectedUserId)
    if (getSelectedUserInfo === undefined) {
        getSelectedUserInfo = groups.find(group => group.id === selectedUserId)
    }

    dispatch(getSelectedUserInfoAC(getSelectedUserInfo))
}

export const getUsersTC = (authUserId) => async (dispatch) => {
    const data = await UserAPI.getUsers(authUserId)
    dispatch(setUsersAC(data))
}

export default usersReducer