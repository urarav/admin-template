<template>
  <div v-if="!item.hidden">
    <template v-if="isMenuItem">
      <template v-if="onlyOneChild && onlyOneChild.meta">
        <navigate-link :to="methods.resolvePath(onlyOneChild.path)">
          <el-menu-item :index="methods.resolvePath(onlyOneChild.path)">
            <el-icon>
              <i-ep-setting />
            </el-icon>
            <span>{{ onlyOneChild.meta?.title }}</span>
          </el-menu-item>
        </navigate-link>
      </template>
    </template>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon>
          <i-ep-location />
        </el-icon>
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>

      <sidebar-item
        :item="it"
        v-for="it in item.children"
        :key="it.path"
        :base-path="methods.resolvePath(it.path)"
      />
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import { resolve } from 'path-browserify'
import type { RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  item: RouteRecordRaw
  basePath: string
}>()

const onlyOneChild = ref<RouteRecordRaw | null>(null)

const isMenuItem = computed(
  () =>
    methods.hasOnlyOneChild(props.item.children, props.item) &&
    !props.item.alwaysShow &&
    onlyOneChild.value &&
    (onlyOneChild.value.noDisplayChildren || !onlyOneChild.value.children)
)

const methods = {
  hasOnlyOneChild(children: RouteRecordRaw[] | undefined = [], parent: RouteRecordRaw): boolean {
    const displayChildren = children.filter((it) => !it.hidden)
    const conditionalLength = displayChildren.length

    switch (conditionalLength) {
      case 0:
        onlyOneChild.value = { ...parent, path: '', noDisplayChildren: true }
        return true
      case 1:
        onlyOneChild.value = displayChildren.at(0)!
        return true
      default:
        return false
    }
  },

  resolvePath(path: string): string {
    return resolve(props.basePath, path)
  }
}
</script>