const path = require('path')
const webpack = require('webpack')

module.exports = {
mode: "production",
  devtool: 'source-map',
  entry: [
    
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
       
        presets:  ['react', 'es2017'] 
      }
   },
     
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'}
    ]
  }
}
