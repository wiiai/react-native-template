declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.webp'

declare module 'react-native-shadow';
declare module 'react-native-shadow-cards';
declare module 'react-native-heic-converter'
declare module 'react-native-parallax-scroll-view'
declare module 'react-native-parallax-header'

type AwaitedFun<T extends (...args: any) => any> = T extends (...args: any) => infer R ? Awaited<R> : any;