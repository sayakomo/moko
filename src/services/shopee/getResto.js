import axios from 'axios';
import { parseCoordinates } from './helpers/parseCoordinates.js';
import { buildRequestData } from './helpers/buildRequestData.js';

export const getResto = async (tikor) => {
    const api = "https://foody.shopee.co.id/api/buyer/listing-detail";
    const headers = {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Linux; Android 11; Mi A1 Build/TQ3A.230705.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36"
    };

    try {
        const { latitude, longitude } = parseCoordinates(tikor);
        const data = buildRequestData(latitude, longitude);
        const response = await axios.post(api, data, { headers });
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.message
        };
    }
};