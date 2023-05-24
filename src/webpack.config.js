const path = require('path');

module.exports = {
  entry: './src/index.js', // O arquivo de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'), // O diretório de saída dos arquivos compilados
    filename: 'bundle.js' // O nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use essa regra para arquivos JavaScript
        exclude: /node_modules/, // Exclua a pasta 'node_modules' da compilação
        use: {
          loader: 'babel-loader', // Use o Babel para transpilar o código
          options: {
            presets: ['@babel/preset-env'] // Use as configurações do preset-env
          }
        }
      }
    ]
  }
};
