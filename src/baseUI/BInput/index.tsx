import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import IconClose from '../icon/IconClose';
import BHStack from '../BHStack';
import MTouchableOpacity from '../MTouchableOpacity';

interface IProps extends TextInputProps {
  onClear?: () => void;
}

const BInput: React.FC<IProps> = ({onClear, ...rest}) => {
  const handleClear = () => onClear?.();
  return (
    <View
      style={{
        justifyContent: 'center',
        borderRadius: 24,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,
      }}>
      <BHStack style={{paddingVertical: 10}}>
        <TextInput
          style={{flex: 1, minHeight: 24, padding: 0, paddingRight: 10}}
          {...rest}
        />
        {rest.value ? (
          <MTouchableOpacity onPress={handleClear}>
            <IconClose color={'#888'} />
          </MTouchableOpacity>
        ) : null}
      </BHStack>
    </View>
  );
};

export default BInput;
