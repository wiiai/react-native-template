import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Animated,
  LayoutRectangle,
} from 'react-native';

interface ISegmentContext {
  current: number;
  onSelected: (index: number) => void;
  onMeasureItem: (index: number, layout: LayoutRectangle) => void;
}

export const SegmentedControllerContext =
  React.createContext<ISegmentContext | null>(null);

interface IProps {
  style?: ViewStyle;
  onSegmentSelected: (index: number) => void;
}

const MSegment: React.FC<IProps> = ({style, children, onSegmentSelected}) => {
  const [current, setCurrent] = useState(0);
  const ref = React.useRef<Record<number, number>>({});
  const dest = React.useRef(new Animated.Value(0)).current;
  const styles = useStyles((Array.isArray(children) ? children : []).length);

  const animate = (active: number) => {
    const offset = Object.values(ref.current)
      .filter((_, index) => active > index)
      .reduce((acc, cur) => acc + cur, 0);

    Animated.timing(dest, {
      toValue: offset,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCurrent(active);
      onSegmentSelected?.(active);
    });
  };

  const list = (
    <View style={styles.wrapper}>
      <SegmentedControllerContext.Provider
        value={{
          current,
          onSelected: index => {
            animate(index);
          },
          onMeasureItem: (index: number, layout: LayoutRectangle) => {
            ref.current[index] = layout.width;
          },
        }}>
        <View style={[styles.container, style]}>
          <Animated.View
            style={{
              ...styles.activeMask,
              transform: [{translateX: dest}],
            }}
          />
          {children}
        </View>
      </SegmentedControllerContext.Provider>
    </View>
  );

  return list;
};

const useStyles = (childrenCount: number) => {
  return StyleSheet.create({
    wrapper: {
      padding: 5,
      backgroundColor: '#f4f4f4',
      borderRadius: 2,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'stretch',
      alignItems: 'stretch',
      height: 28,
    },
    activeMask: {
      position: 'absolute',
      left: 0,
      width: `${100 / childrenCount}%`,
      height: '100%',
      backgroundColor: '#fff',
      borderRadius: 2,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 2,
      shadowOpacity: 0.2,
    },
  });
};

export default MSegment;
