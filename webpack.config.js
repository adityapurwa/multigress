const path = require('path');

const entry = path.resolve(__dirname, 'src', 'index.tsx');
const output = path.resolve(__dirname, 'dist');
const filename = '[name].js';

module.exports = {
  entry: {
    index: entry
  },
  output: {
    publicPath: 'dist/',
    path: output,
    filename: filename
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'plotly.js': 'plotly.js/dist/plotly'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};