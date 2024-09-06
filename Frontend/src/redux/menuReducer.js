
const CHANGE_ACTIVE = "CHANGE_ACTIVE"

let initialState = {
    menuActive: false
}


const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_ACTIVE:
            return {
                ...state,
                menuActive: action.menuActive
            }
        default:
            return state
    }
}

const setActiveAC = (menuActive) => {
    return {
        type: CHANGE_ACTIVE,
        menuActive
    }
}

export const setActiveTC = (menuActive) => (dispatch) => {
    dispatch(setActiveAC(menuActive))
}

export default menuReducer