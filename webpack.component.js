const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const list = {}

async function makeList (dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    files.forEach(e => {
        list[e.split(/[/.]/)[2]] = "./" + e
    })
}
makeList('components', list)
module.exports = {
    entry: list,
    mode: 'production',
    output: {
        filename: '[name].umd.js',//name 会自动匹配入口文件名
        path: path.resolve(__dirname, 'dist'),
        library: 'threeBg',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader', }
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        vue: 'vue',
        three:'three'
    }
    ,
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false, //不将注释提取到单独的文件中
        })],
    },
}