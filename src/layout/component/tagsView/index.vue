<template>
  <div class="tagsView">TagsView</div>
</template>

<script setup lang="ts">
const initTags = () => {}
onMounted(initTags)
</script>

<style scoped lang="scss">
.tagsView {
  height: 34px;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
