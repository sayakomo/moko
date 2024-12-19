import { isExpired } from '../middlewares/auth.js';
import { getResto } from './shopee/request.js';

export const Shopee = async (device, tikor) => {
    try {
        const expired = await isExpired(device);
        
        if (expired) {
            return { status: 401, message: 'USER expired' }
        }

        return getResto(tikor);
    } catch (error) {
        return {
            error: true,
            message: error.message,
        }
    }
};

export const ShopeeFood = async (device, tikor, keyword) => {
}

export const Gofood = async (device, tikor, keyword) => {
}