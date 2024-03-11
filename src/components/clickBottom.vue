<template>
  
  <el-radio value="1" size="large">Option 1</el-radio>
  <template v-for="item in result">
    <el-button @click="selectHeroHandle(item)" class="btn">{{
      item.key
    }}</el-button>
  </template>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { readFileHandle, simulatedClick } from '../utils/index';
const result = ref();

const selectHeroHandle = (item: any) => {
  simulatedClick(item.value);
};
onMounted(async () => {
  result.value = await readFileHandle();
});
</script>
<style lang="less" scoped>
.btn {
  margin: 10px;
}
</style>
