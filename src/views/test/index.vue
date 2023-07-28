<template>
  <div class="card-flip">
    <div class="back"></div>
    <div class="front"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-flip {
  height: 200px;
  width: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 1s;
}

.front,
.back {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}

.front {
  background: lightgreen;
}

.back {
  background: lightblue;
}

.back {
  transform: rotateY(180deg);
}

.card-flip:hover {
  transform: rotateY(180deg);
}
</style>
