import type { RouteRecordRaw } from 'vue-router'

type TPermissionState = Record<
  'constantRoutes' | 'asyncRoutes' | 'accessRoutes',
  'routes',
  RouteRecordRaw[]
>

export type { TPermissionState }
