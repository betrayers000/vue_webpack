const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // entry 시작점
    // javascript 최상단 코드
    // __dirname => root 주소
    mode: 'development',
    entry:{
        app: path.join(__dirname, 'src', 'main.js')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],

    // 결과물
    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}