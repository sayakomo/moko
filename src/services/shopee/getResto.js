import axios from 'axios';

export const getResto = async (tikor) => {
    const [latitude, longitude] = tikor.split(',').map(coord => parseFloat(coord.trim()));

    try {
        const url = "https://foody.shopee.co.id/api/buyer/listing-detail";
        const headers = {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Linux; Android 11; Mi A1 Build/TQ3A.230705.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36"
        };

        const data = JSON.stringify({
            "longitude": longitude,
            "latitude": latitude,
            "page_num": 1,
            "page_size": 20,
            "filter": {
              "partner_types": [
                2
              ],
              "rating_score_min": 0,
              "rating_score_max": 5,
              "store_tags": [],
              "store_tags_logic": 1,
              "store_categories_logic": 1,
              "dish_tags": [],
              "is_pickup_supported": 0
            },
            "need_group_stores": true,
            "collection_publish_id": "",
            "content_id": "83785",
            "source": 2,
            "algo_property": "{\"circle_id\":\"90116\",\"display_name\":\"Sekitarmu\",\"city_id\":101380696896948,\"location\":0,\"PageType\":\"foody_home\",\"PageSection\":\"\",\"TargetType\":\"home_circle\"}",
            "listing_type": 1,
            "from_source": "",
            "sub_content_ids": null,
            "is_quick_filter_enabled": true,
            "quick_filter_ids": [
              "16",
              "12",
              "15",
              "11",
              "19"
            ],
            "is_first_entry": true,
            "business_type": 1
        });
        const response = await axios.post(url, data, { headers });
        const resto = response.data;
        return resto;
    } catch (error) {
        console.error(error);
        throw error;
    }
};