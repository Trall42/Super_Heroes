<template lang="pug">
.loader-wrapper.d-flex.justify-center.align-center
  .loader
    img(src='~/public/batman.gif')
</template>
<style lang="scss">
.loader-wrapper {
  z-index: 100;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(15, 14, 14, 0.9);
  .loader img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}
</style>