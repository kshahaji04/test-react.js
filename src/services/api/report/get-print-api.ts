
import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

export const PRCategorySummaryPrintApi = async (request: any, params: any) => {
    let response: any;
    const config = {
        headers: {
            Authorization: request.token,
        },
    };

    const urlParams: any = [];

    Object?.keys(params).forEach((key: any) => {
        urlParams.push(`${key}=${params[key]}`);
    });

    let url: any = "/api/method/challan.sdk.api?version=v1&method=get_pr_category_summary_report_print&entity=print_report_category_summary&"

    if (urlParams.length > 0) {
        url += `${urlParams.join('&')}`;
    }

    await axios
        .get(`${BASE_URL}${url}`, config)
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
        });
    return response;
};


export const PRCategoryPartywisePrintApi = async (request: any, params: any) => {
    let response: any;
    const config = {
        headers: {
            Authorization: request.token,
        },
    };
    const urlParams: any = [];

    Object?.keys(params).forEach((key: any) => {
        urlParams.push(`${key}=${params[key]}`);
    });

    let url: any = "/api/method/challan.sdk.api?version=v1&method=get_pr_category_partywise_report_print&entity=report_print_category_wise&"

    if (urlParams.length > 0) {
        url += `${urlParams.join('&')}`;
    }

    await axios
        .get(`${BASE_URL}${url}`, config)
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
        });
    return response;
};

export const PRSubcategoryPrintApi = async (request: any, params: any) => {
    let response: any;
    const config = {
        headers: {
            Authorization: request.token,
        },
    };

    const urlParams: any = [];

    Object?.keys(params).forEach((key: any) => {
        urlParams.push(`${key}=${params[key]}`);
    });

    let url: any = "/api/method/challan.sdk.api?version=v1&method=get_pr_subcategory_report_print&entity=report_print&"

    if (urlParams.length > 0) {
        url += `${urlParams.join('&')}`;
    }

    await axios
        .get(`${BASE_URL}${url}`, config)
        .then((res: any) => {
            response = res;
        })
        .catch((err: any) => {
        });
    return response;
};
