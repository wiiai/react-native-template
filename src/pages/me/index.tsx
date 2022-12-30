import BPage from '@/baseUI/BPage';
import {useStore} from '@/models';
import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from 'native-base';
import {observer} from 'mobx-react-lite';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '@/navigator/MainTab';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@/navigator';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const _MeScreen: React.FC = () => {
  const store = useStore();
  const {userInfo} = store.userStore;
  const navigation = useNavigation<INavigateProps['navigation']>();

  if (!userInfo) {
    return (
      <BPage showNavBar={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            size={'md'}
            style={{width: 110, marginTop: 10}}
            bgColor={'purple.700'}
            onPress={() => navigation.navigate('Login')}>
            立即登录
          </Button>
        </View>
      </BPage>
    );
  }

  return (
    <BPage showNavBar={false}>
      <View
        style={{
          flex: 1,
          paddingTop: '45%',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: userInfo.avatar}}
          style={{width: 100, height: 100}}></Image>
        <Text style={{fontSize: 20, marginTop: 20}}>
          {userInfo.nickname}({userInfo.id})
        </Text>
        <Button
          size={'md'}
          style={{width: 110, marginTop: 10}}
          bgColor={'purple.700'}
          onPress={() => store.userStore.logout()}>
          退出登录
        </Button>
      </View>
    </BPage>
  );
};

export const MeScreen = observer(_MeScreen);
