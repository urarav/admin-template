import type { RouteRecordRaw } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'

const usePermissionStore = defineStore('permission', {
  state: (): { routes: RouteRecordRaw[] } => {
    return {
      routes: []
    }
  },
  actions: {
    hasPermission(route: RouteRecordRaw, roles: string[]) {
      const hasRoles = route.meta?.roles
      if (hasRoles) {
        return roles.some((role) => hasRoles.includes(role))
      } else {
        return true
      }
    },
    filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
      const accessRoutes: RouteRecordRaw[] = []
      asyncRoutes.forEach((route) => {
        const copy = { ...route }
        if (this.hasPermission(route, roles)) {
          if (copy.children?.length) {
            copy.children = this.filterAsyncRoutes(copy.children, roles)
          }
          accessRoutes.push(copy)
        }
      })
      return accessRoutes
    },
    generateRoutes(roles: string[]): RouteRecordRaw[] {
      let accessRoutes
      if (roles.includes('admin')) {
        accessRoutes = asyncRoutes ?? []
      } else {
        accessRoutes = this.filterAsyncRoutes(asyncRoutes, roles)
      }
      this.routes = constantRoutes.concat(accessRoutes)
      return accessRoutes
    }
  },
  getters: {
    routeList: (state) => state.routes
  }
})

export default usePermissionStore
