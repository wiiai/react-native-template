import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconKongbai1 from '../icon/IconKongbai1';
import BText from '../BText';

const BEmpty: React.FC<{ showIcon?: boolean }> = ({ showIcon = true }) => {
  return (
    <View style={styles.box}>
      {showIcon && <IconKongbai1 size={100}/> }
      <BText type="gray">暂无数据</BText>
    </View>
  );
};

export default BEmpty;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '-20%'
  },
});
