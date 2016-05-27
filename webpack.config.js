module.exports = {
  entry:  {
    main: [
      './src/main.js'
      // './script1.js',
      // './script2.js'
    ]
  },
  output: {
    filename: './public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
