var path = require('path');


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
    filename: 'public/dist/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
     "react": "React",
     "react-dom": "ReactDOM"
   },
   devServer: {
     open: true
   }
};