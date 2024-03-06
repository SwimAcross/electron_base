<template>
  <el-button type="primary" @click="runNodeHandle">执行</el-button>
</template>
<script lang="ts" setup>
const runNodeHandle = () => {
  console.log(123);
};
// 监听键盘回车事件
</script>
<style lang="less" scoped></style>
