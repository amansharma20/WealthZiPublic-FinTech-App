import { RequestConstant, ResponseConstant } from "../../module/api/CommanConstant";
import { ExploreConstants } from "../constants/ExploreConstants";
import { ExploreService } from '../services/ExploreService';

export const ExploreAction = {
    getInvestmentDetails,
};

function getInvestmentDetails(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(ExploreConstants.INVESTMENT_DETAIL_REQUEST, data));
        const result = await ExploreService.getInvestmentDetails(url, data);
        dispatch(
            ResponseConstant(
                ExploreConstants.INVESTMENT_DETAIL_SUCCESS,
                ExploreConstants.INVESTMENT_DETAIL_SUCCESS,
                result,
            ),
        );
        return result;
    };
}

