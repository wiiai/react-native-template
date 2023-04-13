/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-01-04 18:54:11
 * @LastEditTime: 2023-04-13 18:52:37
 * @FilePath: /react-native-template/src/config/theme.ts
 * @Description:
 */
import {extendTheme} from 'native-base';

export const theme = {
  primaryColor: '#f4ea2a',
  brandColor: '#f4ea2a',
  mainColor: '#333333',
  secondColor: '#6d6b6b',
  grayBgColor: '#f4f5fb',
  grayBorderColor: '#ddd',
  borderColor: '#f5f5f5',
  grayColor: '#888',
  textSecondColor: '#6d6b6b',
  indictorColor: '#f44336',
  white: '#fff',
};

export const nativeTheme = extendTheme({
  colors: {
    primary: {
      800: "#3765f0", // 按钮 press in 背景颜色
      600: "#6085f4", // 按钮默认背景
    },
  },
});

export default theme;
