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
