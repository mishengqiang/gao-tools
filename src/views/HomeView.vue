<script setup lang="ts">
const route = useRoute();
ElMessage.info('Welcome to Your Vue.js + TypeScript App');
const count = ref(0);
console.log(route, count);
if (count.value == 1) {
  console.log('123');
} else {
  console.log('456');
}
const items = [1, 2, 3, 4, 5];
</script>

<template>
  <main>
    <u>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </u>
  </main>
</template>
