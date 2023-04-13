/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-04-13 17:44:27
 * @LastEditTime: 2023-04-13 18:22:37
 * @FilePath: /react-native-template/src/utils/logger.ts
 * @Description:
 */
import {logger, fileAsyncTransport} from 'react-native-logs';
import RNFS from 'react-native-fs';
import {isLiveEnv} from './env';

const config = !isLiveEnv
  ? {
      severity: 'debug',
      transport: fileAsyncTransport,
      transportOptions: {
        FS: RNFS,
        fileName: `app_logs_{date-today}.log`,
      },
    }
  : {
      severity: 'debug',
    };

const log = logger.createLogger(config);

export {log as logger};