import { isIOS } from '@/utils/screen';
import { requireNativeComponent } from 'react-native';

const MyButton = isIOS ? requireNativeComponent('CustomButton') : requireNativeComponent('RCTButton');

export default MyButton;