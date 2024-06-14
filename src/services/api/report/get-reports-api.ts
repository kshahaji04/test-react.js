import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';



export const PRCategoryPartywiseReportApi = async (get_access_token: any, params: any) => {
    let response: any;
    const getHeaders = headerGenerator(get_access_token);

    const urlParams: any = [];

    Object?.keys(params).forEach((key: any) => {
        urlParams.push(`${key}=${params[key]}`);
    });

    // Construct the URL based on the URL parameters
    let url: any =
        '/api/method/challan.sdk.api?version=v1&method=get_pr_category_partywise_report&entity=category_partywise&';
    if (urlParams.length > 0) {
        url += `${urlParams.join('&')}`;
    }

    await axios
        .get(`${BASE_URL}${url}`, getHeaders)
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
            if (err.code === 'ECONNABORTED') {
                response = 'Request timed out';
            } else if (err.code === 'ERR_BAD_REQUEST') {
                response = 'Bad Request';
            } else if (err.code === 'ERR_INVALID_URL') {
                response = 'Invalid URL';
            } else {
                response = err;
            }
        });

    return response;
};

export const PRCategorySummaryReportApi = async (get_access_token: any, params: any) => {
    let response: any;
    const getHeaders = headerGenerator(get_access_token);

    const urlParams: any = [];

    Object?.keys(params).forEach((key: any) => {
        urlParams.push(`${key}=${params[key]}`);
    });

    // Construct the URL based on the URL parameters
    let url: any =
        '/api/method/challan.sdk.api?version=v1&method=get_pr_category_summary_report&entity=category_summary&';
    if (urlParams.length > 0) {
        url += `${urlParams.join('&')}`;
    }

    await axios
        .get(`${BASE_URL}${url}`, getHeaders)
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
            if (err.code === 'ECONNABORTED') {
                response = 'Request timed out';
            } else if (err.code === 'ERR_BAD_REQUEST') {
                response = 'Bad Request';
            } else if (err.code === 'ERR_INVALID_URL') {
                response = 'Invalid URL';
            } else {
                response = err;
            }
        });

    return response;
};

export const PRSubcategoryReportApi = async (get_access_token: any, params: any) => {
    let response: any;
    const getHeaders = headerGenerator(get_access_token);

    const urlParams: any = [];

    Object?.keys(params).forEach((key: any) => {
        urlParams.push(`${key}=${params[key]}`);
    });

    // Construct the URL based on the URL parameters
    let url: any =
        '/api/method/challan.sdk.api?version=v1&method=get_pr_subcategory_report&entity=subcategory_report&';
    if (urlParams.length > 0) {
        url += `${urlParams.join('&')}`;
    }

    await axios
        .get(`${BASE_URL}${url}`, getHeaders)
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
            if (err.code === 'ECONNABORTED') {
                response = 'Request timed out';
            } else if (err.code === 'ERR_BAD_REQUEST') {
                response = 'Bad Request';
            } else if (err.code === 'ERR_INVALID_URL') {
                response = 'Invalid URL';
            } else {
                response = err;
            }
        });

    return response;
};

