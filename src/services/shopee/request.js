import axios from 'axios';

const parseCoordinates = (coordinateString) => {
    const [latitude, longitude] = coordinateString.split(',');
    return {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
    };
};

const buildRequestData = (latitude, longitude) => {
    return {
        longitude,
        latitude,
        page_num: 1,
        page_size: 20,
        filter: {
            partner_types: [1, 2],
            rating_score_min: 4,
            rating_score_max: 5,
            store_tags: [],
            store_tags_logic: 1,
            store_categories_logic: 1,
            dish_tags: []
        },
        search_id: "",
        need_group_stores: true,
        collection_publish_id: "",
        content_id: "14517",
        source: 2,
        algo_property: "{\"circle_id\":\"63571\",\"display_name\":\"Sekitarmu\",\"city_id\":101380696896948,\"location\":0,\"PageType\":\"foody_home\",\"PageSection\":\"\",\"TargetType\":\"home_circle\"}",
        listing_type: 1,
        from_source: "",
        sub_content_ids: null,
        is_quick_filter_enabled: true,
        quick_filter_ids: ["1", "2", "3", "6"],
        business_type: 1
    };
};

export const getResto = async (tikor) => {
    const api = "https://foody.shopee.co.id/api/buyer/listing-detail";
    const headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; SM-G998B Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.60 Mobile Safari/537.36"
    };

    try {
        const { latitude, longitude } = parseCoordinates(tikor);
        const data = buildRequestData(latitude, longitude);
        
        const response = await axios.post(api, data, { headers });
        return response.data;  // return the spot data directly
    } catch (error) {
        console.error("Error fetching restaurant data:", error.message);
        return {
            error: true,
            message: error.message
        };
    }
};