<template>
  <div class="noSupport">
    <div><h2>请在手机浏览器中打开</h2></div>
    <div><h2>PC端请按F12，接着按下Ctrl+shift+M</h2></div>
  </div>
</template>
<script>
export default {
  name:'noSupport'
}
</script>
<style scoped>
.noSupport{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
