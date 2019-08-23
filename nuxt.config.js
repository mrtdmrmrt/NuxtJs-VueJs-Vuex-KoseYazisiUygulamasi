const pkg = require('./package')

module.exports = {
  //universal hem client hemde server da çalıştırır
  //spa ise sadece clienti derler.
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    //title: pkg.name,
    title : 'Köşe Yazısı Uygulaması',//ben ekledim
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    //scripti biz ekledik
    script : [
      //{src : 'https://jquery....'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#666' ,
    height : '3px', //bunu ekledim
    failedColor : 'orange' //bunu ekledim
},
  //loading : false dersek loading bar çalışmaz

  /*
  ** Global CSS
  */
  css: [
    "~/assets/style/bootstrap.min.css",
    
    "~/assets/style/transition.css"
  ],
  // dev : false --> nuxtjs çalışırken kendisi derler zaten
  //env ben ekledim
  env : {
    baseURL : "https://kose-yaziliri-nuxtjs.firebaseio.com/"
  },
  //generate : {},
  //rootDir : "/my-app", tüm dosyaları my-app dosyası altında toplar
  //srcDir :"/client", client de çalışacak dosyaları client dosyası adı altında toplar
  router : {
    extendRoutes (routes , resolve)
    {
      //name : test yapamayız çünkü klasörün içinde test.vue var isim çakışması olur
      routes.push({
        path : '/custom-route',
        component : resolve(__dirname,'pages/test.vue')
      })
    }
  },
  transition : {
    //layoutların hepsine uygula
    name : "layout",
    mode : "out-in"

  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //Filter ve bir çok import işlemleri için ortak alan
    "~/plugins/Components.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios : [

  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
