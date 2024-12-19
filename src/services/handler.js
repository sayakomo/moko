import { auth } from '../middlewares/auth.js';
import { Shopee, ShopeeFood, Gofood } from './services.js';

export const getTypeServices = async (type, versi, device, tikor) => {
    switch (type) {
        case 'moko':
            return { type: type, versi: versi, device: device, tikor: tikor };
            //return await auth(versi, device);
            break;
        case 'Shopee':
            return await Shopee(device, tikor);
            break;
        default:
            return {
                error: true,
                message: 'Invalid Type'
            }
    }
};

export const getSearchServices = async (search, device, tikor, keyword) => {
    switch (search) {
        case 'ShopeeFood':
            return await ShopeeFood(device, tikor, keyword);
            break;
        case 'Gofood':
            return await Gofood(device, tikor, keyword);
            break;
        default:
            return {
                error: true,
                message: 'Invalid Search Type'
            }
    }
};