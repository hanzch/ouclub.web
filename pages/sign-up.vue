<template>
  <div></div>
</template>

<script setup>
// 立即跳转到外部登录系统
if (process.client) {
  window.location.href = 'https://login.outennis.club/sign-up'
}
</script>