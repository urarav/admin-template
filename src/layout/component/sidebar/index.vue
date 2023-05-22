<template>
  <div>
    <el-scrollbar>
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { routes as accessRoutes } from '@/router'
import variables from '@/styles/exportVariables.module.scss'
import SidebarItem from "@/layout/component/sidebar/sidebarItem.vue";


import type { RouteRecordRaw } from "vue-router";

console.log(variables);
const routes: RouteRecordRaw[] = accessRoutes
</script>

<style scoped></style>
