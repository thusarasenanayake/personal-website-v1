module.exports = {
  entry: {
    main: './src/js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'assets/md',
          },
        },
      },
    ],
  },
};
