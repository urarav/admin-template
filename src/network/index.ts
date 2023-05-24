import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'
import { ElMessage, ElMessageBox } from "element-plus";
import type { ResponseResult } from "#/network";

export class Request {
    private instance: AxiosInstance;
    private baseConfig: CreateAxiosDefaults = {
        baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
        timeout: 3000
    };

    constructor() {
        this.instance = axios.create(this.baseConfig)
        this.useRequestInterceptor()
        this.useResponseInterceptor()
    }

    private useRequestInterceptor(): void {
        this.instance.interceptors.request.use()
    }

    private useResponseInterceptor(): void {
        this.instance.interceptors.response.use(
            async (response: AxiosResponse<ResponseResult>): Promise<ResponseResult> => {
                const { data: { code, message } } = response
                if (code !== 200) {
                    ElMessage({
                        message: message ?? 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    if (code === 401) {
                        await ElMessageBox.confirm('您已注销，您可以选择取消继续留在此页面或者重新登录', '退出登录确认', {
                            confirmButtonText: '重新登录',
                            cancelButtonText: '取消',
                            type: 'warning'
                        })
                        // TODO
                    }
                    return Promise.resolve(response.data)
                } else {
                    return Promise.resolve(response.data)
                }
            },
            (error: AxiosError) => {
                ElMessage({
                    message: error.message,
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject(error)
            }
        )
    }

    private request<T = any>(config: AxiosRequestConfig): Promise<ResponseResult<T>> {
        return this.instance.request<any, ResponseResult<T>>(config)
    }

    private get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ResponseResult<T>> {
        return this.instance.get<any, ResponseResult<T>>(url, config)
    }

    private post<T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<ResponseResult<T>> {
        return this.instance.post<any, ResponseResult<T>>(url, data, config)
    }

}

export default new Request()
