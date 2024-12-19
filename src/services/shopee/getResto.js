import axios from 'axios';
import UserAgent from 'user-agents';
import { buildRequestData } from './helpers/buildRequestData.js';
import { parseCoordinates } from './helpers/parseCoordinates.js';

const getResto = async (tikor) => {
    const userAgent = new UserAgent({ deviceCategory: "mobile" });
    try {
        const url = "https://foody.shopee.co.id/api/buyer/listing-detail";
        const headers = {
            'User-Agent': userAgent.toString(),
            'Content-Type': 'application/json'
        };
        const { latitude, longitude } = parseCoordinates(tikor);
        const data = buildRequestData(latitude, longitude);
        
        const response = await axios.post(url, data, { headers });
        
        console.log(response.data);
    } catch (error) {
        console.error(error);
        return {
            error: true,
            message: error.message
        }
    }
};

getResto("-6.327988,106.8652313");