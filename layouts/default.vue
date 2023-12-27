<template lang="pug">
.layout-wrapper
  .header
    nav.header__content.d-flex.justify-space-between.align-center.pa-4
      .d-flex.header-logo
        NuxtLink.navbar__link(to='/')
          v-img(width="80" height="42" src="./logo/dc_marvel_logo_two.webp")
      .header-links.d-flex.align-center.justify-center.flex-wrap
        NuxtLink.navbar__link(to='/') Home
        NuxtLink.navbar__link.ml-4(to='heroes') Heroes
  slot
  .footer.pb-1
    .footer-content.pa-4
      .d-flex.footer-logo
          NuxtLink.navbar__link(to='/')
            v-img(width="80" height="42" src="./logo/dc_marvel_logo_two.webp")
      .footer-links
        NuxtLink.navbar__link(to='/') Home
        NuxtLink.navbar__link.ml-4(to='heroes') Heroes
      .contacts.text-white
        span <b>Contacts:</b> +380961003948
</template>
<style lang="scss">
.layout-wrapper {
  .header__content {
    position: absolute;
    top: 1.5em;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .footer-content {
    margin: 24px auto 16px;
    align-items: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 2fr;
    .contacts {
      text-align: start;
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
  .footer-content,
  .header__content {
    z-index: 1;
    width: 98%;
    background: rgba(202, 197, 197, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(204, 53, 53, 0.85);
  }
  .footer-logo .v-img img,
  .header-logo .v-img img {
    border: 1px solid $white;
    border-radius: 16px;
  }
  .footer-links,
  .header-links {
    font-size: $font-size-18;
    font-family: Inter;
    font-weight: 400;
    a {
      color: $white;
      text-transform: uppercase;
      text-decoration: none;
    }
    .navbar__link {
      padding: 0.2em 0.5em;
      border-radius: 16px;
      display: inline-block;
      position: relative;
      border: 1px solid $white;
      background: rgba(111, 120, 150, 0.2);
      transition: all .6s ease;
      -webkit-transition: all .6s ease;
      &:nth-child(odd) {
        color: $blue;
      }
      &:nth-child(even) {
        color: $red;
      }
      &:hover {
        background: rgba(239, 240, 243, 0.2);
        box-shadow: 29px 24px 113px -8px rgba(0,0,0,0.84);
        -webkit-box-shadow: 29px 24px 113px -8px rgba(0,0,0,0.84);
        -moz-box-shadow: 29px 24px 113px -8px rgba(0,0,0,0.84);
      }
    }
  }
  .footer-links {
    text-align: end;
  }
}
@media(min-width: 768px) {
  .layout-wrapper .footer-content {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 3fr 2fr;
    .footer-links {
      text-align: start;
    }
    .contacts {
      text-align: end;
      grid-column-start: unset;
      grid-column-end: unset;
    }
  }
}
</style>
