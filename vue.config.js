module.exports = {
  publicPath: '/photosnap-multipage-website/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/styles.sass";`
      }
    }
  }
};