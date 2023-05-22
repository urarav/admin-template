import type { TPermissionState } from "#/store/permission";
import constantRoutes from "@/router/constantRoutes";

const usePermissionStore = defineStore('permission', {
    state: (): TPermissionState => ({
        constantRoutes,
        asyncRoutes: [],
        accessRoutes: [],
        routes: []
    }),
    actions() {

    }
})

export default usePermissionStore
