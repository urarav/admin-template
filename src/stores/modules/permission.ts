import type { RouteRecordRaw } from "vue-router";
import type { IPermissionState } from "#/store/permission";

const usePermissionStore = defineStore('permission', {
    state: (): IPermissionState => {
        return {
            routes: []
        }
    },
    actions: {
        generateRoutes(roles: string[]): RouteRecordRaw[] {
            console.log(roles)
            return []
        }
    }
})

export default usePermissionStore