<template>
  <div>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
    >
      <sidebar-item v-for="route in permissionRoutes" :key="route.path" :item="route"/>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import usePermissionStore from "@/stores/modules/permission";
import SidebarItem from "@/layout/component/sidebar/sidebarItem.vue";

import type { RouteRecordRaw } from "vue-router";

const permissionStore = usePermissionStore()
const permissionRoutes = computed<RouteRecordRaw[]>(() => permissionStore.constantRoutes)
</script>

<style scoped>

</style>
