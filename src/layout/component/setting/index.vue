<template>
  <div class="drawer">
    <h3 class="drawer-title">Page style setting</h3>
    <ul role="list" class="drawer-list">
      <li class="drawer-list__item">
        <span>Theme Color</span>
        <theme-picker @click="onClick" />
      </li>
      <li class="drawer-list__item">
        <span>Open Tags-View</span>
        <el-switch v-model="tagsView" class="drawer-list__item-switch" />
      </li>
      <li class="drawer-list__item">
        <span>Fixed Header</span>
        <el-switch v-model="fixedHeader" class="drawer-list__item-switch" />
      </li>
      <li class="drawer-list__item">
        <span>Sidebar Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-list__item-switch" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from "@/stores/modules/settings";

const onClick = () => {
  console.log(1)
}
const settingStore = useSettingStore()
const tagsView = computed({
  get() {
    return settingStore.tagsView
  },
  set(val) {
    settingStore.changeSetting('tagsView', val)
  }
})
const fixedHeader = computed({
  get() {
    return settingStore.fixedHeader
  },
  set(val) {
    settingStore.changeSetting('fixedHeader', val)
  }
})
const sidebarLogo = computed({
  get() {
    return settingStore.sidebarLogo
  },
  set(val) {
    settingStore.changeSetting('sidebarLogo', val)
  }
})
</script>

<style scoped lang="scss">
.drawer {
  padding: 24px;
  font-size: 14px;

  &-title {
    margin-bottom: 24px;
  }

  &-list {
    margin: 0;
    padding: 0;

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;

      .el-switch {
        height: auto;
      }
    }
  }
}
</style>
