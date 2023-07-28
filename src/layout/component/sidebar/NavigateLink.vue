<template>
  <component :is="tagName" v-bind="linkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { isExternal } from '@/utils/validate'

const props = defineProps<{ to: string }>()

const isExternalLink = computed(() => isExternal(props.to))
const tagName = computed(() => (isExternalLink.value ? 'a' : 'router-link'))
const linkProps = computed(() =>
  isExternalLink.value
    ? {
        href: props.to,
        target: '_blank',
        rel: 'noopener',
        class: 'navigate-link'
      }
    : { to: props.to, class: 'navigate-link' }
)
</script>
