import React from 'react';
import {observer} from 'mobx-react-lite';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {DetailScreen} from '@/pages/detail';
import MainTabScreen, {MainTabParamList} from './MainTab';
import H5Screen from '@/pages/h5';
import LoginScreen from '@/pages/login';
import AnimateScreen from '@/pages/animate';

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Detail: undefined;
  H5: {
    url: string;
    title?: string;
  };
  Login: undefined;
  AnimateScreen: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

function RootStackScreen() {
  const hideHeaderOptions = {
    title: '',
    headerBackTitle: '',
    headerShown: false,
  };

  return (
    <RootStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <RootStack.Group>
        <RootStack.Screen
          name="MainTab"
          options={{headerShown: false}}
          component={MainTabScreen}
        />
        <RootStack.Screen
          name="Detail"
          options={hideHeaderOptions}
          component={DetailScreen}
        />
        <RootStack.Screen
          name="H5"
          options={hideHeaderOptions}
          component={H5Screen}
        />
        <RootStack.Screen
          name="AnimateScreen"
          options={hideHeaderOptions}
          component={AnimateScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default observer(Navigator);
