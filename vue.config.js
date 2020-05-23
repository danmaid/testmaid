// const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  configureWebpack: {
    devtool: "source-map"
    // plugins: [
    //     new MonacoEditorPlugin({
    //         languages: ['yaml']
    //     })
    // ]
  }
};
