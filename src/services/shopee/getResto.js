import axios from 'axios';
import { parseCoordinates } from './helpers/parseCoordinates.js';
import { buildRequestData } from './helpers/buildRequestData.js';

export const getResto = async (tikor) => {
    const api = "https://foody.shopee.co.id/api/buyer/listing-detail";
    const headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G998B Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.60 Mobile Safari/537.36"
    };

    try {
        const { latitude, longitude } = parseCoordinates(tikor);
        const data = buildRequestData(latitude, longitude);
        
        const response = await axios.post(api, data, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching restaurant data:", error.message);
        return {
            error: true,
            message: error.message
        };
    }
};