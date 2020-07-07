import Axios, { AxiosInstance, Method, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
    private readonly baseUrl: string;
    private instance: AxiosInstance;

    constructor() {
        this.baseUrl = '';
        this.instance = Axios.create();
    }

    public request(
        method: Method,
        url: string,
        data: any = {},
        additionalConfig: Partial<AxiosRequestConfig> = {},
    ): Promise<AxiosResponse<any>> {
        const config: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            url: url,
            method: method,
            data: data,
            ...additionalConfig,
        };

        return this.instance.request(config);
    }
}

export default HttpClient;