import {api} from '../../module/api/SecureAPI';

export const ProfileService = {
    getProfile,
};

async function getProfile(url, data) {
    return await api.get(url, data);
}