// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify({ styles: { configFile: 'assets/settings.scss' } })
      ))
    },
  ],
  css: ["@/assets/scss/global.scss", "vuetify/styles/main.sass", "@mdi/font/css/materialdesignicons.css"],
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_vars.scss";',
        },
      },
    },
  },
  imports: {
    autoImport: true,
    dirs: ['stores'],
  },
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      apiPath: process.env.API_PATH,
      accessToken: process.env.ACCESS_TOKEN
    }
  }
})
