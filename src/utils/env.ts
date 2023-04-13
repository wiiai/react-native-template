/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-04-13 17:56:44
 * @LastEditTime: 2023-04-13 18:00:02
 * @FilePath: /react-native-template/src/utils/env.ts
 * @Description:
 */

export const NODE_ENV: 'development' | 'test' | 'production' = process.env
  .NODE_ENV as any;

export const isLiveEnv = NODE_ENV === 'production';