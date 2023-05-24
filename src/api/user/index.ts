import network from '@/network'

export function login<T>(data: any) {
    return network.post<T>('api/user/login', data)
}
