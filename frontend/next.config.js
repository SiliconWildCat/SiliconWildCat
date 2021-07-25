const path = require('path');
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.(png|jpg|jpeg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            emitFile: false,
            publicPath: '/',
          },
        },
      ],
    });
    return config;
  },
};
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({z
//       test: /.(png|jpg)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]?[hash]',
//             emitFile: false,
//             publicPath: '/',
//           },
//         },
//       ],
//     });
//     return config;
//   },
// exportPathMap: function () {
//   return {
//     '/page1': { page: '/page1' },
//     '/page2-hello': { page: '/page2', query: { text: 'hello' } },
//     '/page2-world': { page: '/page2', query: { text: 'world' } },
//   };
// },
//};
