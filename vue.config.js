module.exports = {
  chainWebpack: (config) => {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/orbital_v_bookitnus/'
    : '/'

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
