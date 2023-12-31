const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve("./"),
        filename: 'bundle.js'
    },
    watch: true
}