<script setup>
import { onMounted } from 'vue';
import router from './Routes';

onMounted(() => {
  const auth = localStorage.getItem('isLoggedIn')
  if (!auth) {
    router.push('/login');
  }
});
</script>

<template>
  <RouterView />
</template>