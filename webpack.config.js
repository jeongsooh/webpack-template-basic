// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


// export
module.exports = {
  // parcel index.html
  // 파일을 읽어드리기 시작하는 진입점 설정, parcel과는 완전히 다르므로 연관시켜서 해석하지 말 것 
  entry: './js/main.js',

  // 결과물을 반환하는 설정 path와 화일명 적으면 그대로 생성됨, 앞서 작성된 것들을 지우려면 clean: true 옵션설정
  output: {
    // path: path.resolve(__dirname, 'dist'),     // node js에서 필요로 하는 절대경로 
    // filename: 'main.js',
    clean: true
  },
  // main.js에서 css 화일을 읽어서 반영할 수 있도록 도와주는 css-loader와 style-loader 관련된 설정
  module: {
    rules: [
      {
        // test: /\.css$/,
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ]
  // devServer: {
  //   host: 'localhost'
  // }
}