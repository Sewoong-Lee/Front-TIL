const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); //패스를 가져옴 //노드 환경에서는 require로 불러옴

module.exports = {
    mode: 'development', //개발할때는
    devtool: 'eval', //속도가 빨라짐
    resolve: {  //확장자 처리
        extensions: ['.js', '.vue'], //입포트 등의 경로에서 확장자 제거 가능
    },
    entry: { //아래부터 순서대로 읽음
        app: path.join(__dirname, 'main.js'),

    },
    module: {//자바스크립트를 어떻게 합칠껀지
        rules: [{
            test: /\.vue$/, //끝이 뷰로 끝나는 애들을 사용하겠다.
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', //app.js
        path: path.join(__dirname, 'dist'),
    },
};