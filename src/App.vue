<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import TheLayout from './views/Layout/TheLayout.vue';
</script>

<template>
  <el-config-provider :locale="zhCn">
    <the-layout />
  </el-config-provider>
</template>
