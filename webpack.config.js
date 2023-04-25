// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  entry: './js/main.js', // 파일을 읽어들이기 시작하는 진입점 설정 ==> parcel main.js 하는것과 동일한 기능이라 보면됌.
  output: {  // 읽어들인 파일을 분석해서 결과물(번들)을 반환하는 설정  
    // path: path.resolve(__dirname, 'dist'), __dirname의 역할은 해당하는 파일의 실제 경로를 나타내는 nodejs의 전역 변수
    // filename: 'main.js',
    clean: true // 위에서 설정한 filename 제외하고 나머지 파일 정리해줌
  },

  module: {
    rules: [
      {
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
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}