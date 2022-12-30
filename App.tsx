import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  IconContactO,
  IconHome,
  IconHomeO,
  IconPeople,
  IconPeopleO,
} from './src/assets/iconfont';
import {MainTabBar} from './src/navigator/MainTabBar';
import IconContact from './src/assets/iconfont/IconContact';
import { HomeScreen } from './src/pages/home';
import { ContactScreen } from './src/pages/contact';
import { MeScreen } from './src/pages/me';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <MainTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: '#0025ff',
        }}>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            title: '消息',
            tabBarIcon: ({
              focused,
              color,
            }: {
              focused: boolean;
              color: string;
            }) => {
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
            tabBarIcon: ({
              focused,
              color,
            }: {
              focused: boolean;
              color: string;
            }) => {
              return focused ? (
                <IconContact color={color} />
              ) : (
                <IconContactO color={color} />
              );
            },
          }}
          component={ContactScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{title: '我的',
        
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
          }) => {
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
    </NavigationContainer>
  );
}
