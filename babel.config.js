/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-01-04 18:54:10
 * @LastEditTime: 2023-04-13 18:12:52
 * @FilePath: /react-native-template/babel.config.js
 * @Description: 
 */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src'
        },
      }
    ]
  ]
};
