<template lang="pug">
.layout-wrapper
  .header-wrapper
    nav.header
      div Logo
      div
        NuxtLink.navbar__link(to='/') Home
        NuxtLink.nabvbar__link(to='heroes') Heroes
      div Logo
  slot
  .footer Footer
</template>
<style lang="scss">
</style>
