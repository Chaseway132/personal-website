const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    entry: './personal-website-express/client/src/index.js',
    output: {
      path: path.resolve(__dirname, 'docs'),
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
        template: './personal-website-express/client/public/index.html',
        filename: 'index.html',
        minify: isProduction
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'personal-website-express/client/public/images',
            to: 'images',
            noErrorOnMissing: true
          },
          {
            from: 'personal-website-express/client/public/404.html',
            to: '404.html',
            noErrorOnMissing: true
          },
          {
            from: 'personal-website-express/client/public/custom.css',
            to: 'custom.css',
            noErrorOnMissing: true
          }
        ]
      })
    ],
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    optimization: {
      minimize: isProduction
    }
  };
};
