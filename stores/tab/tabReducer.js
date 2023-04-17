import * as tabActionTypes from "./tabAction";

const initialState = {
    selectedTab: ""
}

const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case tabActionTypes.SELECT_TAB:
            return {
              ...state,
                selectedTab: action.payload
            }
        default:
            return state
    }
}

export default tabReducer;