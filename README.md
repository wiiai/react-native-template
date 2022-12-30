## 1. 研究背景
react native template

## 2. 技术选型
### 2.1 技术选型

| 名称 | 方案 |
| - | - |
| 路由库 | [react navigation](https://reactnavigation.org) |
| 状态管理 | mobx + context |
| SVG 图标 | react-native-svg 搭配 react-native-iconfont-cli |
| 本地存储 | - |
| 时间处理 | dayjs |
| UI 库 | - |
| 构建工具 | - |

### 2.2 内部架构

### 2.3 启动流程

### 2.4 部署流程

## 3. 技术方案

### 3.1 状态管理

### 3.2 SVG 图标处理
参考 https://www.npmjs.com/package/react-native-iconfont-cli

```shell
# 创建 iconfont.json 
npx iconfont-init

# 将 SVG 处理为 React Component
npx iconfont-rn
```