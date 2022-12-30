import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ViewStyle,
  ViewProps,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import BText from '../BText';
import IconIosArrowRoundBack from '../icon/IconIosArrowRoundBack';
import {TouchableHighlight} from 'react-native-gesture-handler';

// 顶部不安全区域高度
export const TOP_INSERT_HEIGHT = Platform.OS === 'android' ? 24 : 36;

// 不安全区域填充
export const TopInsertView: React.FC<ViewProps> = ({style, ...restProps}) => {
  return (
    <View style={[{height: TOP_INSERT_HEIGHT}, style]} {...restProps}></View>
  );
};

export interface IBNavBar {
  title?: React.ReactNode | (() => React.ReactNode);
  showBack?: boolean;
  navRight?: React.ReactNode;
  navLeft?: React.ReactNode;
  useTopInsert?: boolean;
  showNavBar?: boolean;
  containerStyle?: ViewStyle;
  navbarStyle?: ViewStyle;
  border?: boolean;
  topInsertBgColor?: string;
  backIconStyle?: {
    color?: string;
    size?: number;
  };
}

const BNavBar: React.FC<IBNavBar> = ({
  showBack = true,
  useTopInsert = true,
  showNavBar = true,
  navRight,
  navLeft,
  title,
  topInsertBgColor,
  backIconStyle = {},
  containerStyle = {},
  navbarStyle = {},
  border = true,
}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const back = () => navigation.goBack();

  const renderLeft = () => {
    const getContent = () => {
      if (navLeft) return navLeft;
      if (showBack) {
        return (
          <TouchableHighlight
            onPress={back}
            underlayColor="#ddd"
            style={{width: 30}}>
            <IconIosArrowRoundBack size={30} color="#333" {...backIconStyle} />
          </TouchableHighlight>
        );
      }
    };
    return <View style={{width: 60, paddingLeft: 10}}>{getContent()}</View>;
  };

  const renderRight = () => {
    return (
      <View style={{width: 60, paddingRight: 12, alignItems: 'flex-end'}}>
        {navRight}
      </View>
    );
  };

  const renderTitle = () => {
    if (typeof title === 'function') {
      return <View style={styles.title}>{title()}</View>;
    }
    return (
      <View style={styles.title}>
        <BText style={{fontSize: 18, fontWeight: '500'}} type="main">
          {title !== undefined ? title : route.name}
        </BText>
      </View>
    );
  };

  const borderStyle = border
    ? {
        borderBottomColor: '#ddd',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
    : {
        borderBottomColor: '#ddd',
        borderBottomWidth: 0,
      };

  const topInsertStyle: ViewStyle = {
    backgroundColor: topInsertBgColor || '#fff',
  };

  return (
    <View style={[styles.header, containerStyle]}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      {useTopInsert && <View style={[styles.topInsert, topInsertStyle]}></View>}
      {showNavBar && (
        <View style={[styles.navbar, borderStyle, navbarStyle]}>
          {renderLeft()}
          {renderTitle()}
          {renderRight()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  topInsert: {
    height: TOP_INSERT_HEIGHT,
    // backgroundColor: 'blue'
  },
  navbar: {
    paddingTop: 10,
    paddingBottom: 6,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export {BNavBar};
