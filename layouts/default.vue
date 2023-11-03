<template lang="pug">
.layout-wrapper
  nav.header
    NuxtLink.navbar__link(to='/') Home
    NuxtLink.nabvbar__link(to='heroes') Heroes
  slot
  .footer Footer
</template>
