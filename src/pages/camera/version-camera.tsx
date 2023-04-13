// /*
//  * @Author: GaoXiong
//  * @LastEditors: GaoXiong
//  * @Date: 2023-04-11 23:45:41
//  * @LastEditTime: 2023-04-12 01:04:28
//  * @FilePath: /react-native-template/src/pages/camera/index.tsx
//  * @Description:
//  */
// // /*
// //  * @Author: GaoXiong
// //  * @LastEditors: GaoXiong
// //  * @Date: 2023-04-11 23:45:41
// //  * @LastEditTime: 2023-04-11 23:50:47
// //  * @FilePath: /react-native-template/src/pages/camera/index.tsx
// //  * @Description:
// //  */
// import React, {useEffect, useState} from 'react';
// import {Animated, StyleSheet, Text, View} from 'react-native';
// import {useCameraDevices, Camera} from 'react-native-vision-camera';
// import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
// import BPage from '@/baseUI/BPage';

import { Text, View } from "react-native"

// export function CameraScreen() {
//   const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
//   const [hasCameraPermission, setHasCameraPermission] = useState(false);

//   const devices = useCameraDevices();
//   const device = devices.back;

//   const [frameProcessor, barcodes] = useScanBarcodes(
//     [BarcodeFormat.ALL_FORMATS],
//     {checkInverted: true},
//   );

//   const request = async () => {
//     const cameraPermission = await Camera.requestCameraPermission();
//     console.log(cameraPermission);
//     // setHasCameraPermission(cameraPermission == 'authorized');
//   };

//   React.useEffect(() => {
//     console.log(barcodes);
//   }, [barcodes]);

//   useEffect(() => {
//     request();
//     // Camera.getCameraPermissionStatus().then((status) => setHasCameraPermission(status === 'authorized'))
//     // Camera.getMicrophonePermissionStatus().then((status) => setHasMicrophonePermission(status === 'authorized'));
//   }, []);

//   if (device == null) return <Text>LOADING...</Text>;

//   return (
//     <BPage style={{flex: 1}}>
//       {barcodes.map((barcode, idx) => (
//         <Text key={idx} style={styles.barcodeTextURL}>
//           {barcode.displayValue}
//         </Text>
//       ))}
//       <View style={{flex: 1}}>
//         <Camera
//           isActive={true}
//           style={StyleSheet.absoluteFill}
//           device={device}
//           preset="medium"
//           audio={hasMicrophonePermission}
//           frameProcessor={frameProcessor}
//           frameProcessorFps={5}
//         />
//       </View>
//     </BPage>
//   );
// }

// const styles = StyleSheet.create({
//   barcodeTextURL: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });


export const CameraScreen = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}