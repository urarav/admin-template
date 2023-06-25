import router from "@/router";
import { getToken } from "@/utils/cookie";
import useUserStore from "@/stores/modules/user";
import usePermissionStore from "@/stores/modules/permission";

const whiteList: string[] = Array.of('/login')
router.beforeEach(async (to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            next('/')
        } else {
            const { roles, getUserInfo } = useUserStore()
            const hasRoles = Array.isArray(roles) && roles.length
            if (hasRoles) {
                next()
            } else {
                try {
                    const roles = await getUserInfo()
                    const accessRoutes = usePermissionStore().generateRoutes(roles)
                    accessRoutes.forEach(route => router.addRoute(route))
                    next({ ...to, replace: true })
                } catch (e) {
                    console.warn(e)
                }
            }
        }
    } else {
        if (whiteList.includes(to.path)) next()
        else next(`/login?redirect=${ to.path }`)
    }
})
