import autoprefixer from "autoprefixer";
import postcss_nested from "postcss-nested";
import postcss_mixins from "postcss-mixins";
import postcss_custom_media from "postcss-custom-media";

let config;
config = {
  plugins: [autoprefixer, postcss_nested, postcss_mixins, postcss_custom_media],
};

export default config;

// const path = require('path')
//
// module.exports = {
//   plugins: [
//     require('postcss-import')({ path: [path.resolve(__dirname + "/")] }),
//     require('autoprefixer'),
//     require('postcss-mixins'),
//     require('postcss-custom-media'),
//     require('postcss-nested'),
//   ],
// }
