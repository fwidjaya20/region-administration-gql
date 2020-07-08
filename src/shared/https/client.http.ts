import Axios, { AxiosInstance, Method, AxiosRequestConfig, AxiosResponse } from "axios";
import {injectable} from "inversify";

@injectable()
class HttpClient {
    private readonly baseUrl: string;
    private instance: AxiosInstance;

    constructor() {
        this.baseUrl = 'http://localhost:8001';
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