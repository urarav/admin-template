<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in routeMatchedList" :key="index" :to="item.path">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from 'vue-router'

interface IMatchedItem {
  title?: string
  path: string
}

const currentRoute = useRoute()
const routeMatchedList = ref<IMatchedItem[]>()
const isDashboard = ({ title }: IMatchedItem) => {
  return (title as string).toLowerCase() === 'Dashboard'.toLowerCase()
}

const generateBreadcrumb = (route: RouteLocationNormalizedLoaded) => {
  return route.matched
    .filter(({ meta }) => meta?.title && meta?.breadcrumb !== false)
    .map(({ meta, path }) => ({ title: meta.title, path }))
}

watch(
  currentRoute,
  (route) => {
    if (route.path.startsWith('/redirect/')) return
    const matched = generateBreadcrumb(route)
    const [firstEle] = matched
    !isDashboard(firstEle) && matched.unshift({ path: '/dashboard', title: 'Dashboard' })
    routeMatchedList.value = matched
  },
  { immediate: true }
)
</script>
