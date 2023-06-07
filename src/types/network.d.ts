import type {
    AxiosInterceptorOptions,
} from "axios";

export interface ResponseResult<T = any> {
    data: T,
    statusCode: number
    message: string,
    success: boolean,
}


declare module 'axios' {
    interface AxiosInterceptorManager<V> {
        use(onFulfilled?: ((value: V) => ResponseResult | Promise<ResponseResult>) | null, onRejected?: ((error: any) => any) | null, options?: AxiosInterceptorOptions): number;
    }
}
