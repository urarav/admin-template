<template>
  <div class="right-panel" :class="{ 'is-show': show }">
    <section class="right-panel__background"></section>
    <section class="right-panel__body">
      <svg-icon
        @click="show = !show"
        class="right-panel__body-btn"
        :style="{ top: `${buttonTop ?? 250}px` }"
      >
        <i-ep-close v-show="show" />
        <i-ep-setting v-show="!show" />
      </svg-icon>
      <slot>
        <el-empty />
      </slot>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCurrentInstance } from '@/hooks/useCurrentInstance'

const props = defineProps<{
  clickNotClose?: boolean
  buttonTop?: number
}>()
const show = ref(false)
watch(show, (val) => {
  if (val && !props.clickNotClose) {
    document.addEventListener('click', closeRightPanel)
  }
})
const closeRightPanel = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const parent = target.closest('.right-panel__body') || target.closest('.theme-picker-dropdown')
  if (!parent) {
    show.value = false
    document.removeEventListener('click', closeRightPanel)
  }
}
const { vc } = useCurrentInstance()
onMounted(() => void document.body.firstChild.before(vc?.$el))
onUnmounted(() => void vc?.$el.remove())
</script>

<style scoped lang="scss">
.right-panel {
  &__background {
    position: fixed;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }

  &__body {
    height: 100vh;
    width: 260px;
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    transform: translate(100%);
    transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
    z-index: 1000;

    &-btn {
      position: absolute;
      left: -48px;
      width: 48px;
      height: 48px;
      border-radius: 6px 0 0 6px;
      cursor: pointer;
      color: #fff;
      font-size: 24px;
      background: #30b08f;
      text-align: center;
    }
  }

  &.is-show {
    .right-panel__body {
      transform: translate(0);
    }

    .right-panel__background {
      z-index: 999;
      inset: 0;
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
