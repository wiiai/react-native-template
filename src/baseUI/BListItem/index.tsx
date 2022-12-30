import React from 'react';
import {StyleSheet, Text, TouchableOpacityProps, View} from 'react-native';
import IconArrowRight from '../icon/IconArrowRight';
import BHStack from '../BHStack';
import MTouchableOpacity from '../MTouchableOpacity';

interface IProps {
  title?: React.ReactNode;
  icon?: string | React.ReactNode;
  link?: boolean;
  border?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
  value?: React.ReactNode;
}

const BListItem: React.FC<IProps> = ({title, icon, link = true, border = true, value, ...rest}) => {
  return (
    <MTouchableOpacity {...rest}>
      <View style={styles.item}>
        <View style={styles.inner}>
          <Text style={styles.title}>{title}</Text>
          <BHStack>
            {value ? value : null}
            {link && <IconArrowRight color={'#ddd'} /> }
          </BHStack>
        </View>
        {border && <View style={styles.line}></View>}
      </View>
    </MTouchableOpacity>
  );
};

export default BListItem;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: 48,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ebedf0',
  },
  title: {
    fontSize: 16,
  },
});
