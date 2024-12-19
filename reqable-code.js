const axios = require('axios');

let data = JSON.stringify({
  "longitude": 106.86567,
  "latitude": -6.327796,
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

let config = {
  method: 'POST',
  url: 'https://foody.shopee.co.id/api/buyer/listing-detail',
  headers: {
    'User-Agent': 'okhttp/3.12.4 app_type=1 platform=native_android os_ver=33 appver=34011',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip',
    'x-sf-trace-id': 'eea982598c6342c4b5402096f056f640',
    'x-sap-type': '2',
    'x-sf-os': '1',
    'x-sf-device-id': '539d8ff9aea49171_unknown',
    'x-sf-app-version-code': '34011',
    'x-sf-bundle-version': '603807',
    'x-sf-publish-context-id': 'dbed703d-5f38-4937-9dd7-aea506ff6e2d',
    'x-sf-request-id': '6430d137bbbf450381abb8370085672d',
    'x-sf-ab-test-info': 'foodsch.rec_dd_index=bucket4,foodsch.rec_flashsale_shuffle=foodsch.rec_flashsale_shuffle.ID.default,foodsch.predictquerycate=group_01,foodsch.backup2=group_03,foodsch.rank_enhancement=group_04,foodsch.query_norm=foodsch.query_norm.ID.default,foodsch.ctr=group_09,foodsch.rec_collection_balanced=base,foodsch.sug_list_expand=foodsch.sug_list_expand.ID.default,foodsch.rec_nearby_index=bucket10,foodsch.cvr=group_09,foodsch.searchads_ranking_live=test5,foodsch.dish_recall_down=group_10,foodsch.searchads_traffic_split_live=test1,foodsch.rec_flashsale_foodhome_rank=bucket3,foodsch.ann_recall=group_08,foodsch.sch_branchname=foodsch.sch_branchname.ID.default,foodsch.rec_collection_v1=B,foodsch.ctr2=group_08,foodsch.rec_nearby_idformula=B,foodsch.rec_flashsale_landing_rank=bucket2,foodsch.searchads_recall_live=test6,foodsch.rec_dd_food_tab_recall=bucket7,foodsch.sug_rank=group_01,foodsch.rec_dd_main_tab_rank=bucket2,foodsch.cvr2=group_06,foodsch.rec_collection_stick=foodsch.rec_collection_stick.ID.default,foodsch.rec_collection_rough=D,foodsch.rec_nearby_tab_rank=C,foodsch.rec_dd_food_tab_rank=bucket4,foodsch.dd_collection_card=foodsch.dd_collection_card.ID.default,foodsch.dd_main_joint_layer=B,foodsch.sugv2=group_07,foodsch.multifactor=group_01,foodsch.rec_dd_main_tab_recall=bucket1,foodsch._nearby_migration=foodsch._nearby_migration.ID.default,foodsch.relevance2=group_04,foodsch.intention=group_03,foodsch.multifactorvn=foodsch.multifactorvn.ID.default,foodsch.ner_intention=group_09,foodsch.searchads_boosting=test2,foodsch.rec_dl_index=bucket3,foodsch.searchads_mixer=test7,foodsch.rec_dd_main_tab_traffic=bucket1,foodsch.sch_unicode=foodsch.sch_unicode.ID.default,foodsch.new_cate_application=group_10,foodsch.multifactor2=group_02,foodsch.similar_shop=new_logic,foodsch.backup=group_09,foodsch.rec_joint_model=foodsch.rec_joint_model.ID.default,foodsch.querytag=foodsch.querytag.ID.default,foodsch.searchads_infuence=test3,foodsch.trending_rank=foodsch.trending_rank.ID.default,foodsch.intention_v2=group_03,foodsch.recall2=group_03,foodsch.rec_collection_ltr=A,foodsch.rec_dl_recall=bucket1,foodsch.rec_flashsale_home_rank_by_region=bucket3,foodsch.scene_influence=test6,foodsch.rec_mixer=foodsch.rec_mixer.ID.default,foodsch.searchads_reranking_live=test4,foodsch.querycate=group_04,foodsch.query_correction_v2=group_04,foodsch.rec_collection_index=bucket1,foodsch.relevance=group_04,foodsch.rec_collection_reduction=bucket6,foodsch.rec_dl_rank=test6,foodsch.isolation_layer=foodsch.isolation_layer.ID.default,foodsch.rec_nearby_i2irecall=foodsch.rec_nearby_i2irecall.ID.default,foodsch.checkout_rcmd=bucket4,foodsch.rec_common_exp=test1,foodsch.recall=group_09,foodsch.stable=foodsch.stable.ID.default,foodsch.rec_nearby_ltr=A,foodsch.topintervention=group_05',
    'x-sf-context-info': 'brand=Xiaomi;model=Mi A1;os=android;wifi=true;user_id=579708245;rn_version=6.38.7;device_id=539d8ff9aea49171_unknown;app_version=34011;os_version=33;country=ID;client_ip=192.168.1.2;platform=android;platform_implementation=rn;app_type=1;publish_context_id=dbed703d-5f38-4937-9dd7-aea506ff6e2d',
    'shopee_http_dns_mode': '1',
    'x-shopee-client-timezone': 'Asia/Jakarta',
    'cache-control': 'no-cache, no-store',
    'client-request-id': '30a1a8f1-e820-42ff-9966-5f38ab790c37.373',
    'content-type': 'application/json;charset=utf-8',
    'af-ac-enc-sz-token': 'Kj9pkOZTUl5x73X7WFEjlw==|bRPjP0lvZAXJsYixoOnkE4BRtkEZxlSvSJtIBeQIKaAtXWOpvqWPaEFcmJGCR1BBq6FwshZuBwbRvr9yhJOjO+XhjRuOwAFelYtcvw==|oZnbntnIbQGRbR4L|08|1',
    '33b07d91': 'DfBdBM8L9wrb4KtiCfellz9MXts=',
    'x-sap-ri': 'd1ab636739802a8097a3bb1b010dcd6e71fa944efa085a2e2b88',
    '62384b96': 'FjXi8cqSb/YEIAacilOR98cc3a4=',
    '4c4326ee': '0ukpougQS2BobnNjwvFrdbSVyBB=',
    '1f5ec646': 'XswK8eiJjdSUtQH1ksTkGgznq6u58ALJbri2w8z9UOwObmdqMvdOR/nx7UtLrZuD7IQ6WjPgXsR+1pO8c1Ri1pWaL644COZaZcu2RQonrRLUKNDvqa+qXaa8kN4i4AWj3dl3/UkFjsRomhuDREUH1wDoyg40qxK9qRiRuK3DRYne/yRIOCosLV41GQk4X0ca77uQ9gXbKViBUz7d6Uau6wPAYUwfnP9USoD6yMlC7S7e9JZ5IoahlZWs+xnHROTmUE837gRK67msD7esYdVtJQbkODGUCEyy58/2650ArXoOroaW2hmJd8VRHilpYed9i5Goa6tKFaswQI+mWJmrFHQ65dRbBCSSCmcJ2QZNTX6qJ1WRrZ1ptEhIYSm5Y8diTr83ixeZlh6h3WiMROpDMkjSfZpAe7/Fk0a7mppCSr8/OBy2NFrcH4IEADEkmEdYhd/Ybbo3A5YNUirsJIzpCZZpj+/qgTFtCzms+xfksNjkUowzlW1SpYKwOOan5coPkyvchCEP1DIxwpijCRgri0jNCUAAS4Cd7ZNk5xnf5fLkqP0TbsudE4JXIXqxfGzncJRI6EMcmj20qRQ2L9ZRwry9XUCAObnQ6w3zS+0KS53Wxa8/2cVNWt/nRE5xOkYsS/+GnuvejkSQBPAxeJIqnKSdVNrpt2NHQNhcN/9/o4lApfkqByX+qkv4lsq8DUuWctnlAiKwCiovdqXcmS5XMbMUSIH9BGkKpWlJMUJYLg9RXPAxoGX9ZCQczqpoN8R+KY4BihrKJjQYJ5DM9jz92F+MciEOzjdV0fcEgxIwczICrYbIniVfo0WwDhkBl4AxZ9E/5dy61C8wlFQ4902nJo0NvpOMMul1zgJ8X3gvKTF2fhSVRq/O2ueP8l3pou7VAgMS417j/RnqZUt1vuhgj0Yi1YbO7vHtRJaXe7vyshUqBFeZOW2dmq1Pbm/4btTJzvCqxD5S2pSR8K5wbuRhxwpKR5Nag8budLzIftDMCPzJPRKgUOW80ukW7+sKMzSUKKrDIj==',
    'Cookie': 'UA=Shopee%20Android%20Beeshop%20locale%2Fid%20version%3D34011%20appver%3D34011; language=id; shopee_app_version=34011; SPC_SI=7zxhZwAAAABpbmJYZHBZNIBLGgAAAAAAejRQWXV1bWI=; REC_T_ID=56ebd077-bdc7-11ef-8fc7-3ac15f314c0e; SPC_CLIENTID=HgfSNAMWqy0q1kgyxzxwvdfopcnkzklg; SPC_F=539d8ff9aea49171_unknown; SPC_AFTID=c8faaac0-2941-48f6-9b2f-04be7008bba0; userid=579708245; shopid=579688660; username=spyroot21; shopee_token=ECh2FxNZl9o3cYY2mViLbenjtZuykh6acrfQCqi6M65YmoXIaoeuCE1xBRdWP6hwoPMetvOSWvauebbQjK3ps6NcSA==; SPC_U=579708245; SPC_R_T_ID=GZ4lmcuj1wTTnD1nQFA9CWAFxikJPo5mYG5xj/BJ6wN4bl+QQ+U8LJiRhEhk1fLd/K45tRCooBzL7H4YOR1adl5/WC4Mq6/knUeDMCY1dq0JK1s86a5pbnT4usyTaDUZU8RNAzfzgm+Jm7N5wOBhewy537Gh2BvH09JVPiP3KyM=; SPC_R_T_IV=UGpuMUoyajVVeE5FeUF3eQ==; SPC_T_ID=GZ4lmcuj1wTTnD1nQFA9CWAFxikJPo5mYG5xj/BJ6wN4bl+QQ+U8LJiRhEhk1fLd/K45tRCooBzL7H4YOR1adl5/WC4Mq6/knUeDMCY1dq0JK1s86a5pbnT4usyTaDUZU8RNAzfzgm+Jm7N5wOBhewy537Gh2BvH09JVPiP3KyM=; SPC_T_IV=UGpuMUoyajVVeE5FeUF3eQ==; SPC_B_SI=czRhZwAAAAAwQm9pOTlwSW2WGgAAAAAATmI4YmZjYlE=; shopee_rn_version=1734506195; shopee_rn_bundle_version=6038007; csrftoken=DX6oVzKFJXYwXKubr4aQrfKicrBCJ2ov; SPC_DH=ED6ycu2ZRL9gYT8MmY3RnJ2YIlSJNCnykW2oTKZeyu4XLGzH9V2LJuWuRJiZK1oUGDQEj+dPUX4q; biz_trace_id=; SPC_EC=.WEtkSzFxWWt4anFqS0lQNCT0057pGfblYKG2J6LoDXLx0Rx/5ugVufCscqgKunV7eDXSZD2ETJ1XKUTX60oRoiGB8p8HAjBJBgmUGG2kVxyGMxEzjVmcQPNaYigH82FWXSJgwYzdFxYkIZNVqtWOPJPCDobtGubhdMXnol9A+WDDeU9AAY0WO8v7haLopygh0p/4oeA2V98lOTWA3aic7X5OrPe+HRHfgpeSi5BvVMjHcd7ir7ZIR5+0gj0XzkBL; SPC_ST=.WEtkSzFxWWt4anFqS0lQNCT0057pGfblYKG2J6LoDXLx0Rx/5ugVufCscqgKunV7eDXSZD2ETJ1XKUTX60oRoiGB8p8HAjBJBgmUGG2kVxyGMxEzjVmcQPNaYigH82FWXSJgwYzdFxYkIZNVqtWOPJPCDobtGubhdMXnol9A+WDDeU9AAY0WO8v7haLopygh0p/4oeA2V98lOTWA3aic7X5OrPe+HRHfgpeSi5BvVMjHcd7ir7ZIR5+0gj0XzkBL'
  },
  data: data
};

axios.request(config)
  .then(response => console.log(response))
  .catch(error => console.log('error', error));