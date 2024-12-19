import { getTypeServices, getSearchServices } from '../services/handler.js';

export const getServices = async (req, res) => {
    const { Type, Versi, Device, Tikor, Search, Keyword } = req.body;

    if (!Type || !Device || !Tikor) {
        return res.status(400).json({
            error: true,
            message: 'Type, Device, and Tikor are required'
        });
    }

    try {
        const response = await handleServiceRequest({ Type, Search, Versi, Device, Tikor, Keyword });
        return res.json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        });
    }
};

const handleServiceRequest = async ({ Type, Search, Versi, Device, Tikor, Keyword }) => {
    if (Type) {
        return await getTypeServices(Type, Versi, Device, Tikor);
    } 
    if (Search) {
        return await getSearchServices(Search, Device, Tikor, Keyword);
    }
    throw new Error('Invalid Type or Search');
};

export const komo = async (req, res) => {
    try {
        return res.status(400).json({
            error: true,
            message: 'regist dulu bang'
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal Server Error'
        });
    }
};