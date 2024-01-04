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
        vuetify({ styles: { configFile: 'assets/styles/settings.scss' } })
      ))
    },
  ],
  css: [
    "@/assets/scss/global.scss",
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "@/assets/styles/font_face.scss"
  ],
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
  vite: {
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
