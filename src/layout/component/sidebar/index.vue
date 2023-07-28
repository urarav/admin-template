<template>
  <div>
    <el-scrollbar>
      <el-menu
        :background-color="globalVariables.menuBg"
        :text-color="globalVariables.menuText"
        :active-text-color="globalVariables.menuActiveText"
        :collapse="!sidebar.opened"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import useAppStore from '@/stores/modules/app'
import variables from '@/styles/exportVariables.module.scss'
import SidebarItem from '@/layout/component/sidebar/sidebarItem.vue'

import type { RouteRecordRaw } from 'vue-router'
import usePermissionStore from '@/stores/modules/permission'

const routes: RouteRecordRaw[] = usePermissionStore().routes

const globalVariables = computed<any>(() => variables)
const { sidebar } = useAppStore()
</script>

<style scoped></style>
