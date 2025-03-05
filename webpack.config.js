const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  const fileNameOutput = 'bank-app-widget'

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${fileNameOutput}.js`,
      library: 'BankJustWidget',
      libraryTarget: 'umd',
      clean: true
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                // Отключаем CSS-модули, так как вы используете прямые имена классов
                modules: false,
                sourceMap: !isProduction
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
                // Используем современный API для Sass
                api: 'modern'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: `${fileNameOutput}.css`
            })
          ]
        : []),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'), // Путь к исходному index.html
        filename: 'index.html', // Имя выходного файла в dist
        inject: false // Внедрять скрипты в конец <body> - 'body'
      })
    ],
    devServer: {
      static: path.join(__dirname, 'public'),
      port: 3300,
      open: true
    }
  }
}
