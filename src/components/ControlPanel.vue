<template>
  <div class="control_panel animate__animated animate__fadeOutLeft">
    <div class="control_panel-header"></div>
    <div class="control_panel-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.control_panel{ 
  width: 575px;
  height: 80%;
  background: rgba(0,21,35,0.5);
  border-radius: 0px 6px 6px 0px;
  border: 1px solid rgba(197,223,239,0.7);

  z-index: 100;
  &-header {
    width: 575px;
    height: 54px;
    background: linear-gradient( 180deg, #03C8F2 0%, rgba(0,133,255,0) 93%);
    box-shadow: inset 0px 0px 30px 0px rgba(0,194,255,0);
    border-radius: 6px 6px 6px 6px;
  }
  &-content {
    width: calc(100% - 4px);
    height: calc(100% - 54px);
    overflow: auto;/* 修改滚动条的样式 */
    &::-webkit-scrollbar {
      width: 3px; /* 滚动条宽度 */
    }

    &::-webkit-scrollbar-track {
      display: none;
      background-color: transparent; /* 滚动条轨道背景色 */
    }

    &::-webkit-scrollbar-thumb {
      width: 3px; /* 滚动条滑块宽度 */
      height: 30px !important; /* 滚动条滑块高度 */
      background-color: #03C8F2;
      border-radius: 5px; /* 滚动条滑块圆角 */
    }
  }
}
</style>