import { MutualFundsConstants } from '../constants/MutualFundsConstants';

const initialState = {
    status: '',
    data: {
        mutualfunds: {},
        xirReport: {},
        consolidatedFunds: {},
        allMutualFunds: {},
        fundsScreener: {},
        nfoList: {}
    },
    error: {},
};

export function MutualFundsReducer(state = initialState, action) {
    switch (action.type) {
        case MutualFundsConstants.MY_MUTUAL_FUNDS_REQUEST:
            return {
                status: MutualFundsConstants.MY_MUTUAL_FUNDS_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case MutualFundsConstants.MY_MUTUAL_FUNDS_SUCCESS:
            return {
                status: MutualFundsConstants.MY_MUTUAL_FUNDS_SUCCESS,
                data: { ...state.data, ...{ mutualfunds: action.data.data['mutual-funds'] } },
                error: {},
            };
        case MutualFundsConstants.MY_MUTUAL_FUNDS_FAILURE:
            return {
                status: MutualFundsConstants.MY_MUTUAL_FUNDS_FAILURE,
                data: { ...state.data, mutualfunds: {} },
                error: action.data
            };

        case MutualFundsConstants.XIR_REQUEST:
            return {
                status: MutualFundsConstants.XIR_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case MutualFundsConstants.XIR_SUCCESS:
            return {
                status: MutualFundsConstants.XIR_SUCCESS,
                data: { ...state.data, ...{ xirReport: action.data.data } },
                error: {},
            };
        case MutualFundsConstants.XIR_FAILURE:
            return {
                status: MutualFundsConstants.XIR_FAILURE,
                data: { ...state.data, xirReport: {} },
                error: action.data
            };

        case MutualFundsConstants.CONSOLIDATED_REQUEST:
            return {
                status: MutualFundsConstants.CONSOLIDATED_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case MutualFundsConstants.CONSOLIDATED_SUCCESS:
            return {
                status: MutualFundsConstants.CONSOLIDATED_SUCCESS,
                data: { ...state.data, ...{ consolidatedFunds: action.data.data } },
                error: {},
            };
        case MutualFundsConstants.CONSOLIDATED_FAILURE:
            return {
                status: MutualFundsConstants.CONSOLIDATED_FAILURE,
                data: { ...state.data, consolidatedFunds: {} },
                error: action.data
            };

        case MutualFundsConstants.ALL_MUTUAL_FUNDS_REQUEST:
            return {
                status: MutualFundsConstants.ALL_MUTUAL_FUNDS_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case MutualFundsConstants.ALL_MUTUAL_FUNDS_SUCCESS:
            return {
                status: MutualFundsConstants.ALL_MUTUAL_FUNDS_SUCCESS,
                data: { ...state.data, ...{ allMutualFunds: action.data.data } },
                error: {},
            };
        case MutualFundsConstants.CONSOLIDATED_FAILURE:
            return {
                status: MutualFundsConstants.ALL_MUTUAL_FUNDS_FAILURE,
                data: { ...state.data, allMutualFunds: {} },
                error: action.data
            };

        case MutualFundsConstants.FUND_SCREENER_REQUEST:
            return {
                status: MutualFundsConstants.FUND_SCREENER_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case MutualFundsConstants.FUND_SCREENER_SUCCESS:
            return {
                status: MutualFundsConstants.FUND_SCREENER_SUCCESS,
                data: { ...state.data, ...{ fundsScreener: action.data.data } },
                error: {},
            };
        case MutualFundsConstants.FUND_SCREENER_FAILURE:
            return {
                status: MutualFundsConstants.FUND_SCREENER_FAILURE,
                data: { ...state.data, fundsScreener: {} },
                error: action.data
            };

        case MutualFundsConstants.NFO_REQUEST:
            return {
                status: MutualFundsConstants.NFO_REQUEST,
                data: { ...state.data },
                error: {},
            };
        case MutualFundsConstants.NFO_SUCCESS:
            return {
                status: MutualFundsConstants.NFO_SUCCESS,
                data: { ...state.data, ...{ nfoList: action.data.data } },
                error: {},
            };
        case MutualFundsConstants.NFO_FAILURE:
            return {
                status: MutualFundsConstants.NFO_FAILURE,
                data: { ...state.data, nfoList: {} },
                error: action.data
            };


        default:
            return state;
    }
}
