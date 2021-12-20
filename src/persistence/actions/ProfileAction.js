import { RequestConstant, ResponseConstant } from "../../module/api/CommanConstant";
import { ProfileConstant } from "../constants/ProfileConstants";
import { ProfileService } from "../services/ProfileService";

export const ProfileAction ={
    getProfile,
}

function getProfile(url, data) {
 
    return async dispatch => {
        dispatch(RequestConstant(ProfileConstant.PROFILE_REQUEST, data));
        const result = await ProfileService.getProfile(url, data);
        dispatch(
            ResponseConstant(
                ProfileConstant.PROFILE_SUCCESS,
                ProfileConstant.PROFILE_FAILURE,
                result,
            ),
        );
        return result;
    };
}