import { RequestConstant, ResponseConstant } from "../../module/api/CommanConstant";
import { MutualFundsConstants } from "../constants/MutualFundsConstants";
import { MutualFundsService } from '../services/MutualFundsService';

export const MutualFundsAction = {
    getPortfolioSummary,
    getXirReport,
    getConsolidatedFunds,
    getAllMutualFunds,
    getFundsScreener,
    getNFOList
};

function getPortfolioSummary(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(MutualFundsConstants.MY_MUTUAL_FUNDS_REQUEST, data));
        const result = await MutualFundsService.getPortfolioSummary(url, data);
        dispatch(
            ResponseConstant(
                MutualFundsConstants.MY_MUTUAL_FUNDS_SUCCESS,
                MutualFundsConstants.MY_MUTUAL_FUNDS_FAILURE,
                result,
            ),
        );
        return result;
    };
}

function getXirReport(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(MutualFundsConstants.XIR_REQUEST, data));
        const result = await MutualFundsService.getXirReport(url, data);
        dispatch(
            ResponseConstant(
                MutualFundsConstants.XIR_SUCCESS,
                MutualFundsConstants.XIR_FAILURE,
                result,
            ),
        );
        return result;
    };
}

function getConsolidatedFunds(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(MutualFundsConstants.CONSOLIDATED_REQUEST, data));
        const result = await MutualFundsService.getConsolidatedFunds(url, data);
        dispatch(
            ResponseConstant(
                MutualFundsConstants.CONSOLIDATED_SUCCESS,
                MutualFundsConstants.CONSOLIDATED_FAILURE,
                result,
            ),
        );
        return result;
    };
}

function getAllMutualFunds(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(MutualFundsConstants.ALL_MUTUAL_FUNDS_REQUEST, data));
        const result = await MutualFundsService.getAllMutualFunds(url, data);
        dispatch(
            ResponseConstant(
                MutualFundsConstants.ALL_MUTUAL_FUNDS_SUCCESS,
                MutualFundsConstants.ALL_MUTUAL_FUNDS_FAILURE,
                result,
            ),
        );
        return result;
    };
}

function getFundsScreener(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(MutualFundsConstants.FUND_SCREENER_REQUEST, data));
        const result = await MutualFundsService.getFundsScreener(url, data);
        dispatch(
            ResponseConstant(
                MutualFundsConstants.FUND_SCREENER_SUCCESS,
                MutualFundsConstants.FUND_SCREENER_FAILURE,
                result,
            ),
        );
        return result;
    };
}

function getNFOList(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(MutualFundsConstants.NFO_REQUEST, data));
        const result = await MutualFundsService.getNFOList(url, data);
        dispatch(
            ResponseConstant(
                MutualFundsConstants.NFO_SUCCESS,
                MutualFundsConstants.NFO_FAILURE,
                result,
            ),
        );
        return result;
    };
}



