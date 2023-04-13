/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-01-04 18:54:10
 * @LastEditTime: 2023-04-12 13:37:55
 * @FilePath: /react-native-template/index.js
 * @Description: 
 */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';

// some demos
// import App from './src/plugins/notification/Demo'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
