// import React, {forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useState} from 'react';
// import {
//   View,
//   Text,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';
// import { ImagePicker} from '@ant-design/react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import { baseURL } from '../../config';
// import RNFetchBlob from 'rn-fetch-blob'

// export interface IBImagePickerRef {
//   getPics: () => Promise<string[]>;
//   setPics: (list: IFileItem[]) => void;
// }

// export interface IBImagePickerProps {}

// export interface IFileItem {
//   uri?: string;
//   url?: string;
// }

// const BImagePicker: ForwardRefRenderFunction<IBImagePickerRef, IBImagePickerProps> = (props, ref) => {
//   const [state, setState] = useState({
//     granted: false,
//     files: [] as IFileItem[]
//   });

//   useImperativeHandle(ref, () => ({
//     getPics: () => {
//       return upload()
//     },
//     setPics: (files) => {
//       setState(prev => ({ ...prev, files }))
//     }
//   }));

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       requestCameraPermission();
//     }
//   }, [])

//   const handleFileChange = (files: any) => {
//     setState((prev) => ({ ...prev, files, }));
//   };

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: '需要访问相册',
//           message: '需要访问相册',
//         } as any,
//       );
//       setState(prev => ({
//         ...prev,
//         granted: granted === PermissionsAndroid.RESULTS.GRANTED,
//       }));
//     } catch (err) {
//       console.warn(err);
//     }
//   }

//   const onAddImageClick = async () => {
//     const result = await launchImageLibrary({ mediaType: 'mixed', quality: 0.2 });
//     if (result.assets?.length) {
//       setState(prev => ({
//         ...prev,
//         files: [...state.files, ...result.assets!]
//       }))
//     }
//   };

//   const uploadImage = async (uri: string) => {
//     const realPath = Platform.OS === 'ios' ? uri.replace('file://', '') : uri; 
//     return RNFetchBlob.fetch('POST', baseURL + '/upload/s3', {
//       'Content-Type' : 'multipart/form-data',
//     }, [
//         { name : 'avatar-foo', filename : 'avatar-foo.png', type:'image/jpg', data: RNFetchBlob.wrap(decodeURIComponent(realPath))},
//         { name : 'name', data : 'user'},
//       ]
//     ).then((resp) => {
//       return resp.json()
//     })
//   }

//   const upload = async () => {
//     const files = state.files;
//     // const _list = files.map(it => {
//     //   return it;
//     //   // convertHeic()
//     // })
//     const promises = files.map((it: any) => uploadImage(it.uri))
//     const res = await Promise.all(promises)
//     return res.map(it => it.url)
//   };

//   if (Platform.OS === 'android' && !state.granted) {
//     return <Text>需要访问相册的权限</Text>;
//   }

//   const files = state.files.map((it: any) => ({
//     ...it,
//     url: it.uri
//   }));

//   return (
//     <View style={{marginTop: 20, marginLeft: 0, marginRight: 0 }}>
//       <ImagePicker
//         onChange={handleFileChange}
//         files={files}
//         onAddImageClick={() => {
//           onAddImageClick();
//         }}
//         onImageClick={(index, files) => {
//           console.log(files);
//         }}
//       />
//     </View>
//   );
// }

// export default forwardRef(BImagePicker);