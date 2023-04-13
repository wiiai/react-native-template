/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-04-13 17:44:27
 * @LastEditTime: 2023-04-13 18:01:55
 * @FilePath: /react-native-template/src/utils/logger.ts
 * @Description:
 */
import {logger, fileAsyncTransport} from 'react-native-logs';
import RNFS from 'react-native-fs';
import {isLiveEnv} from './env';

let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

const config = isLiveEnv
  ? {
      severity: 'debug',
      transport: fileAsyncTransport,
      transportOptions: {
        FS: RNFS,
        fileName: `logs_{date-today}`, // Create a new file every day
      },
    }
  : {
      severity: 'debug',
    };

const log = logger.createLogger(config);

log.info('Print this string to a file');

export {log as logger};
