var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/components/Wizard.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
     "react": "React",
     "react-dom": "ReactDOM"
   },
};