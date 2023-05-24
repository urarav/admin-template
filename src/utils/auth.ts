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
                    usePermissionStore().generateRoutes(roles)
                    next()
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
