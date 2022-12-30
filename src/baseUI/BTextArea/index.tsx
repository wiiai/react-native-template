import React, {useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

const BTextArea: React.FC<TextInputProps> = ({ value, onContentSizeChange, ...restProps }) => {
  const [state, setState] = useState({
    height: 0,
  });

  return (
    <View
      style={{
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
      }}>
      <TextInput
        textAlignVertical="top"
        value={value}
        multiline={true}
        style={{
          minHeight: 24,
          padding: 0,
          height: Math.max(state.height, 48),
        }}
        placeholder="标题"
        onContentSizeChange={event => {
          const {height} = event.nativeEvent.contentSize;
          setState(prev => ({...prev, height}));
          onContentSizeChange?.(event);
        }}
        {...restProps}
      />
    </View>
  );
};

export default BTextArea;