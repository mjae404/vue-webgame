const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
const path = require('path'); // node에서 도와주는 모듈. 절대경로 기재할 때 사용.

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js'),// 하나로 합칠, 가장 대표가 되는 파일
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', // 이렇게 해줘도 됨.
        path: path.join(__dirname, 'dist') // 현재 경로 접근
    },
}