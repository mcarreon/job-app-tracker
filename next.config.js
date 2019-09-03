const css = require("@zeit/next-css");
const sass = require("@zeit/next-sass");
const fonts = require("next-fonts");
const imgs = require("next-images");

// module.exports = css(sass({
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })

//     return config
//   }
// }));

module.exports = imgs(
  css(
    sass({
      webpack(config, options) {
        config.module.rules.push({
          test: /.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        });
        return config;
      }
    })
  )
);
