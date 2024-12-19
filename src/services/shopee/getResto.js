import axios from 'axios';
import UserAgent from 'user-agents';
import { buildRequestData } from './helpers/buildRequestData.js';
import { parseCoordinates } from './helpers/parseCoordinates.js';

export const getResto = async (tikor) => {
    const userAgent = new UserAgent({ deviceCategory: "mobile" });
    try {
        const url = 'https://api.tikor.com/v1/restaurants';
        const headers = {
            'User-Agent': userAgent.toString(),
            'Content-Type': 'application/json'
        };
        const { latitude, longitude } = parseCoordinates(tikor);
        const data = buildRequestData(latitude, longitude);
        const response = await axios.get(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
        return {
            error: true,
            message: error.message
        }
    }
};