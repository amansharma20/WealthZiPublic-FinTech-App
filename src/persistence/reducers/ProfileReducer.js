import { ProfileConstant } from "../constants/ProfileConstants";

const initialState = {
    status: '',
    data: {
        profileDetails: {},
    },
    error: {},
};


export function ProfileReducer(state = initialState, action) {
    switch (action.type) {
        case ProfileConstant.PROFILE_REQUEST:
            return {
                status: ProfileConstant.PROFILE_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case ProfileConstant.PROFILE_SUCCESS:
            return {
                status: ProfileConstant.PROFILE_SUCCESS,
                data: { ...state.data, ...{ profileDetails: action.data.data } },
                error: {},
            };
        case ProfileConstant.PROFILE_FAILURE:
            return {
                status: ProfileConstant.PROFILE_FAILURE,
                data: { ...state.data, profileDetails: {} },
                error: {},
            };
        default:
            return state;
    }
}
