<template lang="pug">
div
  nav.header.test-global
    NuxtLink.navbar__link(to='/') Home
    NuxtLink.nabvbar__link(to='heroes') Heroes
  slot
  div Footer
</template>
<style lang="scss">
</style>