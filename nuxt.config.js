module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '2018-01_svg-sprite-loader-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'svg-sprite-loader with nuxt.js demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
        })
      }
    }
  }
}
