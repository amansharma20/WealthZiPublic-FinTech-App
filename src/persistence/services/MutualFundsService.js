import {api} from '../../module/api/SecureAPI';

export const MutualFundsService = {
    getPortfolioSummary,
    getXirReport,
    getConsolidatedFunds,
    getAllMutualFunds,
    getFundsScreener,
    getNFOList
};

async function getPortfolioSummary(url, data) {
    return await api.get(url, data);
}

async function getXirReport(url, data) {
    return await api.post(url, data);
}

async function getConsolidatedFunds(url, data) {
    return await api.post(url, data);
}


async function getAllMutualFunds(url, data) {
    return await api.post(url, data);
}

async function getFundsScreener(url, data) {
    return await api.post(url, data);
}

async function getNFOList(url, data) {
    return await api.get(url, data);
}