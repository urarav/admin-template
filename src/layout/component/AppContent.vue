<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
