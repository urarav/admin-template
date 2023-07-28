<template>
  <el-color-picker
    v-model="theme"
    :predefine="[
      '#409EFF',
      '#1890ff',
      '#304156',
      '#212121',
      '#11a983',
      '#13c2c2',
      '#6959CD',
      '#f5222d'
    ]"
    popper-class="theme-picker-dropdown"
    @change="onThemeChange"
  />
</template>

<script setup lang="ts">
const theme = ref('#409EFF')
const onClick = () => {
  console.log(1)
}
</script>

<style scoped></style>
