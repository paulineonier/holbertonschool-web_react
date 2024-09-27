const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './js/main.ts', // Chemin d'entrée du fichier TypeScript
  output: {
    filename: 'bundle.js', // Nom du fichier de sortie
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
  },
  resolve: {
    extensions: ['.ts', '.js'], // Extensions à résoudre
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Pour les fichiers TypeScript
        use: 'ts-loader', // Utilisation de ts-loader
        exclude: /node_modules/, // Exclure le dossier node_modules
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, 'tsconfig.json'), // Chemin vers tsconfig.json
      },
      async: false,
    }),
  ],
  mode: 'development', // Mode de développement
};
