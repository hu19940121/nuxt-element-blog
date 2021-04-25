const path =require('path')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '梦如南笙',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
  ],
  server: {
    host: '0', // default: localhost
    port: 3001 // default: 3000
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/icons/index.js',
    '@/plugins/bgm-player/index.js',
    '@/plugins/kanbanniang/index.js',
    { src: '@/plugins/my.js', mode: 'client'  },
    { src:'~/plugins/api.js' },
    { src: '@/plugins/filters.js'},
    { src: '@/plugins/valine.js',mode: 'client'},

    // { src: '@/plugins/vue-meditor.js',  mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [],
    scss: './assets/css/index.scss',
    less: [],
    stylus: './assets/css/variables.styl',
  },
  axios: {
    baseURL: 'https://kaier001.com/api'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/,/^vue-meditor/],
    extend (config, { isDev, isClient }) { //配置全局scss变量
      // config.module.rules.push({
      //   test: /\.scss$/i,
      //   loader: 'sass-resources-loader',
      //   options: {
      //     // Provide path to the file with resources
      //     resources: './assets/css/index.scss',
      //   }
      // }) 

      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]

      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, //匹配.svg
        include: [path.resolve(__dirname, 'assets/icons/svg')], //将存放svg的目录加入到loader处理目录
        use: [{ loader: 'svg-sprite-loader',options: {symbolId: 'icon-[name]'}}]
      })
    }
  }
}
