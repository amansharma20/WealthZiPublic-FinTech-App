import {api} from '../../module/api/SecureAPI';

export const ExploreService = {
    getInvestmentDetails
};

async function getInvestmentDetails(url, data) {
    return await api.get(url, data);
}



