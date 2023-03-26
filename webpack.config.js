const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:{
    main: '/src/index.js',
    1: '/src/pages/page1/1.js',
    2: '/src/pages/page2/2.js',
    3: '/src/pages/page3/3.js',
    4: '/src/pages/page4/4.js',
    5: '/src/pages/page5/5.js',
    6: '/src/pages/page6/6.js',
    7: '/src/pages/page7/7.js',
    8: '/src/pages/page8/8.js',
    9: '/src/pages/page9/9.js',
    10: '/src/pages/page10/10.js',
  },

  plugins: [new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
      {
        test: /\.(png|jpe?g|gif)$/i,  
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[name].[ext]',
              outputPath: 'images/'
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: ''
  },

  optimization: {
    splitChunks: { chunks: "all" },
  },
};
