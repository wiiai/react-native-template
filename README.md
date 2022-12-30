## 1. 研究背景

react native template

## 2. 技术选型

### 2.1 技术选型

| 名称     | 方案                                            |
| -------- | ----------------------------------------------- |
| 路由库   | [react navigation](https://reactnavigation.org) |
| 状态管理 | mobx + context                                  |
| SVG 图标 | react-native-svg 搭配 react-native-iconfont-cli |
| 本地存储 | @react-native-async-storage/async-storage       |
| 时间处理 | [dayjs](https://day.js.org/docs/en/installation/typescript)                                           |
| UI 库    | [native-base](https://docs.nativebase.io/)      |

### 2.2 内部架构

```
src
├── App.tsx
├── assets
│   ├── iconfont 图标
│   └── img 图片
├── baseUI 通用UI
├── config 配置
│   ├── index.ts 常量配置
│   ├── theme.ts 主题配置
│   └── request.ts http 请求配置
├── global.d.ts 全局类型定义
├── models 状态管理目录
│   ├── account.ts
│   └── index.ts
├── navigator navigation 配置
│   ├── MainTab.tsx
│   ├── MainTabBar.tsx
│   └── index.tsx
├── pages 页面
│   ├── contact
│   │   └── index.tsx
│   ├── detail
│   │   └── index.tsx
│   ├── h5
│   │   └── index.tsx
│   ├── home
│   │   └── index.tsx
│   ├── login
│   │   ├── index.tsx
│   │   └── style.ts
│   └── me
│       └── index.tsx
├── services 接口
│   └── account.ts
├── types 类型目录
│   ├── ResData.ts
│   └── UserInfo.ts
├── utils 工具函数
│   ├── auth.ts 登录相关
│   ├── screen.ts 页面相关
│   ├── storage.ts 本地存储
└── wrappers
```

### 2.3 启动流程

```tsx
<StoreContext.Provider value={rootStore}>
  <NativeBaseProvider>
    <Navigator />
  </NativeBaseProvider>
</StoreContext.Provider>
```

### 2.4 部署流程

## 3. 技术方案

### 3.1 状态管理

mobx + context

### 3.2 SVG 图标处理

参考 https://www.npmjs.com/package/react-native-iconfont-cli

```shell
# 创建 iconfont.json
npx iconfont-init

# 将 SVG 处理为 React Component
npx iconfont-rn
```

## 4. 基础页面

<table>
  <tr>
    <td><img src="./screenshot/home.png" style="width: 240px" /></td>
    <td><img src="./screenshot/full_bg.png" style="width: 240px" /></td>
    <td><img src="./screenshot/login_screen.png" style="width: 240px" /></td>
  </tr>
    <tr>
    <td><img src="./screenshot/me_un_login.png" style="width: 240px" /></td>
    <td><img src="./screenshot/me_login.png" style="width: 240px" /></td>
  </tr>
</table>
