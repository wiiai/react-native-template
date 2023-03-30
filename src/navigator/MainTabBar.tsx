import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {isIphoneX} from '../utils/screen';

const activeColor = '#333';

export function MainTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const renderList = () => {
    return state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const isFocused = state.index === index;

      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const text =
        typeof label === 'function'
          ? label({
              focused: isFocused,
              position: 'below-icon',
              color: '#333',
              children: '',
            })
          : label;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          /*@ts-ignore*/
          navigation.navigate({
            name: route.name,
            merge: true,
          });
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          key={index}
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.item}>
          {options.tabBarIcon?.({
            focused: isFocused,
            color: isFocused ? activeColor : '#888',
            size: 20,
          })}
          <Text
            style={{
              marginTop: 4,
              fontSize: 10,
              color: isFocused ? activeColor : '#888',
            }}>
            {text}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const list = renderList();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor: '#eee',
        borderTopWidth: 1,
      }}>
      {list}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 50,
    paddingTop: 4,
    marginBottom: isIphoneX() ? 26 : 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
