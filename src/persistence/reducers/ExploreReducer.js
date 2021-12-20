import { ExploreConstants } from '../constants/ExploreConstants';

const initialState = {
    status: '',
    data: {
        investmentDetails: {},
    },
    error: {},
};

export function ExploreReducer(state = initialState, action) {
    switch (action.type) {
        case ExploreConstants.INVESTMENT_DETAIL_REQUEST:
            return {
                status: ExploreConstants.INVESTMENT_DETAIL_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case ExploreConstants.INVESTMENT_DETAIL_SUCCESS:
            return {
                status: ExploreConstants.INVESTMENT_DETAIL_SUCCESS,
                data: { ...state.data, ...{ investmentDetails: action.data.data } },
                error: {},
            };
        case ExploreConstants.INVESTMENT_DETAIL_FAILURE:
            return {
                status: ExploreConstants.INVESTMENT_DETAIL_FAILURE,
                data: { ...state.data, investmentDetails: {} },
                error: action.data
            };
        default:
            return state;
    }
}
