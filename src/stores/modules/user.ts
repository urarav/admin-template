import type { IUserState } from "#/store/user";
import { getToken, setToken } from "@/utils/cookie";
import { getUserInfo } from "@/api/user";

const useUserStore = defineStore('user', {
    state: (): IUserState => {
        return {
            token: getToken(),
            name: null,
            avatar: null,
            roles: []
        }
    },
    actions: {
        setToken(token: string): void {
            setToken(token)
            this.token = token
        },
        async getUserInfo(): Promise<string[]> {
            const { data, statusCode } = await getUserInfo<IUserState>()
            if (statusCode === 200 && data) {
                const { name, avatar, roles } = data
                if (Array.isArray(roles) && roles.length) {
                    this.$patch({
                        name,
                        avatar,
                        roles
                    })
                    return roles
                } else {
                    throw new Error('roles must be a non-null array.')
                }
            } else {
                throw new Error('request error occurred in api:getUserInfo.')
            }
        }

    }
})

export default useUserStore
