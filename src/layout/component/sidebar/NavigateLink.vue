<template>
  <component :is="tagName" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate";

const props = defineProps<{ to: string }>()

const isExternalLink = computed(() => isExternal(props.to))
const tagName = computed(() => isExternalLink.value ? 'a' : 'router-link')
// v-bind=object
const linkProps = () => isExternalLink.value ? {
  href: props.to,
  target: '_blank',
  rel: 'noopener'
} : { to: props.to }
</script>