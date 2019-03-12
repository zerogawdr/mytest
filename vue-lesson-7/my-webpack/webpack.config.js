
const path = require('path')


module.exports = {
    entry:'./src/main.js',
    output:{

        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    mode:'development'//'production'

    //mode:'development'//'production'

    


}

//入口（entry） 告诉webpack从哪个文件开始编译
//出口（output）告诉webpack编译好的文件放哪