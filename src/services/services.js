import { isExpired } from '../middlewares/auth.js';
import { getResto } from './shopee/getResto.js';

export const Shopee = async (device, tikor) => {
    try {
        const isActive = await isExpired(device);
        
        if (!isActive) {
            return { status: 401, message: 'regist dulu bang' }
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