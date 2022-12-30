import * as React from 'react';
import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  IconContactO,
  IconHome,
  IconHomeO,
  IconManage,
  IconManageO,
  IconPeople,
  IconPeopleO,
} from '@/assets/iconfont';

import {MainTabBar} from './MainTabBar';
import IconContact from '@/assets/iconfont/IconContact';
import {HomeScreen} from '@/pages/home';
import {ContactScreen} from '@/pages/contact';
import {MeScreen} from '@/pages/me';
import { RouteProp } from '@react-navigation/native';
import { RootStackNavigation, RootStackParamList } from '.';

export type MainTabParamList = {
  Home: undefined;
  Contact: undefined;
  Me: undefined;
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabParamList>;

export interface MainTabProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'MainTab'>;
}

const Tab = createBottomTabNavigator();

const RootStack: React.FC<MainTabProps>  = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MainTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0025ff',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: '消息',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconHome color={color} />
            ) : (
              <IconHomeO color={color} />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{
          title: '朋友',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconManage color={color} />
            ) : (
              <IconManageO color={color} />
            );
          },
        }}
        component={ContactScreen}
      />
      <Tab.Screen
        name="Me"
        options={{
          title: '我的',
          tabBarIcon: ({focused, color}: {focused: boolean; color: string}) => {
            return focused ? (
              <IconPeople color={color} />
            ) : (
              <IconPeopleO color={color} />
            );
          },
        }}
        component={MeScreen}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
