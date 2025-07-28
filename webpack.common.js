// This library allows us to combine paths easily

module.exports = {
  entry: {
    bootstrap: ["./src/js/bootstrap.js"],
    "kraken.alert.display": ["./src/js/kraken.alert.display.js"],
    "kraken.carousel": ["./src/js/kraken.carousel.js"],
    "kraken.dismiss": ["./src/js/kraken.dismiss.js"],
    "kraken.mediaquery": ["./src/js/kraken.mediaquery.js"],
    "kraken.misc": ["./src/js/kraken.misc.js"],
    "kraken.scroll": ["./src/js/kraken.scroll.js"],
    "kraken.scrolltocontent": ["./src/js/kraken.scrolltocontent.js"],
    "kraken.sticky": ["./src/js/kraken.sticky.js"],
    "kraken.video": ["./src/js/kraken.video.js"],
  },
  optimization: {
    splitChunks: {
      hidePathInfo: true,
      cacheGroups: {
        defaultVendors: {
          idHint: "vendors",
        },
        vendorbootstrap: {
          test: /[\\/]node_modules[\\/](bootstrap|@popperjs)[\\/]/,
          name: "vendors~bootstrap",
          chunks: "all",
        },
      },
    },
    chunkIds: "named",
  },
};
