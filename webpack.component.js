const path=require('path')
const {VueLoaderPlugin}=require('vue-loader')
const glob=require('glob')
const list ={};

async function makeList(dirPath,list){
    const files=glob.sync(`${dirPath}/**/index.js`)
    files.forEach(e => {
      list[e.split(/[/.]/)[2]]="./"+e
    });
}
makeList('components',list)
module.exports={
    entry:list,
    mode:'production',
    output:{
        filename:'[name].umd.js',//name 会自动匹配入口文件名
        path:path.resolve(__dirname,'dist'),
        library:'three-bg',
        libraryTarget:'umd'
    },
    plugins:[
     new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {loader:'vue-loader',}
                ]},
                {
              test:/\.scss$/,
                use:[ 'style-loader','css-loader','sass-loader']
            }
        ]
    }
}