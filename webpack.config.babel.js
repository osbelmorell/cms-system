// import path from 'path';
// import { DefinePlugin } from 'webpack';
// // import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import nodeExternals from 'webpack-node-externals';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import sass from 'node-sass';
// import nodeSassUtils from 'node-sass-utils';
// import RobotstxtPlugin from 'robotstxt-webpack-plugin';
// import * as env from './env';
// import sassVars from './src/app/theme';

// const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

// let envVars = {
//   ...env.prod,
// };

// if (LAUNCH_COMMAND !== 'production') {
//   envVars = {
//     ...envVars,
//     ...env.dev,
//   };
// }

// const sassUtils = nodeSassUtils(sass);
// const root = process.cwd();

// const PATHS = {
//   root,
//   app: path.join(root, 'src/app'),
//   server: path.join(root, 'src/server'),
//   shared: path.join(root, 'src/shared'),
//   worker: path.join(root, 'src/worker'),
//   build: path.join(root, 'dist'),
// };

// // Plugins
// const plugins = [];


// plugins.push(
//   new MiniCssExtractPlugin({
//     filename: '[name].css',
//     chunkFilename: '[id].css',
//   }),
// );

// plugins.push(
//   new CleanWebpackPlugin({
//     dry: true,
//   }),
// );


// const robotOptions = {};
// plugins.push(
//   new RobotstxtPlugin(robotOptions),
// );
// // Plugins end

// // Modules
// const babel = {
//   test: /\.(js|jsx)$/,
//   exclude: /node_modules/,
//   use: {
//     loader: 'babel-loader',
//   },
// };

// const scss = {
//   test: /\.scss$/,
//   use: [
//     MiniCssExtractPlugin.loader,
//     'css-loader',
//     {
//       loader: 'sass-loader',
//       options: {
//         functions: {
//           'get($keys)': (pKeys) => {
//             const keys = pKeys.getValue().split('.');
//             let result = sassVars;
//             let i;
//             for (i = 0; i < keys.length; i += 1) {
//               result = result[keys[i]];
//             }
//             return sassUtils.castToSass(result);
//           },
//         },
//         data: `$prefix: "${sassVars.prefix}";`,
//       },
//     },
//   ],
// };

// const css = {
//   test: /\.css$/,
//   use: [
//     MiniCssExtractPlugin.loader,
//     {
//       loader: 'css-loader',
//       options: {
//         localIdentName: '[name]__[local]--[hash:base64:5]',
//         modules: true,
//         sourceMap: true,
//         minimize: true,
//       },
//     },
//   ],
// };

// const fileLoader = {
//   test: /.(mp4|png|jpg|gif|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
//   use: [{
//     loader: 'file-loader',
//     options: {
//       name: '[name].[ext]',
//     },
//   }],
// };

// // Modules

// // resolvers
// const resolve = {
//   modules: [PATHS.app, 'node_modules'],
//   extensions: ['.jsx', '.js'],
//   alias: {
//     shared: PATHS.shared,
//     server: PATHS.server,
//   },
// };

// const browser = {
//   mode: 'development',
//   entry: [
//     PATHS.app,
//   ],
//   output: {
//     path: PATHS.build,
//     filename: 'bundle.js',
//     publicPath: '/',
//   },
//   module: {
//     rules: [babel, scss, css, fileLoader],
//   },
//   resolve,
//   context: path.resolve(PATHS.app, ''),
//   devtool: 'inline-source-map',
//   plugins: [
//     ...plugins,
//     new DefinePlugin({
//       isBrowser: 'true',
//       ...envVars,
//     }),
//   ],
// };

// const worker = {
//   mode: 'development',
//   entry: [
//     `${PATHS.worker}/pushNotification.js`,
//   ],
//   output: {
//     path: PATHS.build,
//     filename: 'sw.js',
//     publicPath: '/',
//   },
//   // resolve,
//   context: path.resolve(PATHS.worker, ''),
//   plugins: [],
// };

// const server = {
//   mode: 'development',
//   entry: PATHS.server,
//   target: 'node',
//   output: {
//     path: root,
//     filename: 'server.js',
//     publicPath: '/',
//   },
//   externals: [nodeExternals()],
//   resolve,
//   module: {
//     rules: [babel, scss, css, fileLoader],
//   },
//   plugins: [
//     ...plugins,
//     new DefinePlugin({
//       isBrowser: 'false',
//       ...envVars,
//     }),
//   ],
// };

// export default [server, browser, worker];
