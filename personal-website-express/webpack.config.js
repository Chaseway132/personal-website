const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    entry: './client/src/index.js',
    output: {
      path: path.resolve(__dirname, '../docs'),
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
      publicPath: '/personal-website/',
      clean: true
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
            plugins: [
              '@babel/plugin-transform-modules-commonjs'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/public/index.html',
        filename: 'index.html',
        inject: 'body',
        minify: isProduction,
        cache: false
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'client/public/images',
            to: 'images',
            noErrorOnMissing: true
          }
        ]
      })
    ],
    devtool: isProduction ? false : 'eval-source-map',
    optimization: {
      minimize: isProduction
    }
  };
};
