<template>
  <div class="home">
    <ControlPanel>
      <template #content>
        <clickBottom />
      </template>
    </ControlPanel>
    <MouthThrough />
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.home{
  width: 100vw;
  height: 100vh;
  // background-color: aqua;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
