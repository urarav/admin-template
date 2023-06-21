<template>
  <ul role="list" class="grid">
    <li v-for="(item, index) in iconList" :key="index" class="grid-item">
      <svg-icon :icon-class="item" />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { objectIsNotEmpty } from "@/utils";

const iconList = ref<string[]>([])
const iconModules = import.meta.glob('@/assets/icons/svg/*.svg')
objectIsNotEmpty(iconModules) && (iconList.value = Object.keys(iconModules).map((path: string) => path.match(/\/([\w-]*)\.svg/)?.at(1)!))
</script>

<style scoped lang="scss">
.grid {
  margin-top: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 100px;
  justify-items: center;
  align-items: center;
  color: #606266;

  &-item {
    cursor: pointer;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: all ease .25s;

    > .el-icon {
      transform-style: preserve-3d;
      transition: all ease 1s;
    }

    &:hover {
      color: #409EFF;

      & > .el-icon {
        transform: rotateY(1turn);
      }
    }
  }
}
</style>
