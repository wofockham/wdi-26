const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src', // Sorry windows
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: [
            ['transform-react-jsx']
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }
};
