<template>
  <template v-if="!item.hidden">
    <template v-if="isMenuItem">
      <template v-if="onlyOneChild && onlyOneChild.meta">
        <navigate-link :to="methods.resolvePath(onlyOneChild.path)">
          <el-menu-item :index="methods.resolvePath(onlyOneChild.path)">
            <svg-icon :icon-class="onlyOneChild.meta.icon" />
            <template #title>
              <span>{{ onlyOneChild.meta.title }}</span>
            </template>
          </el-menu-item>
        </navigate-link>
      </template>
    </template>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <svg-icon :icon-class="item.meta?.icon"></svg-icon>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>

      <sidebar-item
        :item="it"
        v-for="it in item.children"
        :key="it.path"
        :base-path="methods.resolvePath(it.path)"
      />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { resolve } from 'path-browserify'
import type { RouteRecordRaw } from 'vue-router'
import { isExternal } from '@/utils/validate'

const props = defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

const onlyOneChild = ref<RouteRecordRaw>()

const isMenuItem = computed(
  () =>
    methods.hasOnlyOneChild(props.item.children ?? [], props.item) &&
    !props.item.alwaysShow &&
    (onlyOneChild.value?.noDisplayChildren || !onlyOneChild.value?.children)
)

const methods = {
  hasOnlyOneChild(children: RouteRecordRaw[], parent: RouteRecordRaw): boolean {
    const displayChildren = children.filter((it) => !it.hidden)
    const conditionalLength = displayChildren.length

    switch (conditionalLength) {
      case 0:
        onlyOneChild.value = { ...parent, path: '', noDisplayChildren: true } as RouteRecordRaw
        return true
      case 1:
        onlyOneChild.value = displayChildren[0]
        return true
      default:
        return false
    }
  },

  resolvePath(path: string): string {
    const { basePath } = props
    if (isExternal(path)) return path
    if (isExternal(basePath)) return basePath
    return resolve(basePath, path)
  }
}
</script>
