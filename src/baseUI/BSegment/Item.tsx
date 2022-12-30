import React, {useContext} from 'react';
import {View, Text, StyleSheet, ViewStyle, TouchableWithoutFeedback} from 'react-native';
import {SegmentedControllerContext} from './index';

interface IProps {
  index: number;
  title: React.ReactNode;
  style?: ViewStyle;
}

const MSegmentedItem: React.FC<IProps> = ({index, style, title}) => {
  const context = useContext(SegmentedControllerContext);
  const handleClick = () => context?.onSelected(index);

  return (
    <View style={[style, styles.container]} onLayout={(event) => {
      context?.onMeasureItem(index, event.nativeEvent.layout)
    }}>
      <TouchableWithoutFeedback onPress={handleClick}>
        <Text style={styles.title}>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
    borderRadius: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default MSegmentedItem;
