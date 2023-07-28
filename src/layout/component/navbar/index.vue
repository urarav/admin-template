<template>
  <div class="navbar">
    <el-icon class="navbar-hamburger" @click="toggleSidebar">
      <i-ep-fold v-show="sidebar.opened" />
      <i-ep-expand v-show="!sidebar.opened" />
    </el-icon>
    <breadcrumb />
  </div>
</template>

<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

const { toggleSidebar, sidebar } = useAppStore()
</script>

<style scoped lang="scss">
.navbar {
  &-hamburger {
    cursor: pointer;
    font-size: 1.5em;
  }
}
</style>
