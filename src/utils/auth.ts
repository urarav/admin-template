import router from "@/router";
import { getToken } from "@/utils/cookie";

const whiteList: string[] = Array.of('/login')

router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === './login') {
            next('/')
        } else {
            console.log(1)
        }
    } else {
        if (whiteList.includes(to.path)) next()
        else next(`/login?redirect=${to.path}`)
    }
})
