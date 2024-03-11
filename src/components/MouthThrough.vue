<template>
  <div class="mouththrough" ref="MouthThrough"></div>
</template>

<script setup name="MouthThrough">
import { onMounted, ref } from 'vue';
const MouthThrough = ref();
onMounted(() => {
  MouthThrough.value.addEventListener('mouseenter', () => {
    window.electronAPI.MouthThrough('mouseenter');
  });
  MouthThrough.value.addEventListener('mouseleave', () => {
    window.electronAPI.MouthThrough('mouseleave');
  });
});
</script>

<style lang="less" scoped>
.mouththrough{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
