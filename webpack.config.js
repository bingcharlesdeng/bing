module.exports = {
  module: {
    rules: [
      // Rule for images (adjust extensions and options as needed)
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // Output file name format
            outputPath: 'assets', // Output directory for images (optional)
          },
        },
      },
      // Rule for stylesheets (adjust extensions as needed)
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'], // Loaders for processing CSS
      },
    ],
  },
   output: {
    filename: 'bundle.js', // Output filename for your main JavaScript bundle
    path: path.resolve(__dirname, 'dist'), // Output directory for the build (replace with your desired public path)
    publicPath: '/assets/', // Public path for assets (adjust based on your deployment setup)
  },
};
