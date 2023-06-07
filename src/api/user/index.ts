import network from '@/network'

export function login<T>(data: any) {
    return network.post<T>('auth/login', data)
}

export function getUserInfo<T>() {
    return network.get<T>('user/profile')
}
