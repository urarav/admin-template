<template>
  <div class="layout">
    <sidebar :class="{ 'is-collapse': isCollapse }" class="layout-sidebar" />
    <section class="layout-main">
      <navbar class="layout-main__navbar" />
      <tags-view />
      <app-content class="layout-main__content" />
    </section>
  </div>
</template>

<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

const isCollapse = computed(() => !useAppStore().sidebar.opened)
</script>
