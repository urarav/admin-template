import 'vue-router'

declare module 'vue-router' {
  interface _RouteRecordBase {
    alwaysShow?: boolean
    hidden?: boolean
    noDisplayChildren?: boolean
    meta?: RouteMeta
  }

  interface RouteMeta {
    roles?: string[]
    title?: string
    icon?: string
    noCache?: boolean
    affix?: boolean
    breadcrumb?: boolean
    activeMenu?: string
  }
}
