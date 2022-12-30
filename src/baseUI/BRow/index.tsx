import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewProps,
} from 'react-native';

type IProps = {
    label: React.ReactNode;
    value: React.ReactNode;
  } & ViewProps

const BRow: React.FC<IProps> = props => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{props.label}:{' '}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

export default BRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  label: {
    color: '#666',
    marginRight: 10,
    lineHeight: 24,
  },
  value: {
    color: '#666',
    lineHeight: 24,
  }
})