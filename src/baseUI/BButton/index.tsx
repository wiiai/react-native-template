import React from 'react';
import {
  Text,
  TextStyle,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import MTouchableOpacity from '../MTouchableOpacity';

const BButton: React.FC<
  {
    style?: ViewStyle;
    titleStyle?: TextStyle;
    title: string;
  } & TouchableWithoutFeedbackProps
> = ({children, titleStyle, title, style, ...rest}) => {
  return (
    <View style={[styles.flex, style]}>
      <MTouchableOpacity style={styles.flex} {...rest}>
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      </MTouchableOpacity>
    </View>
  );
};

export default BButton;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});
